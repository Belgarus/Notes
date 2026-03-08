# Ethernet & Zugriff

## Recap Ethernet

![Ethernet Frame](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.flukenetworks.com%2Fsites%2Fdefault%2Ffiles%2Fblog%2Fethernetbacktobasic01_1.png&f=1&nofb=1&ipt=88cc91253a6c972604b462015979af18ec41666926ddde6551b1688bbf81ae4c)

|Feld|Zweck|
|-|-|
|**7 Byte Präamble**:|  dient zur Taktsynchronisation, Bytes haben alle den gleiche Inhalt "10101010"|
|**SFD**:| Markiert Beginn des Frame Headers, enthält "10101011"|
|**Destination Mac Address**:|Enthält die Mac Addresse des Empfängers (Ziel)|
|**Source Mac Address**|Enthält die Mac Addresse des sendenden Gerätes|
|**Length / Type**|Gibt die Länge der Nutzdaten an oder bei moderneren Protokollen den Typ des Ethernet Frames|
|**Data**|Enthält die eigentlichen Nutzdaten|
|**CRC**|Enthält eine CRC-Checksum, zum überprüfen ob Bits gekippt sind (ähnlich wie die Quersumme einer Zahl)|


### Ausblick: Nochmal sehr gut erklärt
<iframe width="560" height="315" src="https://www.youtube.com/embed/SJE2lFR5utM?si=IYAtPxPipkWz6nSV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>