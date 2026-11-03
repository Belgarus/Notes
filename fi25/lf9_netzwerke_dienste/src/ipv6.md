# IPv6 – Absolute Grundlagen

- 128 Bit, 8 Hextette (je 16 Bit, hexadezimal), Trennzeichen `:`
- **Kein Broadcast** → Multicast (und Anycast)
- Typisch: **/64** pro LAN (64 Bit Präfix + 64 Bit Interface-ID)

## Adressarten

| Art | Bereich | Merkmal |
|---|---|---|
| Global Unicast | 2000::/3 | öffentlich routbar (`2001:db8::/32` = Dokumentation) |
| Link Local | fe80::/10 | nur lokaler Link, **nicht geroutet** |
| Unique Local | fc00::/7 | privat (wie 192.168.x.x) |
| Multicast | ff00::/8 | Gruppenkommunikation |
| Loopback | ::1 | eigener Rechner (wie 127.0.0.1) |

**Multicast:** `ff02::1` = alle Nodes am Link · `ff02::2` = alle Router am Link.

## Kürzungsregeln
1. **Führende Nullen** jedes Hextetts weglassen: `00a5` → `a5`.
2. **Eine** Folge aufeinanderfolgender Null-Hextette → `::` (**nur einmal** pro Adresse, die längste).

```
2001:0db8:0000:0000:0000:0000:0000:0001  →  2001:db8::1
fe80:0000:0000:0000:0000:0000:0000:0001  →  fe80::1
2001:0db8:4711:00a5::/64                 →  2001:db8:4711:a5::/64
```

## Subnetting
**Subnetzbits = neue Präfixlänge − alte Präfixlänge · Anzahl Subnetze = 2^Subnetzbits**

| Von → Nach | Bits | Subnetze | Beispiel |
|---|---|---|---|
| /48 → /64 | 16 | 65.536 | `2001:db8:4711:0000::/64`, `…:0001::/64` |
| /56 → /64 | 8 | 256 | `…:1200::/64` bis `…:12ff::/64` |

- Subnetz-ID liegt im **4. Hextett** (bei /48 vollständig, bei /56 die letzten 8 Bit davon).
- **Gleiches Subnetz** = ersten 64 Bit gleich (4. Hextett vergleichen!).
- Beispiel: Firma mit /48, 3 Abteilungen: `2001:db8:55aa:1::/64`, `…:2::/64`, `…:3::/64`; übrig 65.536 − 3 = 65.533.
- Keine Broadcast-/„letzte nutzbare Host"-Logik wie bei IPv4.

## Kurzdiagnose
- Nur `fe80::` vorhanden → nur lokale Kommunikation; **Router Advertisement/SLAAC**, ggf. **DHCPv6**/Routerkonfig prüfen.
- Windows: `ipconfig /all`, `route print` · Linux: `ip -6 addr`, `ip -6 route`
