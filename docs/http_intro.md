---
id: http-intro
title: HTTP - das HyperText Transfer Protocol
sidebar_label: Überblick
---

*Das Hypertext Transfer Protocol (HTTP, englisch für Hypertext-Übertragungsprotokoll) ist ein* 
*zustandsloses Protokoll zur Übertragung von Daten auf der Anwendungsschicht über ein Rechnernetz.* 
*Es wird hauptsächlich eingesetzt, um Webseiten (Hypertext-Dokumente) aus dem World Wide Web (WWW)* 
*in einen Webbrowser zu laden. Es ist jedoch nicht prinzipiell darauf beschränkt und auch als*
*allgemeines Dateiübertragungsprotokoll sehr verbreitet.*
(Quelle: https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol).

HTTP ist also
- ein zustandsloses Protokoll: Anfragen sind voneinander unabhängig. Anfragen haben keinen Bezug zu früheren Anfragen.
- ein Protokoll auf der Anwendungsschicht des [TCP/IP-Referenzmodells](intro-protocols)
- ein Protokoll zur Übertragung von Daten über ein Rechnernetz, meist über das Internet

Die Kommunikation bei HTTP findet stets zwischen einem HTTP-Client (meist einem Browser, wie
Chrome, Firefox, Edge, ...) und einem HTTP-Server (nginx, Apache, MS IIS, ...) statt. Der Client
schickt **Anfragen/Requests** an den Server, der Server reagiert darauf mit **Antworten/Responses**.
Anfragen und Antworten werden als **Nachrichten** bezeichnet, jede Nachricht besteht aus einem 
**Header** und optional einem **Body**. Der Header enthält Daten über den Body, damit dieser vom Empfänger
der jeweiligen Nachricht richtig verarbeitet werden kann.

### Beispiel-Anfrage
HTTP-Requests sind auch für Menschen lesbar. Will man zum Beispiel die Internetseite mit
der URL http://info.cern.ch/hypertext/WWW/TheProject.html abrufen, wird zuerst (siehe [intro-dns](DNS))
der Domainname `info.cern.ch` aufgelöst. Der Domainname ist mit der IP-Adresse 188.184.100.82
verknüpft, zum Rechner mit dieser IP-Adresse wird dann folgende Anfrage geschickt:
```
GET /hypertext/WWW/TheProject.html HTTP/1.1
Host: info.cern.ch
```

- `GET` ist dabei das sogenannte **HTTP-Anfragemethode** und bezeichnet die Operation, die ausgeführt werden soll
- `/hypertext/WWW/TheProject.html` ist die Ressource, auf die zugegriffen werden soll
- `HTTP/1.1` ist der Protokollbezeichner - es wird also HTTP Version 1.1 für die Kommunikation verwendet
- `Host` ist ein **HTTP-Header**, der festlegt, für welchen DNS-Namen die Anfrage gedacht ist. So ist es möglich, mehrere Webseiten auf einem Rechner mit einer IP-Adresse zu betreiben. Der Wert dieses Headers ist der DNS-Name `info.cern.ch`.

Eine Anfrage *kann* im Allgemeinen auch einen Body haben, eine **GET**-Anfrage hat jedoch keinen Body, sie besteht nur aus
einem Header.

```
HTTP/1.1 200 OK 
Date: Tue, 30 Jun 2020 09:24:25 GMT  
Server: Apache  
Last-Modified: Thu, 03 Dec 1992 08:37:20 GMT  
ETag: "40521e06-8a9-291e721905000"   
Accept-Ranges: bytes  
Content-Length: 2217  
Connection: close  
Content-Type: text/html

[Antwort-Body]
```

<details>
<summary>Klicken Sie hier, um den gesamten Antwort-Body zu sehen (zur besseren Lesbarkeit formatiert).</summary>


