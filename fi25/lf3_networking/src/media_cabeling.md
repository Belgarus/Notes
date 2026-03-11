# Übertragungsmedien & Verkabelung

## Strukturierte Verkabelung + Normen

## Fehler/Kollisonserkennung
Entweder Oder:

**CSMA/Collison Detection**
-> Erkennung von Bit-Kollisionen (Kabel)

**CSMA/Collison Avoidence**
-> Verhindern von Kollisionen durch Protokoll (Kabel und Funk)

- **CS:** Carrier Sense (Träger-Zustandserkennung)
- **MA:** Multiple Access (Mehrfachzugriff)
- **CD:** Collison Detection (Kollisions-Erkennung)
- **CA:** Collison Avoidence (Kollisions-Verhinderung)

Kollision erkannt = definiertes Störsignal (JAM)

> Was ist die Kollisionsdomäne?
Eine Kollisionsdomäne ist der Bereich eines Netzwerks, in dem Datenkollisionen auftreten können, wenn mehrere Geräte gleichzeitig dasselbe Medium nutzen.

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.elektronik-kompendium.de%2Fsites%2Fnet%2Fbilder%2F14061814.gif&f=1&nofb=1&ipt=d4f16cd99ff9bc167e0fb25b7cf6d798c0e2780928b353ec3cb8094fbad2f2bb">

Unterbrochene Datenübertragung wird mehrmals (festgelegte Anzahl) erneut versucht, mit einer zufälligen Wartezeit

> CSMA/CD regelt den Netzzugriff: Zuerst wird die Leitung abgehört (Carrier Sense). Wenn frei ist, wird gesendet.Tritt dabei eine Kollision auf (Collision Detection), wird sofort ein JAM-Signal gesendet, um alle Stationen über die Kollision zu informieren und den Sendevorgang abzubrechen

# Netzwerkmedien: Kupfer & Glasfaser

## leitungsgebundene
- Elektrische Signale (Kupferleitung)
    * Twistet-Pair-Leitung
    * Koaxial-Leitung
- Optische Signale (Lichtwellenleiter)
    * Multimode-Faser
    * Singlemode-Faser

## nicht leitungsgebundene
- Funk Übertragung
    * WLAN / Wifi
    * Richtfunk
- Optische Übertragung
    * Laserlink

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Famericanfibertek.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMM-vs-SM-2.jpg&f=1&nofb=1&ipt=34aa9b107f19d141815ab6cf8f14c72eb214c8af6c216e2cd54450c89f1d7050">

### Multimode-Lichtwellenleiter
**Multimode-Lichtwellenleiter** haben einer größeren Kern- durchmesser, was bedeutet, dass **mehrere Lichtstrahlen gleichzeitig** im Inneren des Kabels übertragen werden können. Multimode-Fasern haben typischerweise eine **kürzere Übertragungsreichweite** als Singlemode-Fasern.
Bis 2.000 Meter länge.  

**Vorteile**
- geringerer Aufwand bei der Herstellung der Glasfasern
- einfachere Verbindungstechnik aufgrund des größeren Kerndurchmessers
- Fasern mit Stufenindex- und Gradientenindexprofil verfügbar

**Nachteile**
- größere Signaldämpfung und Laufzeitverschiebung
- geringere maximale Bandbreiten
- nur kürzere Distanzen überbrückbar
- Verstärker oder Signalaufbereiter bei größeren Distanzen notwendig

### Singlemode-Lichtwellenleiter
**Singlemode-Lichtwellenleiter** haben einen kleineren Kern- durchmesser, was bedeutet, dass **nur ein einzelner Lichtstrahl** durch das Kabel übertragen wird. Singlemode-Fasern haben eine deutlich **größere Übertragungsreichweite** als Multimode- Fasern.
Bis 10.000 Meter Länge.  

**Vorteile**
- geringe Dämpfung des Signals
- kaum Laufzeitverschiebungen
- große Distanzen überbrückbar
- hohe Bandbreiten

**Nachteile**
- teurere Laser zur Einspeisung des Lichts notwendig
- größerer Aufwand bei der Herstellung der Glasfasern aufgrund des sehr kleinen Faserkerns
- hohe Präzision beim Verbinden der Glasfasern durch Stecker oder beim Spleißen notwendig

# Abkürzung Schirmungsart
- **UTP** steht für **Unshielded Twisted Pair** -> Kabel ohne äußere Abschirmung 
    * **U/UTP** = exakte Normbezeichnung (ISO/IEC)
    * In der Praxis werden sie oft gleich verwendet, technisch ist U/UTP die präzisere Angabe.
