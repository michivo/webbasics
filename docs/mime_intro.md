---
id: mime-intro
title: Media Types - Datenformate
sidebar_label: Überblick
---

Ein (Internet) Media Type (auch als **MIME-Type**, nach der Spezifikation *Multipurpose Internet Mail Extensions*) dient der Identifikation von Formaten bei der Übertragung von Daten über das Internet. Media Types kommen u.a. in E-Mails und bei der Datenübertragung über HTTP zum Einsatz. Für die Verwaltung und Standardisierung der Media Typen ist die IANA
(Internet Assigned Numbers Authority) zuständig, die u.a. auch die übergeordnete Behörde für die DNS-Verwaltung und die Vergabe von IP-Adressblöcken ist.

Ohne die Angabe eines Media Types wäre es einem Browser zum Beispiel nicht immer möglich, zu wissen, wie er von einem Server empfangene Daten richtig interpretieren soll.

## Aufbau

Media Types sind wie folgt aufgebaut (Terme in eckigen Klammern sind optional, ein Media Type kann mehrere Parameter haben):

```
Typ "/" [Baum "."] Subtyp ["+" Suffix] *[";" Parameter]
```

Beispiele für Media Types sind `text/html; charset=UTF-8` für UTF-8-kodierte HTML-Dokumente, `image/jpeg` für JPEG-Bilder, 
`application/vnd.openxmlformats-officedocument.presentationml.presentation` für Powerpoint-Präsentationen oder
`application/vnd.apple.installer+xml` für Apples Installer-Pakete. Derzeit gibt es rund 1400 [offizielle, von der IANA anerkannte Media Types](http://www.iana.org/assignments/media-types/media-types.xhtml).

### Typen

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

### Bäume

Es gibt folgende Bäume:
- Standards für Media Types, die von allgemeiner Bedeutung sind. Der Standards-Baum wird nicht angegeben: `text/html`, `image/jpeg`, ... . Standards müssen an die IANA übermittelt werden, werden dort einem Experten-Review unterzogen und dann veröffentlicht.
- Vendor-Baum `vnd` für Typen, die mit öffentlich verfügbaren Software-Produkten verwendet werden, z.B. `application/vnd.openxmlformats-officedocument.presentationml.presentation` oder `application/vnd.amazon.ebook`. Typen aus diesem Baum *können* der IANA für Reviews geschickt werden.
- Personal/Vanity-Baum `prs` für Typen, die für Testzwecke oder in nicht öffentlich verfügbaren Produkten verwendet werden, z.B. `application/prs.c02.funnydata`. Typen aus diesem Baum *können* der IANA für Reviews geschickt werden.
- Unregistrierte Typen im `x`-Baum, der nur für interne/private Zwecke genutzt werden soll, z.B. `text/x.michael.bigdb`

Eine Liste der häufigsten MIME-Typen ist u.a. [bei Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) zu finden.

## Verwendung in HTTP-Headern
In HTTP-Headern werden Media Types u.a. im Request-Header `Accept` und im Response-Header `Content-Type` verwendet. Im `Accept`-Header gibt der Client an, welche Datenformate er erwartet und unterstützt, kann mit dem Q-Wert zusätzlich angeben, welche Media Types bevorzugt werden:

´´´
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
´´´

