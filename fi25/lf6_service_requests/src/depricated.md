# Service-Level

## IT-Services allgemein

### Service-Management-System (SMS)
Alle Aufgaben zur **Organisation, Verwaltung und Weiterentwicklung** eines Servicebereichs.

## Erstkontaktaufnahme
```markdown
+----------+  1. Meldung  +------------------+  2. Protokoll.  +--------------+
| Anwender | -----------> | Servicedesk/SPOC | --------------> | Ticketsystem |
+----------+              +------------------+                 +--------------+
     ^                                                                  |
     |                      Rückmeldung / Lösung                        |
     +------------------------------------------------------------------+
```

### Helpdesk / Servicedesk
Anlaufstelle, die **Serviceanfragen annimmt**, **Servicetickets erstellt** und den Vorgang **bearbeitet oder mindestens betreut**.

### Single Point of Contact (SPOC) 🖖
**Zentrale und einzige Anlaufstelle** für **jeden IT-Servicefall** (Information, Serviceanliegen, Störung, Beschwerde).
Kann auch pro Servicebereich (IT, Rechnungswesen, Vertrieb) oder Kundensegment (Unternehmen, Behörden, Stammkunden mit Key-Account-Manager) eingerichtet sein.

## Ticketsystem

### Ticketsystem
Software zum **Empfangen, Bestätigen, Klassifizieren und Bearbeiten** von Kundenanfragen unter **einer** Ticket- bzw. Servicenummer.

- Beispiele: Jira, ServiceNow

### Serviceticket
Online als **Datensatz** erfasster Service-Auftrag ("Eintrittskarte"). Er **löst den Auftrag aus** und enthält **alle Informationen** für Bearbeitung und abschließende Kontrolle.

Typische Felder im Ticket (Beispiel Ticket-Dokumentation):

- Anwender, Support (Bearbeiter), Tickettyp (z. B. Vorfall)
- Priorität, Kategorie (z. B. Hardware), Auswirkung, Dringlichkeit
- Ticketdatum, SLA-Zeitfenster (z. B. "in time")
- Anwenderdaten (E-Mail, Telefon, Standort, Sprache, Anzahl bisheriger Tickets)
- Verlauf: jeder Bearbeitungsschritt mit Support-Level, Kanal (Phone, Mail, Ticket-System) und Zeitstempel

## Bearbeitungsablauf eines Tickets

### Incident-Bearbeitungsablauf
```
ERFASSEN       1. Meldung am Servicedesk
               2. Protokollierung im Ticketsystem
                          |
                          v
EINORDNEN      3. Klassifizierung   (WAS für ein Fall?)
               4. Kategorisierung   (WELCHER Servicebereich?)
               5. Priorisierung     (WIE dringend/wichtig?)
                          |
                          v
BEARBEITEN     6. Erste Diagnose im First Level
               7. ggf. Eskalation an Second/Third Level
               8. Untersuchung und Diagnose
                          |
                          v
ABSCHLIESSEN   9. Lösung und Wiederherstellung
              10. Ticket schließen
```

> Merkhilfe: Die Schritte 3 bis 5 (Klassifizierung, Kategorisierung, Priorisierung) werden gerne verwechselt, siehe unten.

### Klassifizierung
Zuordnung nach **Serviceklasse**: z. B. **Service Request**, **Incident** (Störung mit Fehlerklassen), später auch **Problem** und **Change**.

### Kategorisierung
Zuordnung nach **Dienstleistungskategorie** gemäß Serviceportfolio, Servicekatalog oder SLA, z. B. IT-Systemerweiterung, Systemstörung, Cloud-Skalierung, Peripherieservice.

### Priorisierung
**Priorität = Impact (Auswirkung) + Urgency (Dringlichkeit)**.
Gibt an, wie wichtig und dringend die Bearbeitung ist, abhängig von **Auswirkungen und Risiken**.

Dringlichkeitsstufen mit maximaler Lösungszeit:

| Dringlichkeit \ Auswirkung/Risiko | Hoch | Mittel | Niedrig |
|---|---|---|---|
| **Hohe Dringlichkeit** | 1 = < 1 Std. | 2 = < 4 Std. | 3 = < 8 Std. |
| **Mittlere Dringlichkeit** | 2 = < 4 Std. | 3 = < 8 Std. | 3 = < 24 Std. |
| **Niedrige Dringlichkeit** | 3 = < 24 Std. | 4 = < 48 Std. | 5 = < xx Std. |

| Schritt | Frage | Beispiel |
|---|---|---|
| Klassifizierung | **Was für eine Art** von Fall ist es? | Incident |
| Kategorisierung | **Welcher Servicebereich**? | Hardware / Peripherie |
| Priorisierung | **Wie dringend und wichtig**? | Hohe Dringlichkeit, < 4 Std. |

## Service-Basisprozesse (Begriffe)

### Event
Meldung ohne Störung: **Information, Warnung oder Exception**.
Beispiele: "Festplatte zu 80 % voll", "Netzwerk läuft stabil bei 40 % Auslastung".

### Incident
**Ungeplante Unterbrechung** eines Services oder einer Servicekomponente **oder Verschlechterung der Servicequalität** (Störung).

- Zusammengehörige Incidents können zu einem **Haupt-Incident** zusammengefasst und gemeinsam bearbeitet werden.
- Lässt sich ein Incident nur durch einen Einsatz **vor Ort** lösen, spricht man von **Field-Service**.
- Beispiele: Drucker funktioniert nicht, Login nicht mehr möglich, ERP-System nicht erreichbar.

### Major Incident
**Schwerwiegende Störung** mit **erheblicher Unterbrechung der Business-Prozesse**. Höchste Kategorie eines Incidents in Bezug auf die Auswirkung.

### Service Request (Serviceanfrage)
Anwenderanfrage nach **Information, Beratung, Zugriff auf einen Service** oder zur Einleitung eines **vorautorisierten Changes**.

- Wird oft über **dieselben Prozesse und Tools** wie Incidents verwaltet.
- Verfügbare Services stehen im **Service-Katalog**.
- Beispiele:
  - Beschaffungsservices (Hardware, Software, Dienste, Lizenzen)
  - Informative Anfrage (Request for Information)
  - **IMAC**-Services (Serviceanfragen in Phasen des Hardwarelebenslaufs)
  - Änderungswunsch (Change Request / Request for Change)
  - Funktionserweiterung (Request for Enhancement)
- Beispiel aus der Übung: "Marketing wünscht sich einen schnelleren A3-Farbdrucker" ist ein Service Request.

### Abgrenzung: Event, Service Request oder Incident?

| Meldung | Einordnung |
|---|---|
| a) Festplattenkapazität zu 80 % erschöpft | Event (Warnung) |
| b) Drucker in der Finanzbuchhaltung funktioniert nicht | Incident |
| c) Netzwerk läuft stabil mit 40 % Auslastung | Event (Information) |
| d) Marketing wünscht schnelleren A3-Farbdrucker | Service Request |
| e) ERP-System für mehrere Mitarbeiter nicht erreichbar, Systemnachricht "ERP-Ausfall" | Incident (ggf. Major Incident) |
| f) Mitarbeiterin kann sich nicht mehr einloggen | Incident |
| g) Dokumentenscanner hinterlässt Streifen auf jedem Scan | Incident |

> Hinweis: Die Zuordnung ist meine Auflösung der Übungsaufgabe und stand nicht auf den Folien. Bitte mit eurer Lösung im Unterricht abgleichen. Die Aufgabe auf den Folien ist zudem abgeschnitten (es gibt vermutlich noch Punkt h).

## Support-Levels

### Übersicht

| Level | Name | Aufgabe |
|---|---|---|
| **0** | Self Service | FAQs, Tutorials, Manuals |
| **1** | Service Desk (First Level) | **Grundlegender Support**: Bedienfragen, einfache und wiederkehrende Probleme, Anfragen mit IT-Einbeziehung (z. B. Freischalten von Produktoptionen). Nicht lösbar (auch nicht per Wissensdatenbank) → **Eskalation an Level 2** |
| **2** | Specialized Support (Second Level) | **Erfahrene, technisch kompetente** Mitarbeiter bearbeiten, was Level 1 nicht lösen kann. Keine Lösung → **Eskalation an Level 3** |
| **3** | Expert Support (Third Level) | **Höchste Qualifikationsebene**: Problem nachstellen, **zentrale Ursachen finden**, Entscheidung über **Patches**, Lösung für Level 1 und 2 **dokumentieren** |
| **4** | External Support | Support für Produkte und Dienstleistungen, die **nicht vom Unternehmen selbst** erbracht werden (z. B. Hersteller-Support für zugekaufte Software, Drucker-Wartung) |

