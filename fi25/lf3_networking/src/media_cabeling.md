# Übertragungsmedien & Verkabelung

# Kupfer & Glasfaser

# Strukturierte Verkabelung + Normen

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

Unterbrochene Datenübertragung wird mehrmals (festgelegte Anzahl) erneut versucht, mit einer zufälligen Wartezeit

# Netzwerkmedien

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

**SF/UTP**:<img src="https://www.universalnetworks.co.uk/wp-content/uploads/2020/02/SFUTP-Copper-Cable-300x149.jpg" width="250px">  **F/UTP**:<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdintek.com.tw%2Fimages%2F2025%2F07%2F14%2Ffutp-image-for-article-photoroom.png&f=1&nofb=1&ipt=77dfbd3ba4b09725b79e928bf6ca24129ef2c497c5d612a4ce3e2a7b3a822151" width="350px">

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Femeasy.be%2Fwp-content%2Fuploads%2F2021%2F04%2FDiff-utp-type.jpg&f=1&nofb=1&ipt=178d3b84ab6d598e43d62ee8f8c013aac1f04054c650b0068e7c462d9b136c87">

# CAT Kabel