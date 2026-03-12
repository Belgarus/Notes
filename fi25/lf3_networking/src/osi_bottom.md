# OSI Layers 1, 2 & 3

> **⚠️ Hinweis:** Diesen Part noch mal im [Hedgedoc LF3](https://hedgedoc.c3d2.de/LF3_Notes?view#%F0%9F%9B%91Layer-1) nachprüfen.

---

## Layer 1 – Bitübertragungsschicht (Physical Layer)

Die unterste Schicht des OSI-Modells. Sie definiert, **wie Bits physisch über ein Übertragungsmedium übertragen werden**.

**Übertragungseinheit:** Bit

**Aufgaben:**
- Definition von Kabeln und Steckern (z. B. RJ45)
- Definition der Signalübertragung (elektrisch, optisch, Funk)
- Festlegung von Übertragungsraten (z. B. 1 Gbit/s)

**Übertragungsmedien:** Kupferkabel (Twisted Pair), Glasfaser, Funk (WLAN)

**Geräte auf Layer 1:**

| Gerät | Funktion |
|---|---|
| Kabel / Stecker | passive Signalleitung |
| Hub | verteilt Signal an **alle** Ports |
| Repeater | Signalverstärkung über längere Strecken |

### Fehlersuche Layer 1

Typische Probleme: Kabel nicht eingesteckt, Stecker locker, Kabel defekt.
```bash
ip link       # Physische Verbindung unter Linux prüfen
```
Auf NO-CARRIER achten → keine physische Verbindung vorhanden.

> **Prüfungsfragen:** Welche Übertragungseinheit hat Layer 1? | Nennen Sie zwei Geräte auf Layer 1. | Was bedeutet NO-CARRIER?

---

## Layer 2 – Sicherungsschicht (Data Link Layer)

Organisiert die **Kommunikation innerhalb eines lokalen Netzwerks (LAN)**. Sorgt dafür, dass Frames gezielt an das richtige Gerät im selben Netzwerk gesendet werden.

**Übertragungseinheit:** Frame  
**Adressierung:** MAC-Adresse (48 Bit, hardwareseitig vergeben)

**Aufgaben:**
- Aufbau und Auswertung von [Ethernet-Frames](https://belgarus.github.io/Notes/fi25/lf3_networking/book/ethernet.html)
- MAC-Adressierung innerhalb eines LANs
- Fehlererkennung via Prüfsumme (FCS)
- Zugriffskontrolle auf das Übertragungsmedium (CSMA/CD, CSMA/CA)

**Geräte auf Layer 2:**

| Gerät | Funktion |
|---|---|
| Netzwerkkarte (NIC) | besitzt MAC-Adresse, sendet/empfängt Frames |
| Switch | leitet Frames gezielt zum Zielport, trennt Kollisionsdomänen |

### Hub vs. Switch

| | **Hub (Layer 1)** | **Switch (Layer 2)** |
|---|---|---|
| Weiterleitung | an **alle** Ports | nur an **Zielport** |
| Adressierung | keine | MAC-Adresse |
| Kollisionen | häufig | keine (pro Port eigene Domäne) |
| Effizienz | gering | hoch |

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnetizenstechnologies.com%2Fwp-content%2Fuploads%2F2025%2F01%2FNetwork-Topology.png&f=1&nofb=1&ipt=30f98bdc252bf03b77f7ea02bbf4f02e3411ddbdc4ce764c098492063ccd9097" height="400px">

### Fehlersuche Layer 2
```powershell
ipconfig /all          # MAC-Adresse anzeigen (Windows)
```
```bash
ifconfig -a            # MAC-Adresse anzeigen (Linux)
```

> **Prüfungsfragen:** Welche Übertragungseinheit hat Layer 2? | Welche Adressierung wird verwendet? | Unterschied Hub vs. Switch? | Was ist eine Kollisionsdomäne?

---

## Layer 3 – Vermittlungsschicht (Network Layer)

Verantwortlich für den **Zusammenschluss mehrerer Netze** (LAN → MAN → WAN → GAN) und die **Wegfindung von Paketen zum Zielhost**.

**Übertragungseinheit:** Paket (Größe durch MTU begrenzt)  
**Adressierung:** IP-Adresse (IPv4: 32 Bit, IPv6: 128 Bit)

![](https://raw.githubusercontent.com/johannesloetzsch/LF4/refs/heads/main/src/img/Diagramm_Router.png)

**Gerät auf Layer 3:** Router (auch: Gateway) – verbindet unterschiedliche Netze und leitet Pakete anhand der IP-Adresse weiter.

**Wichtige Protokolle:**

| Protokoll | Funktion |
|---|---|
| IP | Adressierung und Weiterleitung von Paketen |
| ICMP | Fehlermeldungen und Diagnose (z. B. ping) |
| ARP | Auflösung IP ↔ MAC-Adresse |
| IPSec | Verschlüsselung auf IP-Ebene |

### IPv4-Adressierung

- IPv4-Adresse (32 Bit) wird durch die **Subnetzmaske** in Netz- und Hostanteil geteilt
- **Netz-ID:** IP `&` Subnetzmaske (alle Host-Bits = 0)
- **Broadcast-ID:** alle Host-Bits = 1
- **CIDR:** flexible Präfix-Notation (z. B. `192.168.1.0/24`) ersetzt die alten Klassen A/B/C
- Mehr 1-Bits in der Maske → mehr Netze, weniger Hosts pro Netz (und umgekehrt)
- Pro Subnetz sind mind. 2 Adressen reserviert (Netz-ID + Broadcast)

### Adressbereiche

| Bereich | Adressraum | Bemerkung |
|---|---|---|
| Öffentlich | — | von IANA vergeben, global routbar |
| Privat A | 10.0.0.0/8 | nicht im Internet routbar (NAT nötig) |
| Privat B | 172.16.0.0/12 | nicht im Internet routbar (NAT nötig) |
| Privat C | 192.168.0.0/16 | nicht im Internet routbar (NAT nötig) |
| Loopback | 127.0.0.1 | interne Kommunikation (localhost) |

### Diagnose-Tools & Fehlersuche
```bash
ipconfig / ifconfig    # Lokale IP-Konfiguration anzeigen
ping <IP>              # Erreichbarkeit prüfen
tracert / traceroute   # Wegverfolgung der Pakete (max. 30 Hops)
arp -a                 # ARP-Cache anzeigen (IP ↔ MAC)
```

Empfohlene Reihenfolge bei der Fehlersuche: IP-Konfiguration prüfen → Erreichbarkeit testen → Wegverfolgung → ARP-Einträge kontrollieren.