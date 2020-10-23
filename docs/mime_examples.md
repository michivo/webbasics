---
id: mime-list
title: Einige der wichtigsten Media Types für das Web
sidebar_label: Die wichtigsten Typen
---

Wie schon erwähnt gibt es über 1400 von der IANA gelistete Media Types, einige der für das Web relevantesten Typen sind hier aufgeführt:

## Bilder
Es gibt ja zahlreiche Bildformate (PNG, GIF, JPEG, ...), die jeweils unterschiedliche Vor- und Nachteile haben. Es gibt daher nicht ein *bestes Bildformat* für alle Anwendungsfälle. Eine prinzipielle Unterscheidung ist bei Grafikformaten zwischen Raster- und Vektorgrafiken zu treffen. Rastergrafiken bestehen aus einer rasterförmigen Anordnung von Pixeln, denen jeweils eine Farbe zugeordnet ist. Im Gegensatz dazu stehen Vektorgrafiken, die aus grafischen Elementen wie Linien, Kurven, Polygonen und Kreisen bestehen.

### Rastergrafiken
Rastergrafiken eignen sich vor allem zur Darstellung komplexer Bilder wie Fotos, die nicht mit Vektorgrafiken beschreibbar sind. Die gängigsten Rastergrafikformate sind:
- JPEG (`image/jpeg`) eignet sich gut für Fotos und ähnlich komplexe Bilder mit vielen Farben und detailreichen Strukturen. JPEG erlaubt es, solche Bilder mit relativ hoher Kompression zu speichern. JPEG ist aber verlustbehaftet, d.h. ein mit JPEG gespeichertes Bild unterscheidet sich doch qualitativ von einem Originalbild. Je höher die Kompressionsrate, desto eher sind solche Qualitätsunterschiede auch mit dem menschlichen Auge wahrnehmber.
- PNG (`image/png`) eignet sich gut für Icons, Logos, Diagramme und flächige Grafiken mit einer überschaubaren Anzahl an Farben. PNGs unterstützen auch Transparenz. Je nach Art des Bildes erreicht man bei PNGs teils bessere, teils schlechtere Kompressionsraten - je komplexer aber das Bild, desto eher ist die Kompression mit JPEG besser. Die PNG-Kompression ist dafür im Gegensatz zu JPEG verlustfrei.
- ICO (`image/x-icon`) ist das bevorzugte Format für Icons. ICO-Dateien können auch mehrere Einzelbilder in unterschiedlichen Auflösungen enthalten. Das ICO-Format wird häufig für das sogenannte **Favicon** verwendet, das von Browser in den Browser-Tabs zur Identifizierung von Webseiten verwendet wird.
- GIF (`image/gif`) ist ähnlich wie PNG ein verlustfreies Grafikformat, das sich für einfache Grafiken mit wenigen Farben eignet. GIF unterstützt außerdem Animationen, ansonsten ist PNG jedoch GIF in beinahe allen Fällen überlegen. Für animierte PNGs gibt es `image/apng`, das GIFs ebenfalls überlegen ist.
- WebP (`image/webp`) ist ein von Google entwickeltes Grafikformat, das die Vorteile von JPEG, GIF und PNG kombinieren soll: Verlustfreie und verlustbehaftete Kompression, Transparenz und Unterstützung von Animationen bei besseren Kompressionsraten als bei JPEG und PNG. Die Unterstützung von WebP in Browsern ist erst seit kurzem durchgängig gegeben (Firefox seit 2019, Safari seit 2020, Chrome und Edge schon länger), es gibt auch noch viele Grafikprogramme, die WebP noch nicht unterstützen. Derzeit ist aber davon auszugehen, dass WebP das Grafikformat der Zukunft im Webbereich sein wird.

Von der Verwendung von unkomprimierten Bitmaps (`image/bmp`) sollte im Web abgesehen werden, da unkomprimierte Grafikdateien unnötig groß sind.

### Vektorgrafiken
Vektorgrafiken eignen sich hervorragend für Logos, Icons und ähnliche Bilder. Der große Vorteil von Vektorgrafiken ist, dass sie beliebig skaliert werden können, ohne dass sie verpixeln, wie das bei Rastergrafiken der Fall wäre. Oft sind Vektorgrafikdateien um ein vielfaches kleiner als vergleichbare Rastergrafikdateien. Das einzige im Web verbreitet unterstützte Vektorgrafikvormat ist das XML-basierte SVG (`image/svg+xml`).

## Text
Textdateien sind im Allgemeinen Dateien, die in einem menschenlesbaren Format vorliegen: Source-Code, CSV-Daten, Markup-Sprachen, oder Textinhalte.
Die für das Web wichtigsten Formate sind:
- HTML (`text/html`) für HTML-Dokumente
- CSS (`text/css`) für Stylesheets
- Javascript (`text/javascript`) für Dateien, die JavaScript-Code beinhalten
- `text/plain` für "normale" Textdateien, deren Inhalt nicht irgendwie gesondert intepretiert werden soll

Bei Textdateien kann noch optional mit dem `charset`-Parameter angegeben werden, wie der Inhalt codiert ist: `charset=utf-8`. Diese Angabe führt bei JavaScript-Dateien aber oft dazu, dass sie nicht geladen werden.

## MIME-Sniffing
Bei Webseiten sollte immer sichergestellt werden, dass Server den Browser über den korrekten Media Type informieren. Fehlt der Media Type allerdings oder hat der Browser Grund zur Annahme, dass der Media Type falsch ist, versucht er, den Media Type zu **erraten**. Das wird als *MIME-Sniffing* bezeichnet und ist je nach Browser unterschiedlich implementiert. Der Browser kann z.B. aufgrund der Dateiendung, der ersten paar Bytes einer Datei oder aufgrund des Kontexts erraten, welcher Media Type vorliegt.