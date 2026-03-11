# Hub, Switch und Router

## Hub 
Ein **Hub** (Englisch für „Nabe“ oder „Knotenpunkt“) ist ein Netzwerkgerät, das **mehrere Hosts innerhalb eines Ethernets miteinander verbindet**. In der Netzwerktechnik dient er als Verteiler für die Datenpakete. Hubs arbeiten auf Schicht 1 (Bitübertragungsschicht) des OSI-Modells. Ihre Funktion ist rein auf das Verteilen beschränkt. Sie sind somit nichts anderes als eine einfache Form von Switches oder Routern.

## Switch
Ein **Netzwerk-Switch** ist ein Gerät, das mehrere Computer, Drucker oder andere Netzwerkgeräte miteinander verbindet. Man könnte ihn sich wie eine Art Verteiler vorstellen, der aber nicht einfach nur alle Signale gleichzeitig weiterleitet, sondern ganz gezielt entscheidet, wohin die Datenpakete geschickt werden.

Während ein Hub noch stumpf alles an jedes angeschlossene Gerät schickt, ist ein Switch viel intelligenter. Er „merkt sich“, welches Gerät an welchem Anschluss steckt, und kann dadurch Datenpakete direkt zustellen. So landen die Informationen dort, wo sie gebraucht werden, ohne dass die anderen Geräte gestört werden.

### Layer 2 vs Layer 3 Switch
Ein **Layer-2-Switch** leitet die Datenpakete auf Basis der MAC-Adressen (OSI-Layer-2) weiter.
Ein **Layer-3-Switch** hingegen liest die Ziel-IP-Adresse aus dem Header des IP-Pakets und leitet es zum richtigen Port, er routet also auf OSI-Layer-3.   
(Ein Layer-4-Switch kann auch andere Informationen aus dem Header verwenden.)

Mehr dazu: [Layer 2 Switch erklärt](https://belgarus.github.io/Notes/fi25/sol_layer_2_switch/book/funktionsweise.html)

## Router
Der **Router** verbindet mindestens zwei Netzwerke (z. B. lokales LAN mit dem Internet/WAN) und entscheidet basierend auf IP-Adressen, wohin Datenpakete gesendet werden. Er arbeitet damit auf der Vermittlungsschicht (Schicht 3) des OSI-Modells.

## Aktive vs Passive Netzwerkkomponenten
- **aktive Netzwerkkomponenten** benötigen eine Stromversorgung
- **passive Netzwerkkomponenten** benötigen keine Stromversorgung

## Videos 

**Deutsche Erklärung:**
<iframe width="560" height="315" src="https://www.youtube.com/embed/zFfattg5gd8?si=OlTNwH1FHUcyjI_x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Englische Erklärung**
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ofjsh_E4HFY?si=pun-5hahw668RQZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>