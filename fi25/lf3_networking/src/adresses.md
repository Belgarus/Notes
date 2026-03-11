# Adresen

Wichtig: IPv4, IPv6 & Mac-Adressen

### cmd - ipconfig | ipconfig /all

## IPv6
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ipxo.com%2Fapp%2Fuploads%2F2024%2F07%2Fipv6-address-structure.png&f=1&nofb=1&ipt=04109b64c05aec0ada48b549e35a1e9cc973900b1f6de591ee879fc4b42b3bcd" height="250px">

Pro 4rer Block 2¹⁶ Adressen (16 Bit).
Insgesamt hat eine IPV6 Adresse 128 Bit.

> Ein Gerät tritt einem Netzwerk bei und muss wissen, wie es sich konfigurieren soll. Das passiert in zwei Stufen:

1. **Link-local** – automatisch generierte lokale Adresse (nur im selben Netzwerksegment erreichbar), der Router schickt nur den Präfix (```fe80::/10```)
2. **SLAAC** (Stateless Address Autoconfiguration) – das Gerät konfiguriert sich selbst vollständig ohne DHCP-Server, durch:
    - **RS** (Router Solicitation) – Gerät fragt den Router
    - **RA** (Router Advertisement) – Router antwortet mit allem was das Gerät braucht: Präfix, Gateway, DNS

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

## Adressarten Empfänger
- **Broadcast**: alle Teilnehmer eines Netzwerks
- **Unicast**: einzelnes Ziel
- **Multicast**: Gruppe von Empfängern
- **Anycast**: ein beliebiger Empfänger innerhalb einer Gruppe