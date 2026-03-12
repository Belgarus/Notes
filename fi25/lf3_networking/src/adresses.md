# Adressen

> **Wichtig:** IPv4, IPv6 & MAC-Adressen  
> Befehle: `ipconfig` / `ipconfig /all`

---

## IPv6

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ipxo.com%2Fapp%2Fuploads%2F2024%2F07%2Fipv6-address-structure.png&f=1&nofb=1&ipt=04109b64c05aec0ada48b549e35a1e9cc973900b1f6de591ee879fc4b42b3bcd" height="250px">

Eine IPv6-Adresse hat **128 Bit** und besteht aus drei Teilen:

- **Routing-Präfix** – identifiziert das Netzwerk/Subnetz; wird vom ISP zugewiesen
- **Subnetz-ID** – segmentiert interne Netzwerkbereiche; von Netzwerkadministratoren definiert
- **Interface-ID** – identifiziert ein einzelnes Gerät/Interface; automatisch generiert oder manuell zugewiesen

Pro 4er-Block: 2¹⁶ Adressen (16 Bit).

### Adresskonfiguration (SLAAC)

Ein Gerät, das einem Netzwerk beitritt, konfiguriert sich in zwei Stufen:

1. **Link-local** – automatisch generierte lokale Adresse (nur im selben Netzwerksegment erreichbar), Präfix: `fe80::/10`
2. **SLAAC** (Stateless Address Autoconfiguration) – vollständige Selbstkonfiguration ohne DHCP-Server:
   - **RS** (Router Solicitation) – Gerät fragt den Router
   - **RA** (Router Advertisement) – Router antwortet mit Präfix, Gateway und DNS
```
Ablauf:
Gerät                          Router
  |                               |
  |----RS (Router Solicitation)-->|
  |<---RA (Router Advertisement)--|
  |    - Routing/ID-Präfix        |
  |    - Gateway                  |
  |    - DNS                      |
  |                               |
  v
Gerät baut IPv6-Adresse selbst:
Präfix (vom RA) + Interface-ID (vom Gerät)
```

### IPv6-Kürzungsregeln

| Regel | Original | Gekürzt |
|---|---|---|
| Führende Nullen weglassen | `2001:0db8:0000:0001` | `2001:db8:0:1` |
| Aufeinanderfolgende Null-Gruppen → `::` | `2001:0000:0000:0000:0000:0000:0000:0001` | `2001::1` |
| `::` nur **einmal** verwenden | `2001:0000:0000:0001:0000:0000:0020:0001` | `2001::1:0:0:20:1` |
| `::` ersetzt die **längste** Null-Sequenz | `2001:0000:0000:0001:0000:0000:0000:0001` | `2001:0:0:1::1` |

> **Merke:** `::` darf nur **einmal** pro Adresse vorkommen, sonst ist sie nicht eindeutig parsebar.  
> Bei Gleichstand: links vor rechts.

---

## IPv4

**32 Bit** ~ 4,2 Mrd. Adressen

### Private Adressbereiche

| IP-Adresse | Bereich | Subnetzmaske | Klasse | Verwendung |
|---|---|---|---|---|
| 10.0.0.0 | 10.0.0.0 – 10.255.255.255 | 255.0.0.0 | A | sehr große Netzwerke |
| 172.16.0.0 | 172.16.0.0 – 172.31.255.255 | 255.240.0.0 | B | mittlere bis große Netzwerke |
| 192.168.0.0 | 192.168.0.0 – 192.168.255.255 | 255.255.255.0 | C | kleine bis mittlere Netzwerke |

- **Loopback-Adresse: `127.0.0.1`** (von IANA festgelegt)
  - Testen der eigenen Netzwerkfähigkeit
  - Keine physischen Pakete beim PING

---

## Adressarten nach Empfänger

| Typ | Beschreibung |
|---|---|
| **Broadcast** | Alle Teilnehmer eines Netzwerks |
| **Unicast** | Einzelnes Ziel |
| **Multicast** | Gruppe von Empfängern |
| **Anycast** | Ein beliebiger Empfänger innerhalb einer Gruppe |

---

## Nützliche Befehle

**Erreichbarkeit eines Servers prüfen** (→ TTL: Time To Live):
```bash
ping beispiel.de
```

**Route/Hops zu einem Server prüfen** (→ max. 30 Hops):
```bash
traceroute beispiel.de
```

**MAC-Adresse anzeigen** (Layer 2):
```bash
ipconfig /all
```