# OSI Modell

## Learning Apps
- [Ordne die Schichten richtig zu](https://learningapps.org/watch?v=p5cbar58k26)
- [Ordne die OSI- Layer in die jeweiligen Schichten des DoD-Modells](https://learningapps.org/watch?v=pyyktdao526)
- [Ordne alle Elemente richtig in der Tabelle zu](https://learningapps.org/watch?v=pshbepuek26)

## Die sieben Schichten des OSI-Modells
**Open Systems Interconnection model**

|OSI-Schicht|OSI-Schicht Name (Englisch)|OSI-Schicht Name (Deutsch)|Beschreibung|
|------------------|----------------|----------------|------------------|
|7|Application|Anwendung|Stellt Netzwerkdienste für Anwendungen bereit und ermöglicht Programmen (z. B. Webbrowser, Mailprogramme) den Zugriff auf Netzwerkprotokolle wie HTTP oder SMTP.|
|6|Presentation|Darstellung|Sorgt für eine einheitliche Darstellung der Daten, z. B. durch Formatumwandlung, Verschlüsselung/Entschlüsselung und Kompression.|
|5|Session|Sitzung|Steuert Aufbau, Verwaltung und Beenden von Sitzungen (Verbindungen) zwischen zwei Kommunikationspartnern und synchronisiert den Datenaustausch.|
|4|Transport|Transport|Gewährleistet eine Ende-zu-Ende-Kommunikation zwischen Anwendungen, übernimmt Segmentierung der Daten, Portadressierung sowie Fehler- und Flusskontrolle (z. B. TCP/UDP).|
|3|Network|Vermittlung|Sorgt für logische Adressierung und Routing, damit Datenpakete über mehrere Netzwerke hinweg zum Ziel gelangen (z. B. IP).|
|2|Data Link|Sicherung|Organisiert die Übertragung zwischen direkt verbundenen Geräten, bildet Frames, nutzt MAC-Adressen und erkennt Übertragungsfehler.|
|1|Physical|Bitübertragung|Überträgt rohe Bits über das physische Medium und definiert elektrische, mechanische und signaltechnische Eigenschaften von Kabeln und Schnittstellen.|

## Die 4 Schichten des DoD-Modells
**Department of Defense model**

|DoD-Schicht Nummer|DoD-Schicht Name (Englisch)|DoD-Schicht Name (Deutsch)|Beschreibung|OSI|
|------------------|----------------|----------------|------------------|------------------|
|4|Application|Anwendung|Stellt Netzwerkdienste für Anwendungen bereit und enthält Protokolle für Benutzerprogramme, z. B. HTTP, FTP, SMTP oder DNS.|7-5|
|3|Transport|Transport|Ermöglicht die Ende-zu-Ende-Kommunikation zwischen Anwendungen, nutzt Portnummern und sorgt je nach Protokoll für zuverlässige oder schnelle Übertragung (z. B. TCP, UDP).|4|
|2|Internet|Internet|Übernimmt logische Adressierung und Routing von Datenpaketen zwischen verschiedenen Netzwerken (z. B. IP, ICMP).|3|
|1|Network Access|Netzzugang / Netzwerkzugriff|Steuert den Zugriff auf das physische Netzwerk und die Übertragung über das Medium, z. B. Ethernet oder WLAN, inklusive MAC-Adressierung und Frame-Übertragung.|2-1|

## Eselsbrücken

**Von 7 bis 1 (Englisch)**
```
Alle Pfarrer saufen Tequila nach der Predigt
```

**Von 7 bis 1 (Deutsch)**
```
Alle deutschen Schüller trinken vormittags schon Bier
```

**Von 1 bis 7 (Englisch)**
```
Please Do Not Throw Salami Pizza Away
```

## Links

[Wikipedia](https://de.wikipedia.org/wiki/OSI-Modell)  