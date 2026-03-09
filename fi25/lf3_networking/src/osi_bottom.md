# OSI Layers 1, 2 & 3
## Layer 1 – Bitübertragungsschicht

Die **Bitübertragungsschicht (Physical Layer)** ist die unterste Schicht des OSI-Modells.  
Sie definiert, **wie Bits physisch über ein Übertragungsmedium übertragen werden**.

**Übertragungseinheit:** Bit

---

### Minimalbeispiel
```mermaid
graph LR
    S[Sender] -->|Übertragungsmedium| SW[Empfänger]
```

**Beispiel:**

```mermaid
graph LR
    S[PC 1] -->|Glasfaserkabel| SW[PC 2]
```

**Mögliche Übertragungsmedien:**

- Kupferkabel (Twisted Pair / Ethernet)
- Glasfaser
- Funk (WLAN)

---

### Aufgaben von Layer 1

- Definition von **Kabeln und Steckern** (z. B. RJ45)
- Definition der **Signalübertragung** (elektrisch, optisch, Funk)
- **Bitübertragung**
- Festlegung von **Übertragungsraten** (z. B. 1 Gbit/s)


### Geräte auf Layer 1

**Passive Komponenten**

- Kabel
- Stecker
- Hub (verteilt Signal an alle Ports)
- Repeater (Signalverstärkung)

---

## Fehlersuche (VW-FS)

**Typische Probleme:**

- Kabel nicht eingesteckt
- Stecker locker
- Kabel defekt
- keine physische Verbindung

**Prüfen:**

- LEDs an Netzwerkkarte oder Switch
- Kabeltester verwenden

---

### Überprüfung unter Linux

Physische Netzwerkverbindungen können mit folgendem Befehl geprüft werden:

```bash
ip link
```

> ### Prüfungsfragen
> - Welche Übertragungseinheit hat Layer 1?
> - Nennen Sie zwei Geräte, die auf Layer 1 arbeiten.
> - Welche Aufgaben hat die Bitübertragungsschicht?
> - Was bedeutet NO-CARRIER bei einer Netzwerkschnittstelle?

## Layer 2 – Sicherungsschicht (Data Link)

Layer 2 organisiert die **Kommunikation innerhalb eines lokalen Netzwerks (LAN)**.  
Er sorgt dafür, dass **Frames an das richtige Gerät im selben Netzwerk gesendet werden**.

**Übertragungseinheit:** Frame  
**Adressierung:** MAC-Adresse

---

### Grundprinzip

