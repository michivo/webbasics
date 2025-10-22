---
id: uris-intro
title: URIs - Wie werden Ressourcen identifiziert?
sidebar_label: URI-Überblick
---

Uniform Resource Identifier (URIs) sind menschen- und maschinenlesbare Identifikatoren, die
zur Identifizierung von Ressourcen dienen. Diese Ressourcen können physisch vorhanden sein (z.B. ein Buch)
oder abstrakt/virtuell sein (wie z.B. eine Webseite). Eine URI besteht aus 5 Teilen:
- `scheme`: Das Schema oder Protokoll und bezeichnet den Typ der URI. Vom Schema hängt ab, wie die weiteren Teile der URI interpretiert werden. Auf das Schema folgt ein Doppelpunkt. Beispiele: `http`, `https`, `ftp`, `urn`
- `authority` (optional): Die für die Verwaltung einer URI zuständige Instanz. Die authority folgt auf zwei Schrägstriche und endet mit einem einfachen Schrägstrich, einem Fragezeichen, einem Rautezeichen (#) oder dem Ende der URI. Beispiele: `www.campus02.at`
- `path`: Eine of hierarisch organisierte Angabe, die zusammen mit dem Abfrageteil eine Ressource identifiziert. Der Pfad endet mit einem Fragezeichen, einem Rautezeichen oder dem Ende der URI. Beispiele: `ISBN:3-8273-7019-1`, `wirtschaftsinformatik/bachelor/dat`
- `query`: Der Abfrageteil beinhaltet Daten, mit denen Ressourcen, die sonst nicht eindeutig identifizierbar wären, doch eindeutig lokalisierbar werden. Er beginnt mit einem Fragezeichen und endet mit einem Rautezeichen oder dem Ende der URI. Beispiele: `?s=business+data+science&search-submit=1`, `?search_query=business+data+science`
- `fragment`: Der Fragmentbezeichner identifiziert einen Teil einer Ressource und wird mit einem Rautezeichen (#) eingeleitet. Beispiele `#content`, `#303-see-other`. Mit dem Fragmentbezeichner können auch Textstellen innerhalb eines Dokuments addressiert werden, und zwar mit dem Präfix `:~:text=`, z.B.: `#:~:text=Web%20Basics`

Ein Beispiel für eine URI aus diesem Skriptum wäre: https://michivo.github.io/webbasics/docs/http-responses#303-see-other
Hier ist `https` das Schema, `michivo.github.io` die Authorität, `webbasics/docs/http-responses` der Pfad und `303-see-other` der Fragmentbezeichner. Es gibt keinen Abfrageteil.

Der Link https://michivo.github.io/webbasics/docs/uris-learnings#:~:text=reservierte%20Zeichen addressiert die Textstelle *reservierte Zeichen* in der angegebenen Seite.

Ein weiteres Beispiel von der Homepage des Campus02 ist: https://www.campus02.at/?s=business+intelligence&search-submit=1
Hier ist wiederum `https` das Schema, `www.campus02.at` die Authorität, `s=business+data+science&search-submit=1` der Query-String. Diese URI hat weder Pfad (bzw. einen leeren Pfad) und keinen Fragmentbezeichner.
Beispiele, die nicht Webseiten bezeichnen, sind `ftp://ftp.is.co.za/rfc/rfc1808.txt`, `file:///C:/Users/Benutzer/Desktop/Uniform%20Resource%20Identifier.html`, `git://github.com/michivo/webbasics.git`, `urn:epc:id:sgtin:012345:67890.10479832`, `tel:+43-316-6002-0` oder `URN:ISBN:0-395-36341-1`.

