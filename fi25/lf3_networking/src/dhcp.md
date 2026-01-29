# Dynamic Host Configuration Protocol

Weist Geräten innerhalb des Netzwerks automatisch IP-Adressen zu ( die ganze IP-Konfiguration).   
**Ports:** 67, 68, **Layer**: 7

<img src="https://geekflare.com/wp-content/uploads/2023/09/DHCP-protocol-1200x567.png" height="300px">

Bild Quelle: [geekflare.com](https://geekflare.com/wp-content/uploads/2023/09/DHCP-protocol-1200x567.png)

## DHCP D-O-R-A Prinzip
**D**-Discover:   
Client sendet Anfrage für IP-Adresse als UDP-Paket von Port 68 als Broadcast auf Port 67.  
**O**-Offer:   
ein oder mehrere DHCP Server bieten dem Host eine IP Adresse an.  
**R** – Request:  
Host sucht sich der einen angebotenen IP-Adressen aus und fordert Bestätigung dieser bei Server an.  
**A** – Acknowledge:  
DHCP Server prüft nochmal und bestätigt die Zuweisung der IP Adresse.