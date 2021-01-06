---
id: a11y-aria
title: Accessible Rich Internet Applications - ARIA
sidebar_label: ARIA
---

**WAI-ARIA** steht für Web Accessibility Initiative – Accessible Rich Internet Applications, den W3C-Standard für barrierefreie Webseiten. ARIA ist somit eine technische Spezifikation, sie bezieht sich darauf, wie (dynamische) Webseiten so gebaut werden können, dass sie u.a. auch mit Screenreadern oder alternativen Eingabe- und Ausgabegeräten zuverlässig und gut bedienbar sind. Der [WAI-ARIA-Standard](https://www.w3.org/TR/wai-aria/) umfasst deutlich über 200 Seiten, sprengt also den Rahmen dieses Skriptums. Die wichtigsten Begriffe und Prinzipien werden aber hier erklärt.

## ARIA-Begriffe

HTML-Elemente haben **Rollen**, die Hilfsmitteln wie Screenreadern mitteilen, wie gewisse Elemente zu behandeln sind. Durch die Rollen von Elementen können Benutzer*innen mit Screenreadern bzw. solche ohne Maus, nur mit Keyboard effizienter durch eine Seite navigieren. Diese Rollen sind z.B. `button`, `checkbox`, `link` und `main`. Während zahlreiche Elemente vordefinierte Rollen haben, die nicht extra angegeben werden müssen, so hat jeder `button` automatisch die Rolle `button`, jedes `a`-Element mit einem `href`-Attribut die Rolle `link` oder (wenn innerhalb eines `menu`-Elements) die Rolle `menuitem`, der `header` die Rolle `banner`, jedes `input`-Element mit Attribut `type=checkbox` die Rolle `checkbox` und so weiter. Es gibt aber auch zahlreiche Elemente (`div` und `span` zum Beispiel), die offensichtlich keine implizite Rolle haben, ihnen kann mithilfe des HTML-Attributs `role` explizit eine Rolle zugewiesen werden, also z.B.:

```
<div role="math">2*3=4</div> Widdewiddewitt und drei macht neune
```

https://jsfiddle.net/michivo/u64rq5nb/10/