### Kurzfassung

- **First Level:** einfache und wiederkehrende Probleme
- **Second Level:** durch Eskalation weitergeleitete Fälle
- **Third Level:** Spezialprobleme und Speziallösungen

### Ablauf über die Levels

- **First Level** (IT-Techniker): Analyse, Diagnose, Selektion, Dokumentation
- **Second Level** (IT-Experten): Analyse, Workaround, Diagnose, Dokumentation
- **Third Level** (Resolution-Group): Analyse, Workaround, Diagnose, Dokumentation
- Nach jeder Stufe wird geprüft: **Lösung/Test erfolgreich?**
  - **Ja** → Rückmeldung an den Anfragenden, Ticket kann geschlossen werden
  - **Nein** → **Eskalation** in die nächste Stufe
- **Schulung:** Höhere Levels schulen die niedrigeren Levels (Wissen fließt nach unten).

### Eskalierung
Kann ein Problem **in der vereinbarten Frist nicht zufriedenstellend** bearbeitet werden, wird der Vorgang **eskaliert**.

| Art | Bedeutung |
|---|---|
| **Funktional** | Weiterleitung an Mitarbeiter/Team mit mehr **Spezialkenntnissen, Erfahrung und Rechten** |
| **Hierarchisch** | Einbeziehen **höherer Managementstufen** zur **Information und Unterstützung** |

### Workaround
**Provisorische Lösung / Notlösung** ("um etwas herum arbeiten").

- Wird bei Problemen als **Known Error** im System erfasst.
- Bei der Einrichtung **muss festgelegt werden**: bis wann, wie, womit und mit wem die **Dauerlösung** erarbeitet wird.

## Abläufe der Service-Basisprozesse

### Incident-Management
**Hauptziel:** den **normalen Servicebetrieb so schnell wie möglich wiederherstellen** und die **negativen Auswirkungen** auf den Geschäftsbetrieb **so gering wie möglich** halten.

### Problem-Management
Beseitigt die **Ursache wiederkehrender Incidents**. Sinnvoll ist oft eine **tiefgehende Ursachenanalyse**, um nicht nur die aktuelle Störung zu beheben, sondern **künftige Beeinträchtigungen proaktiv zu verhindern**.

> **Incident vs. Problem:** Incident-Management = schnell wieder lauffähig (Symptom). Problem-Management = Ursache dauerhaft beseitigen.

### Request for Change (RFC)
Anfrage auf eine Veränderung oder Überarbeitung, die **kein Standard-Change** ist (Standard-Change z. B. Updates).

- Beispiele: Änderungen an Hard-/Software, Dokumentation, Services oder Prozessen
- Erfordert eine **präzise Beschreibung** der Änderung
- Geht an den **Change-Manager**, der sie **formal prüft und genehmigt**
- **Standard-Changes** laufen im normalen Qualitätsprozess

### Analyse
Vorfall, Anfrage, Störung oder Change-Wunsch werden von der **fachlichen Stelle analysiert und bewertet**. Danach folgt entweder eine **Lösung** oder die **Eskalation** an eine spezielle Stelle (z. B. Second-/Third-Level-Support).

## Prüfungs-Spickzettel

- **Servicedesk** nimmt an, **SPOC** ist die einzige Anlaufstelle, **Ticketsystem** verwaltet alles unter **einer Ticketnummer**.
- **Ablauf:** Meldung → Protokollierung → Klassifizierung → Kategorisierung → Priorisierung → 1st Level → ggf. Eskalation → Diagnose → Lösung → Ticket schließen.
- **Priorität = Impact + Urgency.**
- **Incident** = ungeplante Störung, **Service Request** = Anfrage, **Event** = Meldung ohne Störung, **Major Incident** = erhebliche Business-Unterbrechung.
- **Levels:** 0 Self Service, 1 Service Desk, 2 Specialized, 3 Expert (Ursache, Patches, Doku), 4 External (Hersteller).
- **Eskalation:** funktional (Spezialisten) oder hierarchisch (Management).
- **Workaround** = Notlösung + Termin für Dauerlösung.
- **Incident-Management** = schnell wiederherstellen, **Problem-Management** = Ursache beseitigen, **RFC** = Änderungsantrag an den Change-Manager.