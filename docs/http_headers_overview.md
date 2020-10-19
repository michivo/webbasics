---
id: http-headers-overview
title: HTTP Header
sidebar_label: HTTP Header
---

Header können als Teil des Requests und der Response vorkommen, können gemäß ihres Kontexts wie folgt gruppiert werden:
- **Request Headers** enthalten weitere Informationen über die angeforderte Ressource oder den Client selbst. Einige der wichtigsten Request Header sind `Host`, `Accept-*`, `Cookie`, `User-Agent`, `Referer` und die `If-*`-Header.
- **Response Headers** enthalten Informationen über die Antwort des Servers oder den Server selbst. Einige der wichtigsten Response Header sind `Server`, `Etag`, `Location` und `Set-Cookie`. 
- **Entity Headers** enthalten Informationen über den Request- bzw. Response-Body. Einige der wichtigsten Entity Header sind `Content-Type`, `Content-Length`, `Content-Language` und `Content-Encoding`.
- **General Headers** enthalten allgemeine Informationen über Request oder Response ohne Bezug auf den Body. Einige der wichtigsten dieser Header sind `Date`, `Cache-Control` und `Connection`.

Auf folgenden Seiten finden Sie genauere Beschreibungen der Standard-HTTP-Header: 
- https://developer.mozilla.org/de/docs/Web/HTTP/Headers
- https://developer.mozilla.org/en/docs/Web/HTTP/Headers
- https://tools.ietf.org/html/rfc2616#section-4.2
- https://tools.ietf.org/html/rfc7231