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
**Header** und einem **Body**. Der Header enthält Daten über den Body, damit dieser vom Empfänger
der jeweiligen Nachricht richtig verarbeitet werden kann.