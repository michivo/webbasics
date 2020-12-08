---
id: dom-tree
title: Der DOM-Baum
sidebar_label: DOM-Baum
---

Hier noch einmal die Darstellung des DOM-Baums einer einfachen Webseite:
(Quelle: https://commons.wikimedia.org/wiki/File:DOM-model.svg, Autor: Birger Eriksson):
![Beispiel-DOM einer Webseite](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/580px-DOM-model.svg.png)

Der DOM-Baum ist eine baumartige Repräsentation eines HTML-Dokuments. Die Wurzel des Baums ist
der **Dokumentknoten**. Der Dokumentknoten hat ein Kind, den **Elementknoten** des HTML-Elements, der wiederum
zwei Kinder hat: Die Elementknoten für Body und Head.

## Knotentypen
Wie in der Abbildung zu sehen, gibt es unterschiedliche Knotentypen im DOM-Baum:
- Den **Dokumentknoten** als Wurzels des DOM-Baums
- Den **Dokumenttypknoten**, der in der Abbildung oben nicht dargestellt wird (für die `DOCTYPE`-Angabe)
- Für jedes Element gibt es einen zugehörigen **Elementknoten**. Ein Elementknoten kann, je nach Element, ein oder mehrere weitere Elementknoten, Attributknoten oder Textknoten als Kinder haben
- Für jedes Attribut gibt es einen **Attributknoten**. Attributknoten können keine weiteren Kinder haben.
- Textinhalte werden in **Textknoten** abgelegt. Auch Textknoten können keine weiteren Kinder haben.
- Für Kommentare gibt es **Kommentarknoten**, die klarerweise auch keine Kinder haben

Auf http://bioub.github.io/dom-visualizer/ gibt es ein Tool, das DOM-Bäume einfacher Webseiten übersichtlich darstellt. Aber Vorsicht: DOM-Bäume werden schnell sehr groß und komplex, eine Visualisierung dieser Art bietet sich wirklich nur bei sehr kleinen, einfachen Seiten an.