# LF9 – Leistungskontrolle 04.11.2026

**Fokus:** RAID · IPv4 (absolute Grundlagen) · IPv6 (absolute Grundlagen, Kürzung)

| Seite | Inhalt | Schwerpunkt |
|---|---|---|
| 01_RAID | Level, Skizzen erkennen, Kapazität | ⭐⭐⭐ |
| 02_IPv4 | Subnetz prüfen, Gateway, Hostbereich | ⭐⭐ |
| 03_IPv6 | Adressarten, Kürzen, /48→/64 | ⭐⭐ |

## Die 10 Merksätze
1. RAID ≠ Backup.
2. RAID 0 = Striping, keine Redundanz. RAID 1 = Spiegelung.
3. RAID 5 = (n−1)·S, 1 Platte darf ausfallen, min. 3.
4. RAID 6 = (n−2)·S, 2 Platten dürfen ausfallen, min. 4.
5. RAID 10 = n/2·S, min. 4, je Spiegelpaar 1 Ausfall.
6. Gleiches Subnetz = gleiche Netz-ID (IP AND Maske).
7. Blockgröße = 256 − Maskenoktett.
8. Gateway muss im eigenen Subnetz liegen.
9. IPv6: kein Broadcast, Multicast statt Broadcast.
10. Subnetze = 2^(neue Präfixlänge − alte Präfixlänge).
