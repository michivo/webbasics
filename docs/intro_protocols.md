---
id: intro-protocols
title: Protokolle
sidebar_label: Protokolle
---

In diesem Skriptum wurde HTTP, das *Hypertext Transfer Protocol* bereits mehrfach erwähnt.
Nachdem schon kurz umrissen wurde, was *Hypertext* ist und die Bedeutung von *Transfer*
(also Übertragung) wohl keiner weiteren Erläuterung bedarf, bleibt noch der Begriff
**Protocol**.

Ein Protokoll in der Informatik bzw. Telekommunikation ist eine Vereinbarung, nach der
Datenübertragung zwischen zwei (oder mehreren) Parteien abläuft. Einige für das Internet
wichtige Protokolle sind z.B. das Internet Protocol (IP) und das Transmission 
Control Protocol (TCP). Netzwerkprotokolle sind in der Regel aus Schichten aufgebaute
Protokollstapel (d.h. HTTP basiert auf dem TCP, TCP setzt auf das IP, IP auf Ethernet). Das
Standardmodell für solche Protokolle im Netzwerkbereich ist das 7-Schichten-OSI-Modell
(auch ISO/OSI-Modell), für das Internet ist jedoch das 4-schichtige TCP/IP-Referenzmodell 
relevant.

## Das TCP/IP-Referenzmodell

Wie bereits erwähnt, besteht das TCP/IP-Referenzmodell aus 4 Schichten. Auch wenn wir uns
in diesem Skriptum ausschließlich mit Protokollen der 4. Schicht auseinandersetzen (DNS,
HTTP, HTTPS), ist die grundlegende Kenntnis des Protokollstapels hilfreich für das
Gesamtverständnis.

### Netzzugangsschicht / Link Layer
Die Netzzugangsschicht beinhaltet Protokolle, die grundsätzlich einen Netzzugang bzw. eine
Punkt-zu-Punkt-Datenübertragung ermöglichen. In den meisten Fällen kommen hier Protokolle wie
Ethernet oder 802.11 (WLAN) zum Einsatz. 

### Internetschicht / Internet Layer
Die Internetschicht ist für die Weitervermittlung von Paketen und das Routing zuständig. Für
den Internet Layer gibt es zwei Protokolle bzw. Protokollversionen: IPv4 und IPv6. Die
Aufgabe dieser Schicht ist es, zu einem empfangenen Paket das nächste Zwischenziel (den
nächsten "Hop") zu ermitteln und das Paket dorthin weiterzuleiten.

### Transportschicht / Transport Layer
Die Transportschicht ermöglicht Ende-zu-Ende-Verbindungen, also z.B. von Ihrem Endgerät
zu einem Server. Protokolle auf dieser Ebene ermöglichen den Austausch von Daten
über eine Verbindung zwischen zwei Netzteilnehmer. Die wichtigsten Protokolle auf dieser
Ebene sind das Transmission Control Protocol (TCP), Transport Layer Security (TLS) und das 
User Datagram Protocol (UDP).

### Anwendungsschicht / Application Layer
Die Anwendungsschicht umfasst alle Protokolle, die von Anwendungsprogrammen (wie
z.B. einem Webbrowser oder einem Webserver) für den Austausch anwendungsspezifischer Daten
genutzt werden. Auf dieser Ebene gibt es eine große Anzahl unterschiedlicher standardisierter
und nicht-standardisierter Protokolle, zum Beispiel DNS, FTP, HTTP, POP3, HTTPS, IMAP, SMTP,
SSH, ...