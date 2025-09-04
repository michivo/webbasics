---
id: http-methods
title: HTTP - Anfragemethoden
sidebar_label: Anfragemethoden
---

Wie bereits erwähnt, ist die **Anfragemethode** Teil jedes Requests. Es gibt folgende Anfragemethoden:

### GET
Mit GET wird eine Ressource (also z.B. ein HTML-Dokument) abgefragt. GET ist die am häufigsten verwendete
Methode. GET-Requests sollen keinen Body haben (teilweise werden GET-Requests mit Body von Servern verworfen, 
in der Regel wird der Body ignoriert). In vielen Fällen entspricht die Ressource, die abgefragt wird, einer 
Datei, das muss aber nicht sein - mit GET können beliebige Arten von Ressourcen abgefragt werden.

Antworten auf GET-Requests *können* gecachet werden.

### HEAD
Die HEAD-Methode verhält sich mit einer Ausnahme gleich mit GET: HEAD liefert keinen Body. HEAD-Requests
werden dafür verwendet, um zu überprüfen, ob eine Ressource erreichbar ist oder ob sie sich verändert hat.

### POST
Mit der POST-Methode werden Daten an den Server zur weiteren Verarbeitung geschickt. Mit einer POST-Methode
können neue Ressourcen am Server angelegt werden oder bestehende Ressourcen modifiziert werden. Mit POST-Requests
kann man zum Beispiel
- Bilder oder andere Dateien auf eine Webseite hochladen
- Login-Daten (Benutzername & Passwort) sicher über eine verschlüsselte Verbindung an einen Server schicken
- Formulardaten an einen Server schicken

### PUT
Mit der PUT-Methode kann man neue Ressourcen erzeugen oder eine bestehende Ressource durch eine neue ersetzen.
Im Unterschied zur POST-Methode wird bei der PUT-Methode immer genau angegeben, welche Ressource neu angelegt
bzw. ersetzt werden soll. Wird ein Bild mit POST hochgeladen, wäre die URI `userdata/images` (d.h. es wird 
eine neue Ressource innerhalb von `userdata/images` angelegt). Wird ein Bild mit PUT hochgeladen, würde man
stattdessen die URI `userdata/images/mylittlepony` angeben, d.h. man legt eine neues Bild unter dieser URI an
oder ersetzt ein allenfalls vorhandenes Bild.

### DELETE
Mit der DELETE-Methode wird die angegebene Ressource gelöscht.

### PATCH
Mit PATCH kann eine bestehende Ressource geändert werden.

### TRACE
Der Server antwortet mit der Anfrage, so wie er sie bekommen hat

### OPTIONS
Der Server antwortet mit einer Liste der von ihm unterstützten Methoden und Merkmale

### CONNECT
Wird in der Kommunikation über HTTP-Proxies benötigt, um gesicherte Verbindungen durch ein oder 
mehrere Proxies zu tunneln.

Im weiteren Verlauf der Vorlesung haben wir ausschließlich mit GET, HEAD, POST, PUT und DELETE zu tun.