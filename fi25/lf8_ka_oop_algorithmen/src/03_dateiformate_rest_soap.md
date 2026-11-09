# 3. Dateiformate, REST und SOAP

> **Auf einen Blick**
> - **CSV** = Tabelle als Text (Trennzeichen) · **JSON** = Schlüssel-Wert-Paare · **XML** = Daten in benannten Tags
> - Alle drei sind **reiner Text** und dienen dem **Datenaustausch** zwischen Programmen
> - **REST** = Architekturstil auf Basis von HTTP (aktueller Standard für Web-APIs)
> - **SOAP** = XML-basiertes Protokoll (eher in Enterprise-Umgebungen)

---

## 3.1 Datenarten

| Art | Merkmal | Beispiel |
| --- | --- | --- |
| Strukturiert | feste Struktur | Tabellen einer relationalen Datenbank |
| Semistrukturiert | gewisse Struktur durch Tags oder Schlüssel | XML, JSON |
| Unstrukturiert | keine feste Struktur | Bilder, Audio, Video, Webseiten |

---

## 3.2 Die drei Formate auf einen Blick

| Format | Was ist das | So sieht es aus | Wofür |
| --- | --- | --- | --- |
| **CSV** | Tabelle als Text: eine Zeile = ein Datensatz, Trennzeichen trennt die Werte | `ID;Name;Ort` ↵ `1;Müller;Dresden` | Export/Import aus Excel und Datenbanken |
| **JSON** | Schlüssel-Wert-Paare, Objekte in `{ }`, Listen in `[ ]`, beliebig verschachtelbar | `{"name": "Maria", "hobbys": ["lesen", "wandern"]}` | Web-Schnittstellen (REST), Konfigurationsdateien, NoSQL |
| **XML** | Daten in selbst benannten Tags („Kästen in Kästen“), mit Regelwerk prüfbar | `<kunde><name>Max</name></kunde>` | Dokumentformate, SOAP, Daten mit Schema und Hierarchie |

---

## 3.3 CSV

- **C**omma-**S**eparated **V**alues. Die erste Zeile enthält oft die Überschriften.
- In Deutschland ist das Trennzeichen oft ein **Semikolon**, weil das Komma das Dezimaltrennzeichen ist. Das Trennzeichen muss beim Import bekannt sein.
- **Zeichencodierung:** UTF-8 ist Standard (ISO-8859-1 und Windows-1252 sind veraltet). Falsch gewählt wird aus „Müller“ ein „MÃ¼ller“.
- **Schwächen:** keine Struktur oder Hierarchie, zeilenbasiert, großer Speicherbedarf.

> **CSV-Injection:** Eine Tabellenkalkulation führt Zellen, die mit `=`, `+`, `−` oder `@` beginnen, als **Formel** aus. So lassen sich Links oder Befehle einschleusen.
> **Schutz:** Apostroph voranstellen, die Importfunktion nutzen, unbekannte Dateien vorsichtig öffnen.

---

## 3.4 JSON

```json
{
  "name": "Maria",
  "alter": 29,
  "aktiv": true,
  "chef": null,
  "hobbys": ["lesen", "wandern"],
  "adresse": { "ort": "Dresden", "plz": "01067" }
}
```

- **Sechs Datentypen:** String (Text in `" "`), Number, Boolean (`true`/`false`), Null, Object (`{ }`), Array (`[ ]`).
- **Strenge Regeln:** Strings und Schlüssel in **doppelten** Anführungszeichen, **keine Kommentare**, **kein Komma nach dem letzten Eintrag**.
- **Typische Fehler:** Komma am Ende, einfache Anführungszeichen, Schlüssel ohne Anführungszeichen, Kommentare, `undefined`, `NaN`, `Infinity`.
- **Stärken:** kompakt, schnell zu verarbeiten, Datentypen sind eingebaut.

Mit Python lesen:

```python
import json

daten = json.loads('{"name": "Maria", "hobbys": ["lesen", "wandern"]}')
print(daten["name"])        # Maria
print(daten["hobbys"][0])   # lesen
```

<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/GpOO5iKzOmY" title="Learn JSON – Full Crash Course for Beginners (Englisch)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
<p class="video-link">▶ <a href="https://www.youtube.com/watch?v=GpOO5iKzOmY">Learn JSON – Crash Course (Englisch, ca. 12 Min.)</a></p>

---

## 3.5 XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<kunden>
  <kunde id="1">
    <name>Max</name>
    <ort>Dresden</ort>
  </kunde>
