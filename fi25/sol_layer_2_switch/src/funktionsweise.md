# Funktionsweise Layer 2 Switch
    

## Recap Ethernet

![Ethernet Frame](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.flukenetworks.com%2Fsites%2Fdefault%2Ffiles%2Fblog%2Fethernetbacktobasic01_1.png&f=1&nofb=1&ipt=88cc91253a6c972604b462015979af18ec41666926ddde6551b1688bbf81ae4c)

|Feld|Zweck|
|-|-|
|**7 Byte Präamble**:|  dient zur Taktsynchronisation, Bytes haben alle den gleiche Inhalt "10101010"|
|**SFD**:| Markiert Beginn des Frame Headers, enthält "10101011"|
|**Destination Mac Address**:|Enthält die Mac Addresse des Empfängers (Ziel)|
|**Source Mac Address**|Enthält die Mac Addresse des sendenden Gerätes|
|**Length / Type**|Gibt die Länge der Nutzdaten an oder bei moderneren Protokollen den Typ des Ethernet Frames|
|**Data**|Enthält die eigentlichen Nutzdaten|
|**CRC**|Enthält eine CRC-Checksum, zum überprüfen ob Bits gekippt sind (ähnlich wie die Quersumme einer Zahl)|

### Sendevorgang, Empfangsvorgang (nur Kabel also CSMA/CD)

1. Endgerät bereitet Ethernet Frame vor (z.B. Mac Addressen werden eingetragen, ...) 
2. Die physische Leitung wird abgehört, wenn diese frei ist werden die Daten Bitweise übertragen
3. Der Empfänger speichert einzelne Bits ab, bis das Frame vollständig übertragen ist
4. Der Empfänger überprüft das Frame mit der CRC-Checksum --> falls es Fehlerhaft ist, wird das Frame verworfen (höhere Schichten müssen damit rechnen, dass Frames verloren gehen)
5. Der Empfänger vergleicht die Ziel Mac-Addresse mit der eigenen Mac-Addresse --> stimmt diese nicht überein wird das Paket verworfen
6. Höhere Schichten verarbeiten die Nutzdaten

### mögliche Fehler, die auftreten können

1. Wenn Geräte gleichzeitig senden kollidieren Signale
    - alle aktiven Netzwerkgeräte können das erkennen und senden ein Jam-Signal, damit wissen alle Geräte in der Kollisionsdomäne, dass eine Kollision aufgetreten ist und stoppen den Sendevorgang. Nach einer bestimmten Zeit, wird die Leitung wieder abgehört und wenn möglich erneut gesendet 

2. Durch Elektromagnetische Strahlung werden Spannungen in den Leiter induziert und verursachen Störungen --> z.B. kippt ein Bit von 1 auf 0
    - wird vom Empfänger meistens als Fehler erkannt, durch CRC 

## Aufgaben (Hub vs Switch)

### Hub (Layer1)
- Alle angeschlossenen Geräte werden physisch miteinander verbunden
- die Signale, die ein Gerät sendet werden an alle Teilnehmer verteilt
- keine Überprüfung der Signale und Frames

### Switch (Layer2)
- Frames werden vom Switch zwischengespeichert und analysiert, bei Fehlern wird das Paket verworfen
- Switch führt eine interne Tabelle, welche einer Mac-Addresse einen Port zuordnet
    - Bei Inbetriebnahme "lernt" der Switch welche Mac Addressen hinter welchem Port liegen
    - Wenn für eine Ziel Mac Addresse kein Eintrag in der Tabelle vorliegt wird das Frame über alle Ports gesendet
    - Wenn es einen Eintrag der Ziel Mac Addresse gibt, wird das Frame nur über den hinterlegten Port weitergeleitet 

## Switch - Frame Weiterleitung

1. Switch empfängt Bitweise ein Frame und merkt sich den Port über den das Frame empfangen wurde
2. Switch prüft CRC Checksum, wenn falsch wird das Frame verworfen
3. Switch trägt die Sender-Mac Addresse und den Port(über dem Enmpfangen wurde) in die Tabelle ein
4. Switch sucht Empfänger-Mac und den hinterlegten Port
    - Wenn es einen Eintrag gibt sendet der Switch das Frame nur über den hinterlegten Port
    - Wenn es keinen Eintrag gibt sendet der Switch das Frame an alle Ports(außer dem Eingangsport des Frames in den Switch)


## Beispiel Switch Frameweiterleitung

<img src="https://github.com/robertulrich21/layer2SwitchLearningProcess/blob/main/step0.png?raw=true" width=400 ></img>


Die Tabellen unter den Switches speichern die Mac - Port Zuweisung, welche die Switche beim weiterleiten von Frames lernen

### 1. PC1 sendet ein Frame an PC5
#### 1.1 PC1 sendet das Frame über das angeschlossene Kabe an PC2 und Switch1. 


<img src="https://github.com/robertulrich21/layer2SwitchLearningProcess/blob/main/step1.png?raw=true" width=400 ></img>

1. PC1 erstellt Frame und trägt alle Daten ein, darunter Ziel-Mac(vom PC5), Sender-Mac(die eigene). 
2. PC1 sendet das Frame über das angeschlossene Kabel. 
    -->PC2 und Switch1 erhalten es
4. PC2 verwirft es, weil die Ziel-Mac des Frames nicht mit der vom PC2 übereinstimmt.
5. Switch1 speichert das Frame im Buffer


#### 1.2 Switch1 leitet das Frame weiter

<img src="https://github.com/robertulrich21/layer2SwitchLearningProcess/blob/main/step2.png?raw=true" width=400 ></img>

1. Switch1 weiß jetzt, über welchen Port PC1 verbunden ist, da PC1 gerade ein  Frame(welches die Mac von PC1 enthält) über den Port gesendet hat. Die Mac Addresse und der Port werden in die Tabelle eingetragen
2. Switch1 vergleicht die Ziel-Mac des Frames mit den Einträgen der Mac-Port Tabelle. Es gab kein Match --> das Frame wird über alle Ports(außer dem Empfangsport) weitergeleitet.
3. PC3 und PC4 verwerfen das Frame, da die Ziel Mac-Addresse des Frames nicht mit der eigenen Mac-Addresse übereinstimmmt.
4. Switch2 speichert das Frame im Buffer


#### 1.3 Switch 2 leitet das Frame weiter

<img src="https://github.com/robertulrich21/layer2SwitchLearningProcess/blob/main/step3.png?raw=true" width=400 ></img>

1. Switch2 trägt die Sender-Mac des Frames und den Port über den das Frame empfangen wurde in die Mac-Port Tabelle ein
2. Switch2 sucht nach Eintrag der Ziel-Mac Addresse in der Mac-Port Tabelle 
    - da es keinen gibt wird das Frame über alle Ports(außer dem Empfangsport) weitergeleitet

3. PC6 verwirft das Frame, da eigene Mac und Ziel-Mac des Frames nicht übereinstimmen
4. PC5 akzeptiert das Frame, da die eigene Mac und die Ziel-Mac des Frames übererinstimmen -> Die Daten können jetzt von höheren OSI-Layern verwendet werden




### 2. PC5 sendet ein Frame an PC1

#### 2.1 PC5 sendet das Frame über das angeschlossene Kabel an Switch2


<img src="https://github.com/robertulrich21/layer2SwitchLearningProcess/blob/main/step4.png?raw=true" width=400 ></img>

1. PC5 erstellt Frame, trägt als Ziel Mac die vom PC1 ein, als Sender Mac die eigene Mac und alle anderen Felder. 

2. PC5 sendet das Frame über das Kabel
3. Switch2 speichert das Frame im Buffer und überprüft die CRC Checksumme und verwirft das Frame falls diese falsch ist


#### 2.2 Switch2 leitet das Frame weiter

<img src="https://github.com/robertulrich21/layer2SwitchLearningProcess/blob/main/step5.png?raw=true" width=400 ></img>

1. Switch2 nimmt PC5 in die Mac-Port Tabelle auf
2. Switch2 findet die Ziel Mac Addresse des Frames in der Tabelle 
3. Switch2 sendet das Frame nur über den in der Tabelle hinterlegten Port --> Port 1
4. Switch1 speichert das Frame im Buffer und überprüft die CRC Checksumme und verwirft das Frame falls diese falsch ist

#### 2.3 Switch1 leitet das Frame weiter

<img src="https://github.com/robertulrich21/layer2SwitchLearningProcess/blob/main/step6.png?raw=true" width=400 ></img>

1. Switch1 nimmt PC5 in die Mac-Port Tabelle auf
3. Switch1 findet die Ziel Mac Addresse des Frames in der Tabelle 
4. Switch1 sendet das Frame nur über den in der Tabelle hinterlegten Port --> Port 1
5. PC2 empfängt das Frame und verwirft es, weil Ziel Mac des Frames und die eigene Mac Addresse nicht übereinstimmen
6. PC1 empfängt und akzeptiert das Frame, da die Mac Addressen übereinstimmen 


### 3. PC4 sendet ein Frame an PC5

#### 3.1 PC5 sendet das Frame über das angeschlossene Kabel an Switch2

<img src="https://github.com/robertulrich21/layer2SwitchLearningProcess/blob/main/step7.png?raw=true" width=400 ></img>

1. PC4 erstellt Frame, trägt als Ziel Mac die vom PC5 ein, als Sender Mac die eigene Mac und alle anderen Felder. 
2. PC4 sendet das Frame über das Kabel
3. Switch1 speichert das Frame im Buffer und überprüft die CRC Checksumme und verwirft das Frame falls diese falsch ist


#### 3.2 Switch1 leitet das Frame weiter

<img src="https://github.com/robertulrich21/layer2SwitchLearningProcess/blob/main/step8.png?raw=true" width=400 ></img>

1. Switch1 nimmt PC4 in die Mac-Port Tabelle auf
2. Switch1 findet die Ziel Mac Addresse des Frames in der Tabelle 
3. Switch1 sendet das Frame nur über den in der Tabelle hinterlegten Port --> Port 3
4. Switch2 speichert das Frame im Buffer und überprüft die CRC Checksumme und verwirft das Frame falls diese falsch ist


#### 3.3 Switch2 leitet das Frame weiter

<img src="https://github.com/robertulrich21/layer2SwitchLearningProcess/blob/main/step9.png?raw=true" width=400 ></img>

1. Switch2 nimmt PC4 in die Mac-Port Tabelle auf
2. Switch2 findet die Ziel Mac Addresse des Frames in der Tabelle 
3. Switch2 sendet das Frame nur über den in der Tabelle hinterlegten Port --> Port 2
4. PC1 empfängt und akzeptiert das Frame, da die Mac Addressen übereinstimmen 



