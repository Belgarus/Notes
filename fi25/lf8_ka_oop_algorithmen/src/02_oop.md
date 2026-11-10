# 2. Objektorientierung (OOP)

> **Auf einen Blick**
> - **Klasse** = Bauplan, **Objekt** = konkrete Instanz mit eigenen Werten
> - **Attribute** = Zustand, **Methoden** = Verhalten
> - Vier Grundideen: **Kapselung, Vererbung, Polymorphie, Interfaces**
> - IHK-Standard im UML: Attribute **private (−)**, Methoden **public (+)**

---

## 2.1 Begriffe

| Begriff | Kern | Beispiel |
| --- | --- | --- |
| Klasse | Bauplan, legt Attribute und Methoden fest | `Haustier` |
| Objekt | konkrete Instanz einer Klasse mit eigenen Attributwerten | `Hund("Bello")` |
| Attribut | Eigenschaft, bildet den **Zustand** | `name`, `energie` |
| Methode | Funktion eines Objekts, bildet das **Verhalten** | `spielen()` |
| Konstruktor | wird beim Erzeugen automatisch aufgerufen (Python: `__init__`) | `Haustier("Bello")` |

**Object-oriented programming** (OOP) ist ein Programmierparadigma, das Code in selbständige Einheiten namens Objekte organisiert, die Daten und Funktionen kapseln.

**OOP vs. prozedural:** Bei OOP werden Daten und Funktionen im Objekt **zusammengefasst**. Prozedural bleiben Daten und Prozeduren **getrennt**.

**Funktion vs. Prozedur:** Eine Funktion liefert in der Regel einen Wert zurück, eine Prozedur in der Regel nicht.

---

## 2.2 Kapselung

Daten werden **vor direktem Zugriff geschützt**, der Zugriff läuft über Methoden (Getter/Setter). Das sichert die **Datenintegrität** (z. B. kein negativer Kontostand) und verbessert die **Wartbarkeit**: Änderungen im Inneren einer Klasse betreffen die Nutzer der Klasse nicht.

| Modifikator | Symbol | Zugriff |
| --- | :---: | --- |
| `public` | `+` | überall |
| `private` | `−` | nur innerhalb der Klasse |
| `protected` | `#` | Klasse und abgeleitete Klassen |
| `package` | `~` | Klasse und Klassen im selben Paket |

> **Python-Besonderheit:** Es gibt keine echten privaten Attribute. Es gilt die Konvention `_name` (Unterstrich = „bitte nicht von außen anfassen“).

---

## 2.3 Vererbung

Eine **Kindklasse** übernimmt Attribute und Methoden der **Elternklasse**. Gemeinsamer Code steht nur einmal in der Elternklasse (weniger Wiederholung, Wiederverwendbarkeit).

- Elternklasse = Oberklasse = Basisklasse = **Superklasse**
- Kindklasse = Unterklasse = Subklasse = **abgeleitete Klasse**
- `super()` greift auf die Oberklasse zu
- **Ist-ein-Beziehung** → Vererbung (PKW *ist ein* Fahrzeug)
- **Hat-ein-Beziehung** → keine Vererbung (Fahrzeug *hat einen* Motor)

---

## 2.4 Polymorphie

Objekte verschiedener Klassen werden über eine **gemeinsame Schnittstelle** angesprochen und **verhalten sich unterschiedlich**. Welche Methode ausgeführt wird, entscheidet sich **zur Laufzeit** nach dem tatsächlichen Objekttyp.

| Art | Bedeutung | Beispiel |
| --- | --- | --- |
| **Überladen** (statisch) | gleicher Methodenname, andere Parameter | `berechne(a)` und `berechne(a, b)` |
| **Überschreiben** (dynamisch) | Kindklasse ersetzt Methode der Elternklasse | `Hund.spielen()` statt `Haustier.spielen()` |

> Python kennt kein klassisches Überladen: Die zweite Methode ersetzt die erste.

**Interface:** legt fest, **welche** Methoden eine Klasse implementieren muss, nicht **wie**. Das ermöglicht lose Kopplung und austauschbare Komponenten.

---

## 2.5 Alles zusammen in Python

```python
class Haustier:                        # Elternklasse
    def __init__(self, name):          # Konstruktor
        self._name = name              # „privat“ per Konvention
        self._energie = 100

    def get_name(self):                # Getter
        return self._name

    def spielen(self):
        self._energie -= 10
        return f"{self._name} spielt."


class Hund(Haustier):                  # Vererbung: Hund ist ein Haustier
    def __init__(self, name, rasse):
        super().__init__(name)         # Konstruktor der Oberklasse aufrufen
        self._rasse = rasse

    def spielen(self):                 # Überschreiben
        return f"{self.get_name()} apportiert den Ball."


class Katze(Haustier):
    def spielen(self):                 # Überschreiben
        return f"{self.get_name()} jagt eine Maus."


for tier in [Hund("Bello", "Labrador"), Katze("Mia")]:
    print(tier.spielen())              # Polymorphie: gleicher Aufruf, anderes Verhalten
```