</kunden>
```

- **Aufbau:** Prozessanweisung (`<?xml version="1.0"?>`), **Elemente** (`<name>Wert</name>`), **Attribute** (`id="1"`), Text, Kommentare, CDATA (Text, in dem Sonderzeichen nicht gedeutet werden).
- **Well-formed** (formal korrekt): Tags sauber geschlossen und richtig geschachtelt, **genau ein Wurzelelement**, Attribute in Anführungszeichen, Groß-/Kleinschreibung beachtet, `&` maskiert.
- **Valid** (zusätzlich regelkonform nach einer **DTD** oder einem **XSD**). Valid setzt well-formed voraus.
  - **DTD** legt nur die **Struktur** fest.
  - **XSD** prüft auch **Datentypen und Wertebereiche**, z. B. „alter ist eine Ganzzahl von 0 bis 150“.
- **XPath** findet Elemente in einem XML-Dokument, **XSLT** wandelt XML in andere Formate um.

<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/gGsCLvBWvJE" title="Was ist XML? (Deutsch)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
<p class="video-link">▶ <a href="https://www.youtube.com/watch?v=gGsCLvBWvJE">Was ist XML? (Deutsch, animiert)</a></p>

### JSON oder XML?

| | JSON | XML |
| --- | --- | --- |
| Größe | kompakt | länger (Start- und End-Tags) |
| Datentypen | eingebaut | über Schema (XSD) |
| Extras | – | Attribute, Kommentare, Namensräume, Schemas |
| Typisch | neue Web-Projekte, REST | Dokumentformate, SOAP |

---

## 3.6 REST

**REST** ist ein **Architekturstil** für verteilte Systeme auf Basis des **HTTP-Protokolls**. Ressourcen werden über **URLs** identifiziert und mit **HTTP-Methoden** bearbeitet. Heute der Standard für Web-APIs.

**Sechs Prinzipien:**

| Prinzip | Bedeutung |
| --- | --- |
| Client-Server | klare Trennung von Client und Server |
| **Stateless** | jede Anfrage enthält alle nötigen Informationen, der Server speichert keinen Client-Zustand |
| Cacheable | Antworten können zwischengespeichert werden |
| Uniform Interface | einheitliche Schnittstelle (URLs, HTTP-Methoden) |
| Layered System | mehrschichtig möglich (z. B. Load Balancer dazwischen) |
| Code on Demand | optional: Server kann ausführbaren Code senden |

**HTTP-Methoden = CRUD** (**C**reate, **R**ead, **U**pdate, **D**elete):

| Methode | CRUD | Bedeutung | Beispiel |
| --- | --- | --- | --- |
| `GET` | Read | Ressource abrufen | `GET /api/kunden/42` |
| `POST` | Create | neue Ressource anlegen | `POST /api/kunden` |
| `PUT` | Update | Ressource **vollständig** ersetzen | `PUT /api/kunden/42` |
| `PATCH` | Update | Ressource **teilweise** ändern | `PATCH /api/kunden/42` |
| `DELETE` | Delete | Ressource löschen | `DELETE /api/kunden/42` |

Beispiel: `GET /api/kunden/42` liefert

```json
{ "id": 42, "name": "Müller", "ort": "Dresden" }
```

---

## 3.7 SOAP

**SOAP** ist ein **XML-basiertes** Protokoll für Webservices. Jede Nachricht steckt in einem **Envelope** („Umschlag“) mit optionalem **Header** und einem **Body**. Die Schnittstelle wird mit **WSDL** beschrieben.

```xml
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  <soap:Header/>
  <soap:Body>
    <getKunde>
      <id>42</id>
    </getKunde>
  </soap:Body>
</soap:Envelope>
```

### REST vs. SOAP

| | REST | SOAP |
| --- | --- | --- |
| Art | Architekturstil | Protokoll |
| Datenformat | meist JSON (auch XML möglich) | immer XML |
| Beschreibung | locker, keine feste Beschreibung nötig | WSDL, Envelope-Struktur |
| Aufwand | leichtgewichtig, schnell | schwerer, strenge Regeln |
| Einsatz | Web-APIs, Apps, Cloud | Enterprise-Umgebungen |

<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/xq09ow7RuZA" title="REST vs SOAP – Quick Comparison (Englisch)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
<p class="video-link">▶ <a href="https://www.youtube.com/watch?v=xq09ow7RuZA">REST vs SOAP – Quick Comparison (Englisch)</a></p>

---

## Quick-Check

<details>
<summary>1. Warum nutzt man in Deutschland bei CSV oft das Semikolon?</summary>
Weil das Komma hier das Dezimaltrennzeichen ist.
</details>

<details>
<summary>2. Was ist CSV-Injection und wie schützt man sich?</summary>
Zellen, die mit =, +, − oder @ beginnen, werden von Tabellenkalkulationen als Formel ausgeführt. Schutz: Apostroph voranstellen, Importfunktion nutzen, unbekannte Dateien vorsichtig öffnen.
</details>

<details>
<summary>3. Nenne drei typische JSON-Fehler.</summary>
Komma nach dem letzten Eintrag, einfache Anführungszeichen, Schlüssel ohne Anführungszeichen (auch: Kommentare, undefined, NaN).
</details>

<details>
<summary>4. Unterschied well-formed und valid?</summary>
Well-formed: formal korrekt (Tags geschlossen, ein Wurzelelement, …). Valid: zusätzlich regelkonform nach DTD oder XSD. XSD prüft auch Datentypen und Wertebereiche.
</details>

<details>
<summary>5. Welche HTTP-Methode passt zu „Kunde 42 löschen“?</summary>
`DELETE /api/kunden/42` (CRUD: Delete).
</details>

<details>
<summary>6. Was bedeutet „stateless“ bei REST?</summary>
Jede Anfrage enthält alle nötigen Informationen. Der Server speichert keinen Zustand des Clients.
</details>
