(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return l})),i.d(n,"metadata",(function(){return b})),i.d(n,"rightToc",(function(){return c})),i.d(n,"default",(function(){return d}));var t=i(2),r=i(9),a=(i(0),i(195)),l={id:"a11y-aria",title:"Accessible Rich Internet Applications - ARIA",sidebar_label:"ARIA"},b={id:"a11y-aria",title:"Accessible Rich Internet Applications - ARIA",description:"WAI-ARIA steht f\xfcr Web Accessibility Initiative \u2013 Accessible Rich Internet Applications, den W3C-Standard f\xfcr barrierefreie Webseiten. ARIA ist somit eine technische Spezifikation, sie bezieht sich darauf, wie (dynamische) Webseiten so gebaut werden k\xf6nnen, dass sie u.a. auch mit Screenreadern oder alternativen Eingabe- und Ausgabeger\xe4ten zuverl\xe4ssig und gut bedienbar sind. Der WAI-ARIA-Standard umfasst deutlich \xfcber 200 Seiten, sprengt also den Rahmen dieses Skriptums. Die wichtigsten Begriffe und Prinzipien werden aber hier erkl\xe4rt.",source:"@site/docs/a11y_aria.mdx",permalink:"/webbasics/docs/a11y-aria",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/a11y_aria.mdx",sidebar_label:"ARIA",sidebar:"someSidebar",previous:{title:"Accessibility - Barrierefreiheit",permalink:"/webbasics/docs/a11y-intro"},next:{title:"Lernziele",permalink:"/webbasics/docs/a11y-learnings"}},c=[{value:"ARIA-Begriffe",id:"aria-begriffe",children:[]},{value:"Richtlinien f\xfcr die Erstellung barrierefreier Webseiten",id:"richtlinien-f\xfcr-die-erstellung-barrierefreier-webseiten",children:[]}],s={rightToc:c};function d(e){var n=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},s,i,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"WAI-ARIA")," steht f\xfcr Web Accessibility Initiative \u2013 Accessible Rich Internet Applications, den W3C-Standard f\xfcr barrierefreie Webseiten. ARIA ist somit eine technische Spezifikation, sie bezieht sich darauf, wie (dynamische) Webseiten so gebaut werden k\xf6nnen, dass sie u.a. auch mit Screenreadern oder alternativen Eingabe- und Ausgabeger\xe4ten zuverl\xe4ssig und gut bedienbar sind. Der ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria/"}),"WAI-ARIA-Standard")," umfasst deutlich \xfcber 200 Seiten, sprengt also den Rahmen dieses Skriptums. Die wichtigsten Begriffe und Prinzipien werden aber hier erkl\xe4rt."),Object(a.b)("h2",{id:"aria-begriffe"},"ARIA-Begriffe"),Object(a.b)("p",null,"HTML-Elemente haben ",Object(a.b)("strong",{parentName:"p"},"Rollen"),", die Hilfsmitteln wie Screenreadern mitteilen, wie gewisse Elemente zu behandeln sind. Durch die Rollen von Elementen k\xf6nnen Benutzer*innen mit Screenreadern bzw. solche ohne Maus, nur mit Keyboard effizienter durch eine Seite navigieren. Diese Rollen sind z.B. ",Object(a.b)("inlineCode",{parentName:"p"},"button"),", ",Object(a.b)("inlineCode",{parentName:"p"},"checkbox"),", ",Object(a.b)("inlineCode",{parentName:"p"},"link")," und ",Object(a.b)("inlineCode",{parentName:"p"},"main"),". W\xe4hrend zahlreiche Elemente vordefinierte Rollen haben, die nicht extra angegeben werden m\xfcssen, so hat jeder ",Object(a.b)("inlineCode",{parentName:"p"},"button")," automatisch die Rolle ",Object(a.b)("inlineCode",{parentName:"p"},"button"),", jedes ",Object(a.b)("inlineCode",{parentName:"p"},"a"),"-Element mit einem ",Object(a.b)("inlineCode",{parentName:"p"},"href"),"-Attribut die Rolle ",Object(a.b)("inlineCode",{parentName:"p"},"link")," oder (wenn innerhalb eines ",Object(a.b)("inlineCode",{parentName:"p"},"menu"),"-Elements) die Rolle ",Object(a.b)("inlineCode",{parentName:"p"},"menuitem"),", der ",Object(a.b)("inlineCode",{parentName:"p"},"header")," die Rolle ",Object(a.b)("inlineCode",{parentName:"p"},"banner"),", jedes ",Object(a.b)("inlineCode",{parentName:"p"},"input"),"-Element mit Attribut ",Object(a.b)("inlineCode",{parentName:"p"},"type=checkbox")," die Rolle ",Object(a.b)("inlineCode",{parentName:"p"},"checkbox")," und so weiter. Es gibt aber auch zahlreiche Elemente (",Object(a.b)("inlineCode",{parentName:"p"},"div")," und ",Object(a.b)("inlineCode",{parentName:"p"},"span")," zum Beispiel), die offensichtlich keine implizite Rolle haben, ihnen kann mithilfe des HTML-Attributs ",Object(a.b)("inlineCode",{parentName:"p"},"role")," explizit eine Rolle zugewiesen werden, also z.B.:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{}),'<div role="math">2*3=4</div> Widdewiddewitt und drei macht neune\n')),Object(a.b)("p",null,"Die wichtigsten Rollen zur Navigation auf einer Seite sind die ",Object(a.b)("strong",{parentName:"p"},"Landmark-Roles"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"banner")," f\xfcr die allgemeine Informationen wie Firmennamen, Logo, Suchfeld etc. die meist am Beginn einer Seite sind (das Element ",Object(a.b)("inlineCode",{parentName:"li"},"header")," hat implizit diese Rolle)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"main")," f\xfcr den Hauptteil der Seite (das Element ",Object(a.b)("inlineCode",{parentName:"li"},"main")," hat implizit diese Rolle)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"contentinfo")," f\xfcr Informationen wie Copyright-Statement, Datenschutzinformationen, Impressum etc., die meist am Ende einer Seite zu finden sind (das Element ",Object(a.b)("inlineCode",{parentName:"li"},"footer")," hat implizit diese Rolle)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"navigation")," f\xfcr Gruppen von Links, die zur Navigation auf einer Seite dienen (das Element ",Object(a.b)("inlineCode",{parentName:"li"},"nav")," hat implizit diese Rolle)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"search")," f\xfcr ein Suchfeld, diese Rolle muss explizit vergeben werden (meist in der Form ",Object(a.b)("inlineCode",{parentName:"li"},'<form role="search">\x3c!-- Suchfeld --\x3e</form>'),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"form")," f\xfcr Formulare (hier sollte bevorzugt das Element ",Object(a.b)("inlineCode",{parentName:"li"},"form")," ohne Rollenangabe verwendet werden)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"complementary")," f\xfcr erg\xe4nzende Informationen (das ",Object(a.b)("inlineCode",{parentName:"li"},"aside"),"-Element hat implizit diese Rolle)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"region"),", um Bereiche innerhalb einer Seite zu identifizieren, um die Navigation dorthin zu erleichtern")),Object(a.b)("p",null,"Zus\xe4tzlich zu den Rollen gibt es auch ",Object(a.b)("strong",{parentName:"p"},"Eigenschaften")," und ",Object(a.b)("strong",{parentName:"p"},"Zustandsinformationen")," die \xfcber ",Object(a.b)("strong",{parentName:"p"},"ARIA-Attribute")," ausgedr\xfcckt werden. Diese Attribute sind HTML-Attribute, die Informationen zu den Eigenschaften und \xfcber den Zustand eines Elements mit einer bestimmten Rolle beinhalten. ",Object(a.b)("inlineCode",{parentName:"p"},"aria-label")," beinhaltet zum Beispiel einen Namen f\xfcr ein Element, das sonst keinen sichtbaren Namen hat (z.B. ",Object(a.b)("inlineCode",{parentName:"p"},'<button aria-label="Close">X</button>'),"), ",Object(a.b)("inlineCode",{parentName:"p"},"aria-labelledby")," um z.B. bei einem Input-Feld anzugeben, in welchem Element sich der Name des Input-Elements befindet:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{}),'    <div id="mailLabelId">E-Mail</div>\n    <input type="text" aria-labelledby="mailLabelId"/>\n')),Object(a.b)("p",null,"Weiters gibt es Attribute, die den ver\xe4nderlichen Zustand eines Elements beinhalten, z.B. ",Object(a.b)("inlineCode",{parentName:"p"},"aria-checked")," bei Checkboxen, ",Object(a.b)("inlineCode",{parentName:"p"},"aria-valuenow")," f\xfcr den aktuellen Wert eines Fortschrittsbalkens etc."),Object(a.b)("p",null,"Eine umfassende Beschreibung aller Rollen, Zust\xe4nde und Eigenschaften findet man einerseits im ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria/"}),"ARIA-Standard"),", eine etwas kompaktere Auflistung der wichtigsten Zust\xe4nde und Eigenschaften gibt es auch bei ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://wiki.selfhtml.org/wiki/WAI-ARIA/Zust%C3%A4nde_und_Eigenschaften"}),"selfhtml"),"."),Object(a.b)("h2",{id:"richtlinien-f\xfcr-die-erstellung-barrierefreier-webseiten"},"Richtlinien f\xfcr die Erstellung barrierefreier Webseiten"),Object(a.b)("p",null,"Angesichts der zahlreichen Rollen, Eigenschaften und Zust\xe4nde sowie deren Beziehungen untereinander mag man als Webentwickler verzweifelt fragen: Brauche ich das wirklich alles? Nicht wirklich, denn meist reicht es, sich an einige wichtige Grundregeln zu halten:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Verwenden Sie semantisch passende Elemente (wie oben gesehen haben viele Elemente schon die richtigen ARIA-Rollen). Nur wenn Sie generische Elemente wie ",Object(a.b)("inlineCode",{parentName:"li"},"span")," oder ",Object(a.b)("inlineCode",{parentName:"li"},"div")," verwenden, sollten Sie auch entsprechende Rollen angeben, wo n\xf6tig."),Object(a.b)("li",{parentName:"ol"},"Verwenden Sie die oben angef\xfchrten Landmark-Roles als Orientierungspunkte. Wenn Sie sich an Regel 1 halten, werden die Landmark-Roles gro\xdfteils ohnehin schon richtig vergeben."),Object(a.b)("li",{parentName:"ol"},"Strukturieren Sie Ihre Seite richtig: Verwenden Sie richtige Header-Hierarchien (h1, h2, h3, h4, ...)"),Object(a.b)("li",{parentName:"ol"},"Verwenden Sie Schriftarten, Schriftgr\xf6\xdfen und Farben, die die Lesbarkeit Ihrer Seite erh\xf6hen. Links sollten als solche erkennbar sein, ihr Zustand ebenso."),Object(a.b)("li",{parentName:"ol"},"Setzen Sie bei interaktiven Elementen (Eingabefeldern, ...) die relevanten ARIA-Attribute, um auch Benutzer*innen mit Einschr\xe4nkungen die Verwendung Ihrer Seite zu erm\xf6glichen"),Object(a.b)("li",{parentName:"ol"},"Achten Sie bei Multimediainhalten wie Bildern darauf, dass stets ein Alternativtext angegeben ist. Sollen Bilder keinen Inhalt transportieren, geben Sie einen leeren Alternativtext an, lassen ihn aber nicht weg."),Object(a.b)("li",{parentName:"ol"},"Verwenden Sie JavaScript nicht mehr als n\xf6tig. Zu viele dynamische Inhalte erschweren oft die Verwendung Ihrer Seite f\xfcr Benutzer*innen mit Einschr\xe4nkungen.")),Object(a.b)("p",null,"Hier sehen Sie ein paar Beispiele, wie man es ",Object(a.b)("strong",{parentName:"p"},"nicht")," machen soll:"),Object(a.b)("iframe",{width:"100%",height:"400",src:"//jsfiddle.net/michivo/u64rq5nb/18/embedded/result,html,css,js/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}),Object(a.b)("p",null,"Meist ist es so, dass es kaum Zusatzaufwand bedeutet, Seiten barrierefrei zu gestalten, es ist aber oft viel Arbeit, Seiten im Nachhinein barrierefrei zu machen. Daher: Machen Sie Ihre Seiten von vornherein barrierefrei!"))}d.isMDXComponent=!0},195:function(e,n,i){"use strict";i.d(n,"a",(function(){return o})),i.d(n,"b",(function(){return p}));var t=i(0),r=i.n(t);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function b(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function c(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=r.a.createContext({}),d=function(e){var n=r.a.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):b(b({},n),e)),i},o=function(e){var n=d(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),o=d(i),u=t,p=o["".concat(l,".").concat(u)]||o[u]||m[u]||a;return i?r.a.createElement(p,b(b({ref:n},s),{},{components:i})):r.a.createElement(p,b({ref:n},s))}));function p(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=i.length,l=new Array(a);l[0]=u;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b.mdxType="string"==typeof e?e:t,l[1]=b;for(var s=2;s<a;s++)l[s]=i[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"}}]);