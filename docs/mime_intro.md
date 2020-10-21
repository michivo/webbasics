---
id: mime-intro
title: Media Types - Datenformate
sidebar_label: Überblick
---

Ein (Internet) Media Type (auch als **MIME-Type**, nach der Spezifikation *Multipurpose Internet Mail Extensions*) dient der Identifikation von Formaten bei der Übertragung von Daten über das Internet. Media Types kommen u.a. in E-Mails und bei der Datenübertragung über HTTP zum Einsatz. Für die Verwaltung und Standardisierung der Media Typen ist die IANA
(Internet Assigned Numbers Authority) zuständig, die u.a. auch die übergeordnete Behörde für die DNS-Verwaltung und die Vergabe von IP-Adressblöcken ist.

Ohne die Angabe eines Media Types wäre es einem Browser zum Beispiel nicht immer möglich, zu wissen, wie er von einem Server empfangene Daten richtig interpretieren soll.

## Aufbau

Media Types sind wie folgt aufgebaut (Terme in eckigen Klammern sind optional):

```
Typ "/" [Baum "."] Subtyp ["+" Suffix] * [";" Parameter]
```

Beispiele für Media Types sind `text/html; charset=UTF-8` für UTF-8-kodierte HTML-Dokumente, `image/jpeg` für JPEG-Bilder, 
`application/vnd.openxmlformats-officedocument.presentationml.presentation` für Powerpoint-Präsentationen oder
`application/vnd.apple.installer+xml` für Apples Installer-Pakete. Derzeit gibt es rund 1400 [offizielle, von der IANA anerkannte Media Types](http://www.iana.org/assignments/media-types/media-types.xhtml).

## Typen

Derzeit sind folgende Typen registriert:
- `text` für menschenlesbare, in Textformat vorliegende Daten, wie z.B. `text/html` für HTML-Dokumente oder `text/plain` für allgemeine Textdateien. Text-Typen werden oft ergänzt durch die Angabe einer Zeichenkodierung ergänzt, z.B.  `text/html; charset=UTF-8`
- `image` für Bilddaten, der Subtyp gibt dabei den genauen Bildtyp an, z.B. `image/jpeg` oder `image/png`
- `audio` für Audiodaten, der Subtyp gibt wiederum das Format an, z.B. `audio/mp3` oder `audio/ogg`
- `video` für Videodaten, der Subtyp gibt wie gehabt das Format an, z.B. `video/mpeg` oder `video/ogg`
- `application` für Datenformate, die zu keinem anderen Format passen und von Anwendungen/Programmen verarbeitet werden (z.B. `application/msword` für Word-Dokumente oder `application/octet-stream` für allgemeine Binärdaten)
- `multipart` für Daten, die sich aus mehreren Teilen unterschiedlichen Typs zusammensetzen, z.B. `multipart/form-data` für Daten aus HTML-Formularen oder `multipart/message` bei E-Mails, die geforwardete E-Mails beinhalten
- `font` für Schriftarten, z.B. `font/ttf`
- `example` als Platzhalter in Beispielcode
- `model` für 3D-Modelle u.ä., z.B. `model/3mf` oder `model/vml`
