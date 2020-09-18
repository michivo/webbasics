---
id: http-headers-overview
title: HTTP Header
sidebar_label: HTTP Header
---

Header können als Teil des Requests und der Response vorkommen, können gemäß ihres Kontexts wie folgt gruppiert werden:
- **Request Headers** enthalten weitere Informationen über die angeforderte Ressource oder den Client selbst (z.B. `User-Agent` - von welchem Client/Browser kommt die Anfrage?)
- **Response Headers** enthalten Informationen über die Antwort des Servers oder den Server selbst (z.B. `Server` - von welchem Server kommt die Antwort?)
- **Entity Headers** enthalten Informationen über den Request- bzw. Response-Body (z.B. `Content-Length` - wie lange ist der Body?)
- **General Headers** enthalten allgemeine Informationen über Request oder Response ohne Bezug auf den Body (z.B. `Date` - wann wurde der Request/die Response erzeugt?)

Auf folgenden Seiten finden Sie genauere Beschreibungen der Standard-HTTP-Header: 
- https://developer.mozilla.org/de/docs/Web/HTTP/Headers
- https://developer.mozilla.org/en/docs/Web/HTTP/Headers
- https://tools.ietf.org/html/rfc2616#section-4.2
- https://tools.ietf.org/html/rfc7231