# IPv4 – Absolute Grundlagen

## Kernrechnung
- **Blockgröße = 256 − Maskenoktett**
- Netz-ID = erste Adresse des Blocks · Broadcast = letzte · Hosts = dazwischen
- Hosts pro Netz = 2^h − 2 (h = Hostbits)

| CIDR | Maske | Blockgröße | Hosts |
|---|---|---|---|
| /24 | 255.255.255.0 | 256 | 254 |
| /25 | 255.255.255.128 | 128 | 126 |
| /26 | 255.255.255.192 | 64 | 62 |
| /27 | 255.255.255.224 | 32 | 30 |
| /28 | 255.255.255.240 | 16 | 14 |
| /29 | 255.255.255.248 | 8 | 6 |
| /30 | 255.255.255.252 | 4 | 2 |

## Gleiches Subnetz?
Beide Adressen mit der Maske verUNDen → gleiche Netz-ID = gleiches Subnetz = Kommunikation ohne Router.

**U03 Aufgabe 1** (/25, Blöcke 0–127 und 128–255):
- PC 1 `192.168.10.25` → Netz `192.168.10.0/25`
- PC 2 `192.168.10.130` → Netz `192.168.10.128/25`
- **Nicht** gleiches Subnetz.
- Lösung: PC 2 bekommt Adresse im Bereich **.1–.126**, z. B. `192.168.10.30` (nicht .1 = Gateway, nicht .25 = PC 1).

## Gateway-Fehler
**U03 Aufgabe 2:** PC `192.168.20.50/24`, Router `192.168.30.1/24`
- Verschiedene /24-Netze (192.168.**20**.0 vs. 192.168.**30**.0) → Router nicht direkt erreichbar.
- Lösung: Router-LAN z. B. `192.168.20.1/24`.
- **Regel:** Standardgateway muss im selben Subnetz wie der PC liegen.

## Checkliste bei Fehlersuche
1. Gleiches Subnetz? 2. Maske gleich? 3. Gateway im eigenen Netz? 4. Adresse doppelt vergeben? 5. Netz-/Broadcast-Adresse versehentlich vergeben?

## Sonderbereiche
- Privat: `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`
- Loopback: `127.0.0.1` · APIPA: `169.254.0.0/16` (kein DHCP erreichbar)