```mermaid
graph LR
    S[Sender] -->|Frame zu MAC: DD:EE:FF| SW[Layer 2 Switch]
    SW -->|Unicast| E[Empfänger]
    SW -.->|kein Frame| A[Anderes Gerät]
````

Mehrere Geräte sind in einem **LAN** verbunden.

Ziel von Layer 2:

* Jeder **Frame erreicht nur das Zielgerät**
* unnötiger Netzwerkverkehr wird reduziert

---

### Geräte auf Layer 2

**Netzwerkkarte (NIC)**

* besitzt eine **MAC-Adresse**

**Switch**

* verbindet viele Geräte im LAN
* hat mehrere **Ports**
* leitet Frames nur zum **richtigen Zielport**

Ein Switch **trennt Kollisionsdomänen** zwischen seinen Ports.

---

### Hub vs. Switch

**Hub (Layer 1)**

* sendet Signale an **alle Geräte**
* viele **Kollisionen**
* ineffizient

**Switch (Layer 2)**

* nutzt **MAC-Adressen**
* sendet Frames **nur an das Zielgerät**
* reduziert Netzwerkverkehr

---

### Zugriffsverfahren

Wenn mehrere Geräte ein Medium nutzen:

* **CSMA/CD** → Collision Detection
* **CSMA/CA** → Collision Avoidance

**Kollisionsdomäne:**
Bereich eines Netzwerks, in dem **Datenkollisionen auftreten können**.

---

### Ethernet

Wichtigstes Protokoll auf Layer 2.

Aufgaben:

* Aufbau des [**Ethernet-Frames**](https://belgarus.github.io/Notes/fi25/lf3_networking/book/ethernet.html)
* **MAC-Adressierung**
* **Fehlererkennung** (Prüfsumme / FCS)

---

### Typische Topologie

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnetizenstechnologies.com%2Fwp-content%2Fuploads%2F2025%2F01%2FNetwork-Topology.png&f=1&nofb=1&ipt=30f98bdc252bf03b77f7ea02bbf4f02e3411ddbdc4ce764c098492063ccd9097" height="400px">

Switches bilden den Mittelpunkt des Netzwerks.

---

## Fehlersuche

### MAC-Adresse anzeigen

**Windows**

```powershell
ipconfig /all
```

**Linux**

```bash
ifconfig -a # Lists all networkinterfaces + their MAC adresses
```

---

## Prüfungsfragen

* Welche **Übertragungseinheit** hat Layer 2?
* Welche **Adressierung** wird verwendet?
* Welche Aufgabe hat ein **Switch**?
* Was ist der Unterschied zwischen **Hub und Switch**?
* Was ist eine **Kollisionsdomäne**?

# Layer 3
=> Zusammenschluss Mehrerer Netze (LANS und Internet-Wolke (WAN, GAN)) 

**Ziel**  
Schnellste, effizienteste Route über mehrere hierarchische Netze (LAN → MAN → WAN → GAN) zum Zielhost finden.

![](https://raw.githubusercontent.com/johannesloetzsch/LF4/refs/heads/main/src/img/Diagramm_Router.png)

Router (auch Gateway) verbindet unterschiedliche Netze und leitet Pakete weiter.
Adressierung

### Umsetzung  

**Adressierung**  
- IPv4‑Adresse (32 Bit) wird durch die Subnetzmaske in Netz‑ und Hostanteil geteilt.
- Netz‑ID = IP & Subnetzmaske (Host‑Bits = 0).
- Broadcast‑ID = alle Host‑Bits = 1.

**Übertragungseinheit**
- Paket – Größe begrenzt durch die MTU (Maximum Transmission Unit) des jeweiligen Netzes.

**Wichtige Protokolle**
- IP, ICMP (Fehlermeldungen), IPSec (Verschlüsselung), ARP (IP ↔ MAC‑Auflösung).

**Adressbereiche**
- Öffentliche Adressen – von IANA vergeben, global routbar.
- Private Adressen – nicht im Internet routbar (NAT nötig):
    - 10.0.0.0/8
    - 172.16.0.0/12
    - 192.168.0.0/16

**CIDR**  
Classeless Inter‑Domain Routing – flexible Präfix‑Notation (z. B. 192.168.1.0/24) ersetzt alte Klassen A/B/C.

**Subnetzgrößen**
- Mehr 1‑Bits in der Maske → mehr Netze, weniger Host‑Adressen pro Netz.
- Weniger 1‑Bits → weniger Netze, mehr Hosts.
- Pro Subnetz mindestens 2 nutzbare Host‑Adressen (wegen Netz‑‑ und Broadcast‑ID).

**Diagnose‑Tools**
```bash
ipconfig (Windows) / ifconfig (Linux) # lokale IP‑Konfiguration anzeigen.
ping <IP> # Erreichbarkeit prüfen.
tracert / traceroute <IP> # Wegverfolgung der Pakete.
arp -a # ARP‑Cache anzeigen.
```

**Besondere Adresse**
127.0.0.1 – Loopback/localhost, dient zur internen Kommunikation des eigenen Rechners.

**Praktische Fehlersuche‑Schritte**
- IP‑Konfiguration prüfen (ipconfig/ifconfig).
- Erreichbarkeit testen (ping).
- Wegverfolgung durchführen (tracert/traceroute).
- ARP‑Einträge kontrollieren (arp -a).