- **FTP** steht für **Foiled Twisted Pair** -> Jedes Adernpaar mit einer Metallfolie abgeschirmt  
- **S-FTP** steht für **Screened Foiled Twisted Pair** -> Jedes Adernpaar mit einer Metallfolie abgeschirmt + eine Gesamtabschirmung um alle Adernpaare  
- **U-FTP** steht für **Unshielded Foiled Twisted Pair** -> Jedes Adernpaar mit einer Metallfolie abgeschirmt, aber keine Gesamtabschirmung  
- **F/UTP** steht für **Foiled Unshielded Twisted Pair** -> Eine gemeinsame Metallfolie um alle Adernpaare, aber keine Abschirmung der einzelnen Paare  
- **SF/UTP** steht für **Screened Foiled Unshielded Twisted Pair** -> Geflechtschirm + Metallfolie als Gesamtabschirmung um alle Adernpaare, aber keine Paarabschirmung

### Need to Know: 
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/UTP-Kabel.svg/500px-UTP-Kabel.svg.png" width="200px">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/SUTP-Kabel.svg/500px-SUTP-Kabel.svg.png" width="200px">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/S-FTP-Kabel.svg/500px-S-FTP-Kabel.svg.png" width="200px">  

**SF/UTP**:<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0106%2F6339%2F5391%2Ffiles%2F1024x340-4_f025a65c-d7ad-44b1-80a4-6d0c704414fe_1024x1024.jpg%3Fv%3D1676525020&f=1&nofb=1&ipt=3a592a991ce4c39efc5d4283b21646410c29e301a7d5bd77b859c57515b6cf1d" width="450px">   
**F/UTP**:<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdintek.com.tw%2Fimages%2F2025%2F07%2F14%2Ffutp-image-for-article-photoroom.png&f=1&nofb=1&ipt=77dfbd3ba4b09725b79e928bf6ca24129ef2c497c5d612a4ce3e2a7b3a822151" width="450px">

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Femeasy.be%2Fwp-content%2Fuploads%2F2021%2F04%2FDiff-utp-type.jpg&f=1&nofb=1&ipt=178d3b84ab6d598e43d62ee8f8c013aac1f04054c650b0068e7c462d9b136c87">

# CAT Kabel 5-8
Ein **CAT-Kabel** (Category-Kabel) ist ein Twisted-Pair-Netzwerkkabel – die Adern sind paarweise verdrillt, um elektromagnetische Störungen zu reduzieren.

| Kabel | Frequenz | Datenrate |
|---|---|---|
| CAT 5 | 100 MHz | 100 Mbit/s |
| CAT 5e | 100 MHz | 1 Gbit/s |
| CAT 6 | 250 MHz | 1 Gbit/s (10G bis 55m) |
| CAT 6a | 500 MHz | 10 Gbit/s |
| CAT 7 | 600 MHz | 10 Gbit/s |
| CAT 8 | 2.000 MHz | 25–40 Gbit/s |

**Merke:** Ab CAT 6a für Neuinstallationen empfohlen.


## Vorteile von Lichtwellenleitern
- hohe Übertragungsraten
- sehr hohe Reichweite
- keine Beeinflussung durch äußere elektrische oder elektromagnetische Störfelder
- höhe Abhörsicherheit

## Nachteile von Lichtwellenleitern
- hohe Empfindlichkeit gegenüber mechanischer Belastung
- teurer als Kupferkabel
- Power over Ethernet ist nicht möglich

## Bereiche der strukturierten Verkabelung
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage3.slideserve.com%2F6507184%2Fslide18-l.jpg&f=1&nofb=1&ipt=1f39132a19ea1d62d5d7bb63088086979776e0c31f87cd67b998aac8a5efd96d">

# Strukturierte Verkabelung

| Bereich | Auch genannt | Verbindet | Max. Kabel |
|---|---|---|---|
| **Primär** | Standortverkabelung | Gebäude untereinander | GF: 2.000 m / TP+VDSL: 900 m |
| **Sekundär** | Gebäudeverkabelung | Gebäudeverteiler → Etagenverteiler | GF: 2.000 m / TP: 100 m |
| **Tertiär** | Etagenverkabelung | Etagenverteiler → Anschlussdose | GF: 2.000 m / TP: 100 m (90m fest + 10m Patch) |

GF = Glasfaserkabel, TP = Twisted-Pair-Kabel  
> **Faustregel Primär:** 50% Reserve zum aktuellen Bedarf einplanen.

### Ziele der strukturierten Verkabelung
- Schaffung einer zuverlässigen Grundlage für zukünftige Netzwerke
- Einfache Installation von Netzwerkkomponenten
- Möglichkeit flexibler Erweiterungen
- einheitliche und allgemein gültige Verkabelungsstruktur
