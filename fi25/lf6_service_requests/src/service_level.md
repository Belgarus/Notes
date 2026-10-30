# Support-Level, Eskalation und Ticketsystem

> Lernfeld 6: Serviceanfragen bearbeiten, Leistungskontrolle am 02.11.2026 (Übung U1)

## Support-Level

Der Support ist in **drei Stufen** gegliedert. Je komplexer das Problem, desto höher die Stufe.

| Level | Rolle | Wer? | Aufgabe in einem Satz |
|---|---|---|---|
| **1st Level** | Erste Anlaufstelle | Servicedesk / Helpdesk | Anfrage annehmen, einordnen, **einfache und häufige Probleme selbst lösen** |
| **2nd Level** | **Erste Eskalationsstufe** | Erfahrene Techniker, Spezialisten | **Komplexere Anfragen**, Fehlerdiagnose, spezifischere Lösungen |
| **3rd Level** | **Höchste Eskalationsstufe** | Hochspezialisierte Fachleute | **Komplexe Probleme** analysieren, umfassende Fehlerbehebung über 2nd Level hinaus |

```text
Anfrage
   |
   v
+------------------+  gelöst?  ja  ----------------+
| 1st Level        |------------------------------>|
+------------------+                               |
   | nein -> Eskalation                            |
   v                                               v
+------------------+  gelöst?  ja  -------->  Anwender informieren,
| 2nd Level        |------------------------>  Ticket schließen
+------------------+                               ^
   | nein -> Eskalation                            |
   v                                               |
+------------------+  gelöst                       |
| 3rd Level        |------------------------------>+
+------------------+
```

### 1st Level: Aufgaben (prüfungsrelevant)

- **Entgegennahme** von Supportanfragen
- **Klassifizierung und Priorisierung**
- **Grundlegende Unterstützung** bei häufig auftretenden Problemen
- **Weiterleitung**, wenn das Problem über den 1st Level hinausgeht
- **Dokumentation** in Ticketsystem oder Wissensdatenbank
- **Professionelle und freundliche Kommunikation** mit den Kunden

**Normalfall:** Die Mitarbeiter versuchen, den Fall **weitestgehend selbstständig zu lösen**, und eskalieren ihn nur, wenn das nicht klappt.

### 2nd Level

- **Erste Eskalationsstufe**, wenn der 1st Level nicht lösen kann
- **Erfahrene Techniker oder Spezialisten**
- Bearbeiten **komplexere Anfragen**, führen **Fehlerdiagnosen** durch, liefern **spezifischere Lösungen**
- **Neue Erkenntnisse** werden in die **Wissensdatenbank** eingetragen und unterstützen so den 1st Level

### 3rd Level

- **Höchste Eskalationsstufe** im Supportprozess
- **Hochspezialisierte Fachleute** mit umfangreichem technischem Wissen
- Analysieren **komplexe Probleme** und führen **umfassende Fehlerbehebung** durch, die **über die Möglichkeiten des 2nd Levels hinausgeht**

> **Merkhilfe:** 1st = *annehmen und einfach lösen*, 2nd = *komplexer*, 3rd = *Experten, letzte Instanz*.

### Video: Support-Level erklärt

**Deutsch** (ein Dienstleister erklärt seine Service-Level; dort gibt es zusätzlich ein "1.5th Level", das ist nicht Prüfungsstoff):

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fMhqujWZptQ" title="Unsere Servicelevel 1st, 1.5th und 2nd Level kurz erklärt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Video auf YouTube öffnen](https://www.youtube.com/watch?v=fMhqujWZptQ)

**Englisch** (Level 1 bis 3 und Eskalation allgemein):

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AfeuTK2SF_I" title="What Does IT Support Do? Level 1, Level 2, Level 3 Escalations" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Video auf YouTube öffnen](https://www.youtube.com/watch?v=AfeuTK2SF_I)

## Eskalation

Eskalationsstufen im IT-Kundensupport werden festgelegt anhand des **Schweregrads** eines Falls und der **Eskalationsansprechpartner**.

**Auslöser einer Eskalation:**

| Auslöser | Bedeutung |
|---|---|
| **Schweregrad** | Der Supportfall ist so schwerwiegend, dass er höher angesiedelt werden muss |
| **Zeit** | Der Fall kann nicht innerhalb der im **SLA** (Service Level Agreement) vereinbarten **maximalen Lösungszeit** gelöst werden |
| **Hinterlegte Regeln** | Das System eskaliert automatisch aufgrund festgelegter Regeln |

**Ansprechpartner in der Eskalationshierarchie:**

| Stufe | Ansprechpartner |
|---|---|
| **1st Level** | Erste Anlaufstelle für Probleme |
| **2nd Level** | **Incident Manager**, Einsatz von **IT-Spezialisten** |
| **3rd Level** | Einsatz von **Produktexperten oder Entwicklern** |

### Video: SLA (Grundlage für die Zeit als Eskalationsauslöser)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/l4Mc-s3wxK0" title="Service Level Agreement (SLA)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Video auf YouTube öffnen](https://www.youtube.com/watch?v=l4Mc-s3wxK0)

## Ticketsystem

**Aufgabe:** **Empfang, Bestätigung, Klassifizierung und Bearbeitung** sowie **Pflege** von Kundenanfragen in Form von **Tickets** (Fällen / Cases).

- **Eingang** der Anfragen: per **Telefon**, per **Mail**, als Fax oder in einem **Online-Tool**
- **Moderne Systeme:** komplexe **Datenbank** und **Schnittstelle zu einem Webportal**, in dem der Kunde den **Bearbeitungsstatus jederzeit verfolgen** kann
- **Beispiele:** **Jira**, **ServiceNow**

**Synonyme** (alle meinen dasselbe):

- Ticketing-System
- User-Helpdesk-System
- Support-Ticketing-System
- Service-Ticket-System
- Task-Tracking-System
- Request-Tracking-System (RTS)

### Video: Ticketsystem erklärt (Englisch)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/9uER-Gr5WGI" title="What Is an IT Ticket System? Help Desk Ticketing Systems Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Video auf YouTube öffnen](https://www.youtube.com/watch?v=9uER-Gr5WGI)

## Spickzettel

- **1st Level:** annehmen, klassifizieren, priorisieren, einfache Probleme lösen, weiterleiten, dokumentieren
- **2nd Level:** erste Eskalationsstufe, Techniker/Spezialisten, komplexere Fälle, Wissensdatenbank füttern
- **3rd Level:** höchste Stufe, hochspezialisierte Fachleute (Produktexperten/Entwickler), komplexe Probleme
- **Eskalationsauslöser:** Schweregrad, Zeit (SLA), hinterlegte Regeln
- **Ticketsystem:** Empfang, Bestätigung, Klassifizierung, Bearbeitung; Beispiele Jira, ServiceNow
