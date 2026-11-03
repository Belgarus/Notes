# RAID (Redundant Array of Independent Discs)

- Ziele: **Ausfallsicherheit** (Redundanz) und/oder **Geschwindigkeit**.
- Parität = Zusatzinfo, aus der Daten wiederhergestellt werden.
- Gleich große Platten; **kleinste/langsamste** bestimmt den Verbund.
- **Software-RAID:** OS steuert, kein Controller, kostet CPU. **Hardware-RAID:** eigener Controller.
- **Hot Spare:** Reserveplatte im System; springt bei Ausfall automatisch ein → **Rebuild** (Daten werden aus Rest/Parität neu berechnet). Währenddessen langsamer und **nicht voll sicher**.

## Übersicht (n Platten à S)

| Level | Prinzip | Min. | Nutzkapazität | Ausfalltoleranz |
|---|---|---|---|---|
| 0 | Striping | 2 | n·S | **keine** |
| 1 | Spiegelung | 2 | S (50 %) | n−1 (bei 2: eine) |
| 4 | Parität auf *einer* Platte (veraltet) | 3 | (n−1)·S | 1 |
| 5 | Striping + verteilte Parität | 3 | (n−1)·S | 1 |
| 6 | Striping + doppelte Parität | 4 | (n−2)·S | 2 |
| 10 | Stripe über Spiegelpaare | 4 | n/2·S (50 %) | 1 pro Paar |
| JBOD | Platten aneinandergereiht | 2 | Summe | keine |

## Bilder je Level 

Farbe = zusammengehörige Blockgruppe (Stripe), **p / q** = Parität.

### RAID 0 – Striping
![RAID_0.svg](https://commons.wikimedia.org/wiki/Special:FilePath/RAID_0.svg?width=300)
A1|A2 · A3|A4 … abwechselnd auf beide Platten. Keine Kopie, keine Parität.

### RAID 1 – Spiegelung
![RAID_1.svg](https://commons.wikimedia.org/wiki/Special:FilePath/RAID_1.svg?width=300)
Beide Platten identisch.

### RAID 4 – dedizierte Paritätsplatte (veraltet)
![RAID_4.svg](https://commons.wikimedia.org/wiki/Special:FilePath/RAID_4.svg?width=380)
Alle Paritäten auf **einer** Platte (Flaschenhals).

### RAID 5 – verteilte Parität
![RAID_5.svg](https://commons.wikimedia.org/wiki/Special:FilePath/RAID_5.svg?width=380)
Parität „wandert" über alle Platten (Diagonale).

### RAID 6 – doppelte verteilte Parität
![RAID_6.svg](https://commons.wikimedia.org/wiki/Special:FilePath/RAID_6.svg?width=480)
Pro Zeile **zwei** Paritätsblöcke (p und q).

### RAID 10 – Stripe über Spiegelpaare
![RAID_10.svg](https://commons.wikimedia.org/wiki/Special:FilePath/RAID_10.svg?width=420)
Unten Spiegelpaare (RAID 1), oben Striping (RAID 0). Falls das Bild nicht lädt: siehe ASCII-Skizze unten.

*Bilder: Wikimedia Commons / Wikipedia „Standard RAID levels"

## Skizzen erkennen (Kurzform)

```
RAID 0   D0: A1 A3 A5   D1: A2 A4 A6      → Blöcke abwechselnd, nichts doppelt
RAID 1   D0: A1 A2 A3   D1: A1 A2 A3      → identische Platten
RAID 4   D0: A1  D1: A2  D2: A3  D3: Ap   → Parität nur auf letzter Platte
RAID 5   Ap, Bp, Cp, Dp wandern "diagonal" über alle Platten
RAID 6   zwei Paritäten pro Zeile (Ap + Aq), min. 4–5 Platten
RAID 10  2 Spiegelpaare (A1|A1, A2|A2), darüber Stripe
```

**Erkennungsmerkmale:** gleiche Blöcke auf 2 Platten = Spiegel · eigene Parity-Platte = RAID 4 · verteilte „p" = RAID 5 · „p" und „q" = RAID 6 · Spiegel-Paare + Stripe = RAID 10.

**Kombis:** RAID 10 = 1 unten, 0 oben (Stripe über Spiegel). RAID 01 = umgekehrt. RAID 15 = RAID 5 über RAID-1-Paare (min. 6). RAID 51 = gespiegeltes RAID 5 (min. 6).

**Schreibweise:** RAID (5,2) = RAID 6 → 5 Platten, 2 dürfen ausfallen.

## Vor-/Nachteile kurz
- **0:** schnell, Totalausfall bei 1 Defekt.
- **1:** sicher, einfach; 50 % Verlust, Schreiben etwas langsamer.
- **5:** günstig, gute Kapazität (3 Platten: 33 % Verlust, 4 Platten: 25 %); Rebuild kritisch.
- **6:** sicherer als 5; mehr Verlust, langsameres Schreiben (2 Paritäten).
- **10:** schnell + sicher, ideal für Datenbanken; 50 % Verlust.

## Rechenbeispiele
- 4×2 TB RAID 0 → 8 TB · 2×4 TB RAID 1 → 4 TB · 5×2 TB RAID 5 → 8 TB · 6×4 TB RAID 6 → 16 TB · 8×2 TB RAID 10 → 8 TB
- 4×3 TB RAID 5: roh 12 TB, nutzbar **9 TB**, 1 Ausfall.
- 8×6 TB RAID 6: roh 48 TB, nutzbar **36 TB**, 2 Ausfälle.
- **12 TB nutzbar mit 4-TB-Platten:** RAID 5 = **4** Platten · RAID 6 = **5** · RAID 10 = **6**.
- **Prüfungsfall:** 5×4 TB, nutzbar 16 TB → **RAID 5**. Nach 1 Ausfall: **0** weitere dürfen ausfallen → Platte sofort ersetzen/Rebuild, Backup prüfen.

## Welches RAID wofür?
| Anforderung | RAID |
|---|---|
| Max. Speed, Daten woanders vorhanden | 0 |
| 2 Platten, einfache Redundanz | 1 |
| Dateiserver, gute Kapazität + 1 Ausfall | 5 |
| Großer Speicher, 2 Ausfälle tolerieren | 6 |
| Datenbank, hohe I/O + Redundanz | 10 |

## RAID ≠ Backup
RAID schützt **nur vor Plattenausfall**, nicht vor: Löschen/Bedienfehler, Ransomware/Malware, Controller-Defekt, Feuer/Diebstahl/Wasser, Softwarefehlern.
**Merksatz:** *RAID erhöht die Verfügbarkeit, Backup sichert die Daten.*

**Rebuild kritisch**, weil alle Platten stark belastet werden (weiterer Ausfall = ggf. Datenverlust) und das System langsamer ist. Daher Zustand überwachen, defekte Platte zeitnah tauschen.
