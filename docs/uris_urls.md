---
id: uris-urls
title: URLs - Wie werden Ressourcen im Web identifiziert?
sidebar_label: URLs
---

URIs können ja zur Identifikation auch physischer Ressourcen verwendet, z.B. im Fall von ISBNs für Bücher und Veröffentlichungen, im Fall von SGTINs für einzelne Handelsgüter. Diese Gruppe von URIs wird auch unter der Gruppe von URNs zusammengefasst. Eine andere, für das Web viel relevantere Gruppe von URIs sind die Uniform Resource Locators (URLs), die Ressourcen nicht nur identifizieren, sondern auch lokalisieren. Die Abgrenzung zwischen URN und URL ist nicht immer eindeutig.

# Uniform Resource Locators
URLs sind eine Untergruppe der URIs, folgen daher dem gleichen Aufbau. Ein Beispiel für eine etwas komplexere URL ist:

`https://michael:passwort@www.foobar.com:8080/index.html?param1=1234&param2=nochwas#ueberschrift7`

Bekannterweise beschreibt der erste Teil `https` das Schema oder Protokoll, in diesem Fall ist das HTTPS.
Die Autorität enthält in diesem Fall mehr Informationen als in den bisherigen Beispielen. Vor dem `@` werden Benutzername und Passwort angeführt, getrennt durch einen Doppelpunkt. Während es in den Anfangszeiten des Web nicht unüblich war, Benutzername und Passwort so zu übergeben, ist das mittlerweile aus Sicherheitsgründen nicht mehr üblich (und auch nicht Teil der HTTP-Standards). Nach dem `@` folgt der Hostname `www.foobar.com`, danach die Portangabe `8080`. Im Anschluss folgen der Pfad (`index.html`), der Query-String (`param1=1234&param2=nochwas`) und der Fragmentbezeichner `ueberschrift7`.

## URL-Encoding
In URLs gibt es ja einige Zeichen (`/`, `?`, `#`), denen eine besondere Bedeutung zukommt. Um auch solche Zeichen in Authorität, Pfad, Querystring oder Fragmentbezeichner verwenden zu können, müssen sie **URL-Encoded** (prozentkodiert) werden.

Es gelten folgende Zeichen als *reserviert*, weil ihnen im Dokumentenpfad eine Bedeutung zukommt: `: / ? # [ ] @ ! $ & ' ( ) * + , ; =`. Nicht reservierte Zeichen sind die Groß- und Kleinbuchstaben `a-z`, `A-Z`, Ziffern `0-9` und die Zeichen `- . _ ~`. In URLs dürfen keine weiteren Zeichen vorkommen.

Um nun andere Zeichen in einer URL verwenden zu können bzw. um auch reservierte Zeichen so zu verwenden, dass sie ihre spezielle Bedeutung verlieren, müssen sie speziell kodiert werden. Das Kodierungsverfahren ordnet jedem Zeichen einen dreistelligen Code zu, der mit einem Prozentzeichen beginnt und dem eine zweiziffrige Heximaldarstellung des ASCII-Zeichencodes folgt. 
Beispiele:

| Zeichen | Codiert |
|:---:|:---:|
|`#`|`%23`|
|`$`|`%24`|
|`%`|`%25`|

Das Leerzeichen wird z.B. in Suchstrings entweder durch das dafür reservierte Zeichen `+` ersetzt oder mit `%20` kodiert.
Sucht man beispielsweise auf der Homepage des Campus02 nach `$-Kurs`, so wird das in der URL entsprechend kodiert: https://www.campus02.at/?s=%24-kurs&search-submit=1 

# Siehe auch
- https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange
- https://de.wikipedia.org/wiki/Hexadezimalsystem

# Quellen
- https://tools.ietf.org/html/rfc3986
- https://de.wikipedia.org/wiki/URL-Encoding
