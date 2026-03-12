# Übertragungsmedien & Verkabelung

---

## Netzwerkmedien

### Leitungsgebunden
- **Elektrische Signale** (Kupfer)
  - Twisted-Pair-Leitung
  - Koaxial-Leitung
- **Optische Signale** (Lichtwellenleiter)
  - Multimode-Faser
  - Singlemode-Faser

### Nicht leitungsgebunden
- **Funk**
  - WLAN / WiFi
  - Richtfunk
- **Optisch**
  - Laserlink

---

## Kollisionserkennung (CSMA)

**Entweder:**  
**CSMA/CD** (Collision Detection) – Erkennung von Bit-Kollisionen → für Kabel  
**Oder:**  
**CSMA/CA** (Collision Avoidance) – Verhindern von Kollisionen durch Protokoll → für Kabel und Funk

| Kürzel | Bedeutung |
|---|---|
| **CS** | Carrier Sense (Träger-Zustandserkennung) |
| **MA** | Multiple Access (Mehrfachzugriff) |
| **CD** | Collision Detection (Kollisions-Erkennung) |
| **CA** | Collision Avoidance (Kollisions-Verhinderung) |

**Ablauf CSMA/CD:** Leitung abhören → wenn frei: senden → bei Kollision: JAM-Signal senden → Übertragung abbrechen → erneut versuchen (zufällige Wartezeit, festgelegte Anzahl).

> **Kollisionsdomäne:** Bereich eines Netzwerks, in dem Datenkollisionen auftreten können, wenn mehrere Geräte gleichzeitig dasselbe Medium nutzen.

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.elektronik-kompendium.de%2Fsites%2Fnet%2Fbilder%2F14061814.gif&f=1&nofb=1&ipt=d4f16cd99ff9bc167e0fb25b7cf6d798c0e2780928b353ec3cb8094fbad2f2bb">

---

## Glasfaser: Multimode vs. Singlemode

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Famericanfibertek.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMM-vs-SM-2.jpg&f=1&nofb=1&ipt=34aa9b107f19d141815ab6cf8f14c72eb214c8af6c216e2cd54450c89f1d7050">

| | **Multimode** | **Singlemode** |
|---|---|---|
| Kerndurchmesser | größer | kleiner |
| Lichtstrahlen | mehrere gleichzeitig | nur einer |
| Reichweite | bis 2.000 m | bis 10.000 m |
| Bandbreite | geringer | höher |
| Dämpfung | größer | geringer |
| Kosten | günstiger | teurer |

- **Vorteile Multimode:** Einfachere Verbindungstechnik, günstigere Herstellung, Stufen- und Gradientenindexprofil verfügbar.  
- **Nachteile Multimode:** Größere Signaldämpfung, Laufzeitverschiebung, nur kürzere Distanzen.

- **Vorteile Singlemode:** Geringe Dämpfung, kaum Laufzeitverschiebungen, hohe Bandbreiten, große Distanzen.  
- **Nachteile Singlemode:** Teurere Laser, aufwändigere Herstellung, hohe Präzision beim Verbinden nötig.

### Allgemeine Vor- und Nachteile von Lichtwellenleitern

- **Vorteile:** hohe Übertragungsraten, sehr hohe Reichweite, keine elektromagnetischen Störeinflüsse, höhere Abhörsicherheit.  
- **Nachteile:** hohe mechanische Empfindlichkeit, teurer als Kupfer, kein Power over Ethernet möglich.

---

## CAT-Kabel (Twisted-Pair)

Ein **CAT-Kabel** ist ein Twisted-Pair-Netzwerkkabel – die Adern sind paarweise verdrillt, um elektromagnetische Störungen zu reduzieren.

| Kabel | Frequenz | Datenrate |
|---|---|---|
| CAT 5 | 100 MHz | 100 Mbit/s |
| CAT 5e | 100 MHz | 1 Gbit/s |
| CAT 6 | 250 MHz | 1 Gbit/s (10G bis 55 m) |
| CAT 6a | 500 MHz | 10 Gbit/s |
| CAT 7 | 600 MHz | 10 Gbit/s |
| CAT 8 | 2.000 MHz | 25–40 Gbit/s |

> **Merke:** Ab CAT 6a für Neuinstallationen empfohlen.

---

## Schirmungsarten (Twisted-Pair)

| Kürzel | Ausgeschrieben | Beschreibung |
|---|---|---|
| **U/UTP** | Unshielded Twisted Pair | Keine Abschirmung |
| **F/UTP** | Foiled Unshielded Twisted Pair | Gemeinsame Metallfolie um alle Paare |
| **U/FTP** | Unshielded Foiled Twisted Pair | Jedes Paar einzeln mit Folie, keine Gesamtabschirmung |
| **S/FTP** | Screened Foiled Twisted Pair | Jedes Paar mit Folie + Geflechtschirm gesamt |
| **SF/UTP** | Screened Foiled Unshielded Twisted Pair | Geflechtschirm + Metallfolie gesamt, keine Paarabschirmung |

> UTP und U/UTP werden in der Praxis oft gleich verwendet – U/UTP ist die präzisere ISO/IEC-Normbezeichnung.

**Bilder:**

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/UTP-Kabel.svg/500px-UTP-Kabel.svg.png" width="200px">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/SUTP-Kabel.svg/500px-SUTP-Kabel.svg.png" width="200px">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/S-FTP-Kabel.svg/500px-S-FTP-Kabel.svg.png" width="200px">

**SF/UTP:** <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0106%2F6339%2F5391%2Ffiles%2F1024x340-4_f025a65c-d7ad-44b1-80a4-6d0c704414fe_1024x1024.jpg%3Fv%3D1676525020&f=1&nofb=1&ipt=3a592a991ce4c39efc5d4283b21646410c29e301a7d5bd77b859c57515b6cf1d" width="450px">  
**F/UTP:** <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdintek.com.tw%2Fimages%2F2025%2F07%2F14%2Ffutp-image-for-article-photoroom.png&f=1&nofb=1&ipt=77dfbd3ba4b09725b79e928bf6ca24129ef2c497c5d612a4ce3e2a7b3a822151" width="450px">

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Femeasy.be%2Fwp-content%2Fuploads%2F2021%2F04%2FDiff-utp-type.jpg&f=1&nofb=1&ipt=178d3b84ab6d598e43d62ee8f8c013aac1f04054c650b0068e7c462d9b136c87">

---

## Strukturierte Verkabelung

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage3.slideserve.com%2F6507184%2Fslide18-l.jpg&f=1&nofb=1&ipt=1f39132a19ea1d62d5d7bb63088086979776e0c31f87cd67b998aac8a5efd96d">

| Bereich | Auch genannt | Verbindet | Max. Kabellänge |
|---|---|---|---|
| **Primär** | Standortverkabelung | Gebäude untereinander | GF: 2.000 m / TP+VDSL: 900 m |
| **Sekundär** | Gebäudeverkabelung | Gebäudeverteiler → Etagenverteiler | GF: 2.000 m / TP: 100 m |
| **Tertiär** | Etagenverkabelung | Etagenverteiler → Anschlussdose | GF: 2.000 m / TP: 100 m (90 m fest + 10 m Patch) |

GF = Glasfaser, TP = Twisted-Pair

> **Faustregel Primär:** 50 % Reserve zum aktuellen Bedarf einplanen.

**Ziele der strukturierten Verkabelung:**
- Zuverlässige Grundlage für zukünftige Netzwerke
- Einfache Installation von Netzwerkkomponenten
- Flexible Erweiterbarkeit
- Einheitliche, allgemeingültige Verkabelungsstruktur