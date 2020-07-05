---
id: http-responses
title: HTTP - Response Codes
sidebar_label: Response Codes
---

Jede Response von einem HTTP-Server beginnt mit einem Response-Code, der dem Client
Informationen darüber gibt, ob die von ihm gestellte Anfrage erfolgreich beantwortet
werden konnte oder nicht. Wenn eine Anfrage nicht erfolgreich beantwortet werden konnte,
enthält der Response Code Informationen darüber, was der Grund für den Fehler war.

Der Response Code ist eine dreistellige Dezimalzahl, deren erste Stelle die Statusklasse
darstellt:
- 1xx -> Informationen - die Anfrage wurde entgegengenommen und ist in Bearbeitung
- 2xx -> Erfolgreiche Operationen - die Anfrage wurde entgegengenommen, verstanden und erfolgreich bearbeitet
- 3xx -> Umleitung - für die Bearbeitung der Anfrage muss der Client noch etwas machen
- 4xx -> Client-Fehler - die Anfrage ist ungültig bzw. kann nicht verarbeitet werden
- 5xx -> Server-Fehler - die Anfrage war zwar gültig, bei der Bearbeitung ist es am Server aber zu einem Fehler gekommen

## Informationen
### 100 Continue
Eine Zwischenantwort, mit der der Server anzeigt, dass bisher alles in Ordnung ist und
der Client mit seinem Request weitermachen soll. Möchte der Client z.B. große Mengen an
Daten schicken, kann er zuerst einen Request ohne Body schicken, auf den der Server dann
mit `100 Continue` oder einem entsprechenden Fehlercode antworten kann. Nur bei `100 Continue`
würde der Client auch tatsächlich Daten schicken.

### 101 Switching protocols
Der Client hat beim Server um einen Protokollwechsel angefragt, der Server antwortet, dass
das in Ordnung ist. Dieser Status Code kommt selten vor.

### 102 Processing
Der Server teilt dem Client mit, dass sein Request noch verarbeitet wird. Der Client weiß
also, dass der Server noch am Request arbeitet und kein Timeout (oder ein anderer Fehler)
aufgetreten ist.

## Erfolg
### 200 OK
Der häufigste Response-Code. Die Anfrage wurde erfolgreich bearbeitet, der Body enthält die
angeforderten Daten
### 201 Created
Die Anfrage wurde erfolgreich bearbeitet, eine oder mehrere Ressourcen wurden erfolgreich
angelegt.
### 202 Accepted
Die Anfrage wurde akzeptiert, aber noch nicht vollständig verarbeitet.
### 203 Non-Authoritative Information
Die Antwort kommt von einem Proxy, der vom Zielserver eine Antwort mit Status `200 OK` bekommen
hat, dem Client aber eine veränderte Version der Antwort weitergibt.
### 204 No Content
Der Server hat die Anfrage des Clients entgegengenommen und erfolgreich verarbeitet,
es gibt aber keinen Body.
### 205 Reset Content
Der Server hat die Anfrage erfolgreich bearbeitet und teilt dem Client mit, dass er das
aktive Dokument zurücksetzen bzw. neu laden soll.
### 206 Partial Content
Der Server liefert nur einen Teil der Antwort im Body, weil der Client das so angefordert hat
(z.B. um einen zuvor abgebrochenen Download fortzusetzen).

Die weiteren 2xx-Codes haben kaum praktische Relevanz, werden hier daher nicht weiter behandelt.

## Umleitung
### 300 Multiple Choices
Es gibt mehrere Optionen für die angefragte Ressource (z.B. mehrere unterschiedliche Videoformate, ...),
der Client muss erst entscheiden, welches Format er bevorzugt.

### 301 Moved Permanently
Die Ressource, die unter dieser URI zu finden war, ist nun unter einer neuen URI zu finden. Der Client
soll in Zukunft nur noch die neue URI verwenden.



## Quellen:
- https://tools.ietf.org/html/rfc7231#section-6
- https://developer.mozilla.org/de/docs/Web/HTTP/Status
- https://de.wikipedia.org/wiki/HTTP-Statuscode
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes