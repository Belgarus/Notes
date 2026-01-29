# Dynamic Host Configuration Protocol

Weist Geräten innerhalb des Netzwerks automatisch IP-Adressen zu ( die ganze IP-Konfiguration).   
**Ports:** 67, 68, **Layer**: 7

<img src="https://geekflare.com/wp-content/uploads/2023/09/DHCP-protocol-1200x567.png" height="300px">

Bild Quelle: [geekflare.com](https://geekflare.com/wp-content/uploads/2023/09/DHCP-protocol-1200x567.png)

## DHCP D-O-R-A Prinzip
<img src="https://www.networkingsignal.com/wp-content/uploads/2017/11/dora-process-681x232.png.webp" height="300px">

Bild Quelle: [networkingsignal.com](https://www.networkingsignal.com/wp-content/uploads/2017/11/dora-process-681x232.png.webp)

| Schritt | Name        | Beschreibung |
|-------:|------------|--------------|
| **D**  | Discover    | Client sendet UDP-Broadcast von Port 68 an Port 67, um eine IP-Adresse anzufordern |
| **O**  | Offer       | DHCP-Server bietet eine freie IP-Adresse an |
| **R**  | Request     | Client fordert eine der angebotenen IP-Adressen an |
| **A**  | Acknowledge | Server bestätigt und weist die IP-Adresse zu |