```
<HEADER>
  <TITLE>The World Wide Web project<TITLE> 
  <NEXTID N="55"> 
</HEADER> 
<BODY> 
  <H1>World Wide Web</H1>
  The WorldWideWeb (W3) is a wide-area<A NAME=0 HREF="WhatIs.html"> hypermedia</A> 
  information retrieval initiative aiming to give universal access to a large universe 
  of documents.
  <P> 
  Everything there is online about W3 is linked directly or indirectly to this document, 
  including an <A NAME=24 HREF="Summary.html">executive summary</A> of the project, 
  <A NAME=29 HREF="Administration/Mailing/Overview.html">Mailing lists</A> , 
  <A NAME=30 HREF="Policy.html">Policy</A> , November's  
  <A NAME=34 HREF="News/9211.html">W3  news</A> , 
  <A NAME=41 HREF="FAQ/List.html">Frequently Asked Questions</A> . 
  <DL> 
    <DT><A NAME=44 HREF="../DataSources/Top.html">What's out there?</A> 
    <DD> Pointers to the world's online information,
    <A NAME=45 HREF="../DataSources/bySubject/Overview.html"> subjects</A> , 
    <A NAME=z54 HREF="../DataSources/WWW/Servers.html">W3 servers</A>, etc. 

    <DT><A NAME=46 HREF="Help.html">Help</A> 
    <DD> on the browser you are using 

    <DT><A NAME=13 HREF="Status.html">Software Products</A> 
    <DD> A list of W3 project components and their current state. (e.g. 
    <A NAME=27 HREF="LineMode/Browser.html">Line Mode</A> ,X11 
    <A NAME=35 HREF="Status.html#35">Viola</A> ,  
    <A NAME=26 HREF="NeXT/WorldWideWeb.html">NeXTStep</A> , 
    <A NAME=25 HREF="Daemon/Overview.html">Servers</A> , 
    <A NAME=51 HREF="Tools/Overview.html">Tools</A> ,
    <A NAME=53 HREF="MailRobot/Overview.html"> Mail robot</A> ,
    <A NAME=52 HREF="Status.html#57"> Library</A> ) 
    
    <DT><A NAME=47 HREF="Technical.html">Technical</A> 
    <DD> Details of protocols, formats, program internals etc 

    <DT><A NAME=40 HREF="Bibliography.html">Bibliography</A> 
    <DD> Paper documentation on  W3 and references. 

    <DT><A NAME=14 HREF="People.html">People</A> 
    <DD> A list of some people involved in the project. 

    <DT><A NAME=15 HREF="History.html">History</A> 
    <DD> A summary of the history of the project. 

    <DT><A NAME=37 HREF="Helping.html">How can I help</A> ? 
    <DD> If you would like to support the web.. 

    <DT><A NAME=48 HREF="../README.html">Getting code</A> 
    <DD> Getting the code by
    <A NAME=49 HREF="LineMode/Defaults/Distribution.html"> anonymous FTP</A> , etc.</A>
  </DL>
</BODY>
```
</details>

Die Bedeutung der Response-Header ist wie folgt:
- `HTTP/1.1` - das Ergebnis enspricht HTTP Version 1.1
- `200 OK` - der Ergebnisstatuscode ist 200 OK, die Anfrage konnte erfolgreich bearbeitet werden
- `Date: Tue, 30 Jun 2020 09:24:25 GMT` - Datum der Response
- `Server: Apache` - die Response kommt von einem Apache-Server
- `Last-Modified: Thu, 03 Dec 1992 08:37:20 GMT` - das abgefragte Dokument wurde zuletzt 1992 modifiziert
- `ETag: "40521e06-8a9-291e721905000"` - Entity Tag, wird u.a. für Caching verwendet
- `Accept-Ranges: bytes` - Hiermit gibt der Server bekannt, dass er auch partielle Requests verarbeiten kann (z.B. wenn ein Download unterbrochen wurde)
- `Content-Length: 2217` - Länge des Response-Bodys
- `Connection: close` - Darunterliegende TCP-Verbindung soll geschlossen werden
- `Content-Type: text/html` - Das Ergebnis enthält HTML