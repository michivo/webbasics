---
id: dom-intro
title: Das Document Object Model
sidebar_label: DOM
---

Das **Document Object Model** (DOM) ist Definition einer Programmierschnittstelle,
die HTML-Dokumente (und auch XML-Dokumente) als Baumstruktur darstellt. Diese
Baumstruktur (der *DOM-Tree*) enthält als Knoten die Elemente einer HTML-Seite,
also z.B. Überschriften, Absätze, Links, etc. .

Das DOM erlaubt es, diese Baumstruktur zu verändern, also z.B. Knoten zu löschen,
zu ändern oder hinzuzufügen. Das ist eine wichtige Grundlage für moderne, dynamische
Inhalte. Öffnen Sie zum Beispiel die Seite eines Online-Shops, können Sie oft beobachten,
dass nach und nach zusätzliche Inhalte geladen werden: Artikelbewertungen, personalisierte
Empfehlungen, ... . Das geschieht dadurch, dass über das DOM dynamisch Elemente erzeugt werden.
Scrollen Sie bei Ihrem Lieblings-Social-Network in der Timeline einer Bekannten nach unten,
werden dort während des Scrollens Inhalte nachgeladen - auch das passiert, indem über das
DOM Ihre Seite dynamisch verändert wird.

All diese Manipulationen werden in der Regel mit JavaScript umgesetzt.

Die folgende Abbildung (Quelle: https://commons.wikimedia.org/wiki/File:DOM-model.svg, Autor: Birger Eriksson) zeigt den DOM-Tree einer einfachen Webseite:
![Beispiel-DOM einer Webseite](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/580px-DOM-model.svg.png)


6e4mjpaq/14/