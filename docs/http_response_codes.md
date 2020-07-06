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

### 302 Found
Die Ressource, die unter dieser URI zu finden war, ist temporär unter einer neuen URI zu finden. Diese
Umleitung kann sich in Zukunft ändern, der Client sollte daher bei späteren Requests immer die
ursprüngliche URI verwenden. Der Body der Antwort sollte einen kurzen Hinweis auf die Umleitung und einen
Link zur neuen URI enthalten.

### 303 See Other
Der Server leitet die Anfrage des Clients zu einer anderen Ressource um, die eine indirekte Antwort auf
die ursprüngliche Anfrage des Clients gibt.

### 307 Temporary Redirect
Temporary Redirect verhält sich bis auf ein Detail gleich wie `302 Found`. Der einzige Unterschied ist,
dass `302 Found` aus historischen Gründen eine Änderung der Methode von `POST` zu `GET` zulässt.

## Client-Fehler
### 400 Bad Request
Der Server kann die Anfrage nicht beantworten, weil die Anfrage ungültig ist (Fehlende Daten, ungültige
Syntax, ...)

### 403 Forbidden
Der Server hat die Anfrage verstanden, der Client ist aber nicht dazu berechtigt, auf die angefragte 
Ressource zuzugreifen. Der Client sollte nicht versuchen, die Anfrage noch einmal gleich zu stellen,
kann sie aber mit neuen Zugriffsinformationen erneut senden.
Server können statt mit `403 Forbidden` auch mit `404 Not Found` antworten, wenn sie aus
Sicherheitsgründen dem Client nicht mitteilen wollen, dass die angefragte Ressource überhaupt existiert.

### 404 Not Found
Der Server kann die angefragte Ressource nicht finden oder will dem Client aus Sicherheitsgründen nicht
mitteilen, dass die Ressource existiert. Dieser Statuscode sagt nichts darüber aus, ob dieser Zustand
temporär oder permanent ist.

### 405 Method Not Allowed
Die angefragte Ressource existiert zwar, ein Zugriff mit der vom Client verwendeten Anfragemethode (GET, POST, ...)
ist aber nicht möglich. In den Response-Headern teilt der Server dem Client die unterstützten Methoden mit.

## Quellen
- https://tools.ietf.org/html/rfc7231#section-6
- https://developer.mozilla.org/de/docs/Web/HTTP/Status
- https://de.wikipedia.org/wiki/HTTP-Statuscode
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes