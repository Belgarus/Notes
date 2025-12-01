# Notizen

> Dieser Bereich ist nicht wichtig aber zeigt wie wir vorgegangen sind.

### Nachtrag, Anmerkung

In der Recherche ist uns aufgefallen, dass Ethernet über twisted pair  mit GPIO pins nicht direkt umsetzbar ist([differential signaling](https://hedgedoc.c3d2.de/ztYsm4jpewEOwtVhoz_-trg#Differential))

---

# Design und Implementierung eines Layer 2 Unmanaged Switches (Lernprojekt)

## Vorgehen
1. Über Protokolle(Ethernet, Manchester Kodierung) informieren, Anforderungen festhalten
3. Die physische Layer definieren 
4. richtigen Mikrocontroller / Einplatinencomputer wählen, der den Anforderungen entspricht
5. Projekt mit Micropython implementieren

## Ethernet Protokoll

- [IEEE 802.3](https://en.wikipedia.org/wiki/IEEE_802.3) ist der Ethernet Standart --> **Details zum Standart liegen hinter einer Paywall**
    - beschreibt für jede Übertragungsart/Kabeltyp die technischen Details um eine Kommunikation zu gewährleisten
    
    
Die gängigen Ethernet Standarts: 
| Bezeichnung     | Übertragungsmedium     | max. Segmentlänge |Datenrate (brutto)|
| --------------- | ---------------------- | ----------------- | ---------------- |
| 100Base-TX      | TP-Kabel (2 Adernpaare)| 100 m             |  100 MBit/s      |
| 1000Base-T (1GE)| TP-Kabel (4-Adernpaare)| 100 m             |  1.000 MBit/s    |
| 2500Base-T (2G5)| TP-Kabel (4-Adernpaare)| 100 m 	           | 2.500 MBit/s     |
| 5000Base-T (5GE)| TP-Kabel (4-Adernpaare)| 100 m 	           | 5.000 MBit/s     |
| 10Base-T (10GE) | TP-Kabel (4-Adernpaare)| (Cat6a) 100 m     | 10.000 MBit/s    |

### Twisted Pair

- 8 Adern -> 4 Aderpaare
- jedes Aderpaar kann ein Bit übertragen

#### Differential Signaling
![ Differential Signaling](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdocs.arduino.cc%2Fstatic%2F93c4d19bd041de1817cbb7e9dad2223c%2F29114%2Fdifferential_signal.png&f=1&nofb=1&ipt=eb87c87d293852ba81190198299627ddbca8753b7fc06524fdd5dd19a056ac66)

- überträgt auf einer Ader das normale Signal und auf der anderen Ader das invertierte Signal
- falls eine Störung von z.B. +0,5 Volt zu irgendeinem Zeitraum  auftritt wirkt diese auf beide Adern und Signale
- Durch Störungen bleibt die Differenz der Signale gleich --> es gehen keine Informationen verloren (Man könnte oben im Bild an einer Stelle beide Signale gleich verändern, die differnz bleibt gleich!)

**Problem: Bei Twisted Pair werden kleinere Spannungen von (+1,25V -1,25V oder +1V -1V) benötigt und Frequenzen von 16MHZ GPIO Switch Speed**

## Manchester Kodierung
Bei der Datenübertragung ist die Manchester-Codierung eine Form der digitalen Codierung, bei der der Zustand eines Datenbits (0 oder 1) durch den Übergang von einem Spannungspegel (V) zum anderen dargestellt wird. 

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Manchester_encoding_both_conventions.svg/570px-Manchester_encoding_both_conventions.svg.png" height="200px">

-> Codierungsart wird im Header festgelegt
z.B. *IEEE 802.3* oder *G. E. Thomas* (Original)

**Vorteil:**
- hohe Zuverlaessigkeit

**Nachteil:**
- mehr Bitübertragung als Bitstrom ohne Taktsignal



--- 


# Simulation eines Layer-2 Unmanaged Switches (Lernprojekt)

## Vorgehen 

1. Erkenntnisse aus vorheriger Recherche festhalten
2. Anforderungen festhalten
    - welche Aufgaben hat Layer 1+2 (Switch und Endgeräte)
    - welche Funktionalität soll die Simulation haben
    - Wie technisch/physikalisch soll implementiert werden
    - Eingabe ? Ausgabe ? -> über terminal, Textdateien ?
    - Zeitbasiert Simulation oder Eventbasierte simulation ?
3. Software Projekt planen
    - Aufteilen in Teilbereiche(z.B. Ein Ausgabe, Netzwerkkomponenten, Kodierungen, Nachrichten, Leitungen, ...) --> möglichst modular
    - (UML Klassendiagramm ???)

4. Software Projekt umsetzen
    - Implementierung alleinstehender Klassen
    - Implementierung zusammenhängender Klassen
    - (Testen ???) 

## 1. Erkenntnisse vorheriger Recherchen
 
 - Aufbau von Ethernet Frames ist stark Standartabhängig --> Es gibt viele Ethernet Standarts, CSMA/CD wird überall verwendet
 -  Es werden Leitungscodes verwendet, welche den Takt und Daten gleichzeitig übertragen -> [Manchester Code](https://en.wikipedia.org/wiki/Manchester_code)(verwendet in älteren Standarts) und [4B5B Code](https://en.wikipedia.org/wiki/4B5B)(aktuelle Standarts setzen diese Kodierung um)
 - Twisted Pair Kabel benutzen [Differential Signaling](https://hedgedoc.c3d2.de/ztYsm4jpewEOwtVhoz_-trg#Differential-Signaling) und Rasperry pi, Arduino könen das nicht umsetzen


## 2. Anforderung an die Simulation

### technische Anforderungen
- Eventbasierte Simulation, teschnische Details (Layer1) werden abstrahiert
- Sendevorgang der Endgeräte
    
    1. Eingabe von Text für den Payload(evtl über txt Dateien oder TerminalInput) und in Binär mit ASCII kodieren
    2.  Zerteilen des langen Textes in einzelne Segmente (für Payload)
    3.  Frame entsprechend befüllen (MAC Addressen, Länge, Payload,...)
    4.  [CRC](https://en.wikipedia.org/wiki/Cyclic_redundancy_check) Prüfsumme berechnen und anhängen
    5.  Präambel und SFD anfügen
    6.  Prüfen ob die Leitung frei ist -> Paket senden
    7. (optional Wenn es ein Frame crash gibt Jam Signal senden und Frame neu senden)

- Empfangsvorgang der Endgeräte
    
    1. Frame mit CRC prüfen --> evtl Fehler korrigieren oder Frame verwerfen, ...
    2. Ziel Mac prüfen --> sonst verwerfen 
    3. Payload entnehmen, Daten zusammenfügen
    4. Binärdaten mit ASCII dekodieren und ausgeben

- (optional Leitung)
    
    - signalisiert crashes an Endgeräte
    - signalisiert alle verbundenen Geräte, wenn ein Frame eingeht
    - Bitfehler simulieren
    
- Switch
    
    1. Frame und Port über dem Empfangen wurde speichern
    1. CRC prüfen --> evtl Fehler korrigieren oder verwerfen, ...
    2. in Tabelle schauen, ob Empfangs-Port mit Absender-Mac verknüpft ist, ggf. in die Tabelle eintragen
    3. in Tabelle schauen, ob Empfangs-Mac in der Tabelle steht:
        - wenn ja: Frame über hinterlegten Port senden (es sei denn Empfangsport = Zielport; Dann nicht)
        - wenn nein: Frame über alle Ports (außer Empfangsport) senden 