Ausgabe:

```
Bello apportiert den Ball.
Mia jagt eine Maus.
```

<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/gifpyGpD-fE" title="Klassen, Objekte, Methoden, Attribute und Vererbung (Deutsch)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
<p class="video-link">▶ <a href="https://www.youtube.com/watch?v=gifpyGpD-fE">Klassen, Objekte, Methoden, Attribute und Vererbung (Deutsch)</a> · Python-Praxis: <a href="https://www.youtube.com/watch?v=i1uQgU7NOCw">Klassen & Instanzen</a> · <a href="https://www.youtube.com/watch?v=kYMqnp3U5bg">Vererbung</a></p>

---

## 2.6 Klassendiagramm (UML)

**Klasse mit Kapselung** (so wird es in IHK-Prüfungen erwartet):

```
+-------------------------------+
|            Konto              |
|-------------------------------|
| - kontostand: double          |   ← Attribute: private (−)
|-------------------------------|
| + getKontostand(): double     |   ← Methoden: public (+)
| + einzahlen(betrag: double)   |
| + abheben(betrag: double)     |
+-------------------------------+
```

Niemand greift direkt auf `kontostand` zu. Verändert wird er nur über `einzahlen()` und `abheben()`, die **prüfen** (validieren).

**Vererbung** (der Pfeil zeigt auf die **Oberklasse**) und **Interface**:

```
        +----------------------+           +--------------------+
        |       Haustier       |           |   <<interface>>    |
        |----------------------|           |      Druckbar      |
        | - name: String       |           |--------------------|
        | - energie: int       |           | + drucke(): void   |
        |----------------------|           +--------------------+
        | + spielen(): void    |                     ^
        +----------------------+                     |  implementiert
              ^          ^                  +--------------------+
              |          |                  |      Rechnung      |
        +-----------+ +-----------+         |--------------------|
        |   Hund    | |   Katze   |         | + drucke(): void   |
        |-----------| |-----------|         +--------------------+
        | +spielen()| | +spielen()|
        +-----------+ +-----------+
```

**Beziehungen:**

| Beziehung | Bedeutung | Beispiel |
| --- | --- | --- |
| Vererbung | „ist ein“, Pfeil zur Oberklasse | Hund → Haustier |
| Assoziation | Klassen kennen sich (gerichtet oder ungerichtet) | Rechnung → Kunde |
| Aggregation | Teil kann **ohne** das Ganze existieren (lose) | Schüler – Unterricht |
| Komposition | Teil existiert **nur mit** dem Ganzen (stark) | Raum – Haus |

**Kardinalitäten** (wie viele Objekte können verknüpft sein?):

| Schreibweise | Bedeutung |
| --- | --- |
| `1` | genau eins |
| `0..1` | null oder eins (optional) |
| `0..*` oder `*` | null bis beliebig viele |
| `1..*` | mindestens eins |
| `n..m` (z. B. `2..5`) | mindestens n, höchstens m |

---

## 2.7 Vor- und Nachteile von OOP

**Vorteile** (laut Skript)

- **Kapselung:** Daten sind geschützt, Änderungen im Inneren betreffen die Nutzer nicht (gute Wartbarkeit).
- **Vererbung:** Gemeinsamer Code steht nur einmal in der Elternklasse (Wiederverwendbarkeit).
- **Polymorphie und Interfaces:** Code ist flexibel, Teile lassen sich austauschen (lose Kopplung).
- **Zusammengehöriges liegt in einem Objekt:** Daten und passende Funktionen bleiben beieinander.

**Nachteile** (allgemeines Wissen, steht nicht in den Folien)

- Mehr **Planungsaufwand** am Anfang (Klassen und Beziehungen entwerfen).
- Für **kleine Programme** oft überdimensioniert.
- **Tiefe Vererbungsketten** werden unübersichtlich.
- Etwas mehr Speicher und Rechenzeit als einfache Variablen und Funktionen.

---

## Quick-Check

<details>
<summary>1. Unterschied Klasse und Objekt?</summary>
Die Klasse ist der Bauplan (legt Attribute und Methoden fest), das Objekt ist eine konkrete Instanz mit eigenen Attributwerten.
</details>

<details>
<summary>2. Wozu dient Kapselung?</summary>
Sie schützt Daten vor direktem Zugriff (Zugriff über Getter/Setter). Das sichert die Datenintegrität und die Wartbarkeit.
</details>

<details>
<summary>3. Überladen oder Überschreiben? „Hund ersetzt spielen() der Elternklasse“</summary>
Überschreiben (dynamische Polymorphie, wird zur Laufzeit entschieden).
</details>

<details>
<summary>4. Raum – Haus: Aggregation oder Komposition?</summary>
Komposition: Ein Raum kann nicht ohne das Gebäude existieren.
</details>

<details>
<summary>5. Ist-ein oder Hat-ein? „Fahrzeug – Motor“</summary>
Hat-ein-Beziehung, also keine Vererbung.
</details>
