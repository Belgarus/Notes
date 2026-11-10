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