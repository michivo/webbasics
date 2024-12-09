"use strict";(self.webpackChunkweb_basics=self.webpackChunkweb_basics||[]).push([[4408],{5680:(e,n,i)=>{i.d(n,{xA:()=>m,yg:()=>g});var t=i(6540);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=t.createContext({}),o=function(e){var n=t.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},m=function(e){var n=o(e.components);return t.createElement(d.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=o(i),u=r,g=c["".concat(d,".").concat(u)]||c[u]||p[u]||a;return i?t.createElement(g,l(l({ref:n},m),{},{components:i})):t.createElement(g,l({ref:n},m))}));function g(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<a;o++)l[o]=i[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},7374:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(8168),r=i(8587),a=(i(6540),i(5680));const l=["components"],s={id:"a11y-aria",title:"Accessible Rich Internet Applications - ARIA",sidebar_label:"ARIA"},d=void 0,o={unversionedId:"a11y-aria",id:"a11y-aria",title:"Accessible Rich Internet Applications - ARIA",description:"WAI-ARIA steht f\xfcr Web Accessibility Initiative \u2013 Accessible Rich Internet Applications, den W3C-Standard f\xfcr barrierefreie Webseiten. ARIA ist somit eine technische Spezifikation, sie bezieht sich darauf, wie (dynamische) Webseiten so gebaut werden k\xf6nnen, dass sie u.a. auch mit Screenreadern oder alternativen Eingabe- und Ausgabeger\xe4ten zuverl\xe4ssig und gut bedienbar sind. Der WAI-ARIA-Standard umfasst deutlich \xfcber 200 Seiten, sprengt also den Rahmen dieses Skriptums. Die wichtigsten Begriffe und Prinzipien werden aber hier erkl\xe4rt.",source:"@site/docs/a11y_aria.mdx",sourceDirName:".",slug:"/a11y-aria",permalink:"/webbasics/docs/a11y-aria",draft:!1,editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/a11y_aria.mdx",tags:[],version:"current",frontMatter:{id:"a11y-aria",title:"Accessible Rich Internet Applications - ARIA",sidebar_label:"ARIA"},sidebar:"someSidebar",previous:{title:"Einf\xfchrung",permalink:"/webbasics/docs/a11y-intro"},next:{title:"Lernziele",permalink:"/webbasics/docs/a11y-learnings"}},m={},c=[{value:"ARIA-Begriffe",id:"aria-begriffe",level:2},{value:"Richtlinien f\xfcr die Erstellung barrierefreier Webseiten",id:"richtlinien-f\xfcr-die-erstellung-barrierefreier-webseiten",level:2}],p={toc:c},u="wrapper";function g(e){let{components:n}=e,i=(0,r.A)(e,l);return(0,a.yg)(u,(0,t.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"WAI-ARIA")," steht f\xfcr Web Accessibility Initiative \u2013 Accessible Rich Internet Applications, den W3C-Standard f\xfcr barrierefreie Webseiten. ARIA ist somit eine technische Spezifikation, sie bezieht sich darauf, wie (dynamische) Webseiten so gebaut werden k\xf6nnen, dass sie u.a. auch mit Screenreadern oder alternativen Eingabe- und Ausgabeger\xe4ten zuverl\xe4ssig und gut bedienbar sind. Der ",(0,a.yg)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria/"},"WAI-ARIA-Standard")," umfasst deutlich \xfcber 200 Seiten, sprengt also den Rahmen dieses Skriptums. Die wichtigsten Begriffe und Prinzipien werden aber hier erkl\xe4rt."),(0,a.yg)("h2",{id:"aria-begriffe"},"ARIA-Begriffe"),(0,a.yg)("p",null,"HTML-Elemente haben ",(0,a.yg)("strong",{parentName:"p"},"Rollen"),", die Hilfsmitteln wie Screenreadern mitteilen, wie gewisse Elemente zu behandeln sind. Durch die Rollen von Elementen k\xf6nnen Benutzer*innen mit Screenreadern bzw. solche ohne Maus, nur mit Keyboard effizienter durch eine Seite navigieren. Diese Rollen sind z.B. ",(0,a.yg)("inlineCode",{parentName:"p"},"button"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"checkbox"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"link")," und ",(0,a.yg)("inlineCode",{parentName:"p"},"main"),". W\xe4hrend zahlreiche Elemente vordefinierte Rollen haben, die nicht extra angegeben werden m\xfcssen, so hat jeder ",(0,a.yg)("inlineCode",{parentName:"p"},"button")," automatisch die Rolle ",(0,a.yg)("inlineCode",{parentName:"p"},"button"),", jedes ",(0,a.yg)("inlineCode",{parentName:"p"},"a"),"-Element mit einem ",(0,a.yg)("inlineCode",{parentName:"p"},"href"),"-Attribut die Rolle ",(0,a.yg)("inlineCode",{parentName:"p"},"link")," oder (wenn innerhalb eines ",(0,a.yg)("inlineCode",{parentName:"p"},"menu"),"-Elements) die Rolle ",(0,a.yg)("inlineCode",{parentName:"p"},"menuitem"),", der ",(0,a.yg)("inlineCode",{parentName:"p"},"header")," die Rolle ",(0,a.yg)("inlineCode",{parentName:"p"},"banner"),", jedes ",(0,a.yg)("inlineCode",{parentName:"p"},"input"),"-Element mit Attribut ",(0,a.yg)("inlineCode",{parentName:"p"},"type=checkbox")," die Rolle ",(0,a.yg)("inlineCode",{parentName:"p"},"checkbox")," und so weiter. Es gibt aber auch zahlreiche Elemente (",(0,a.yg)("inlineCode",{parentName:"p"},"div")," und ",(0,a.yg)("inlineCode",{parentName:"p"},"span")," zum Beispiel), die offensichtlich keine implizite Rolle haben, ihnen kann mithilfe des HTML-Attributs ",(0,a.yg)("inlineCode",{parentName:"p"},"role")," explizit eine Rolle zugewiesen werden, also z.B.:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'<div role="math">2*3=4</div> Widdewiddewitt und drei macht neune\n')),(0,a.yg)("p",null,"Die wichtigsten Rollen zur Navigation auf einer Seite sind die ",(0,a.yg)("strong",{parentName:"p"},"Landmark-Roles"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"banner")," f\xfcr die allgemeine Informationen wie Firmennamen, Logo, Suchfeld etc. die meist am Beginn einer Seite sind (das Element ",(0,a.yg)("inlineCode",{parentName:"li"},"header")," hat implizit diese Rolle)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"main")," f\xfcr den Hauptteil der Seite (das Element ",(0,a.yg)("inlineCode",{parentName:"li"},"main")," hat implizit diese Rolle)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"contentinfo")," f\xfcr Informationen wie Copyright-Statement, Datenschutzinformationen, Impressum etc., die meist am Ende einer Seite zu finden sind (das Element ",(0,a.yg)("inlineCode",{parentName:"li"},"footer")," hat implizit diese Rolle)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"navigation")," f\xfcr Gruppen von Links, die zur Navigation auf einer Seite dienen (das Element ",(0,a.yg)("inlineCode",{parentName:"li"},"nav")," hat implizit diese Rolle)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"search")," f\xfcr ein Suchfeld, diese Rolle muss explizit vergeben werden (meist in der Form ",(0,a.yg)("inlineCode",{parentName:"li"},'<form role="search">\x3c!-- Suchfeld --\x3e</form>'),")"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"form")," f\xfcr Formulare (hier sollte bevorzugt das Element ",(0,a.yg)("inlineCode",{parentName:"li"},"form")," ohne Rollenangabe verwendet werden)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"complementary")," f\xfcr erg\xe4nzende Informationen (das ",(0,a.yg)("inlineCode",{parentName:"li"},"aside"),"-Element hat implizit diese Rolle)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"region"),", um Bereiche innerhalb einer Seite zu identifizieren, um die Navigation dorthin zu erleichtern")),(0,a.yg)("p",null,"Zus\xe4tzlich zu den Rollen gibt es auch ",(0,a.yg)("strong",{parentName:"p"},"Eigenschaften")," und ",(0,a.yg)("strong",{parentName:"p"},"Zustandsinformationen")," die \xfcber ",(0,a.yg)("strong",{parentName:"p"},"ARIA-Attribute")," ausgedr\xfcckt werden. Diese Attribute sind HTML-Attribute, die Informationen zu den Eigenschaften und \xfcber den Zustand eines Elements mit einer bestimmten Rolle beinhalten. ",(0,a.yg)("inlineCode",{parentName:"p"},"aria-label")," beinhaltet zum Beispiel einen Namen f\xfcr ein Element, das sonst keinen sichtbaren Namen hat (z.B. ",(0,a.yg)("inlineCode",{parentName:"p"},'<button aria-label="Close">X</button>'),"), ",(0,a.yg)("inlineCode",{parentName:"p"},"aria-labelledby")," um z.B. bei einem Input-Feld anzugeben, in welchem Element sich der Name des Input-Elements befindet:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'    <div id="mailLabelId">E-Mail</div>\n    <input type="text" aria-labelledby="mailLabelId"/>\n')),(0,a.yg)("p",null,"Weiters gibt es Attribute, die den ver\xe4nderlichen Zustand eines Elements beinhalten, z.B. ",(0,a.yg)("inlineCode",{parentName:"p"},"aria-checked")," bei Checkboxen, ",(0,a.yg)("inlineCode",{parentName:"p"},"aria-valuenow")," f\xfcr den aktuellen Wert eines Fortschrittsbalkens etc."),(0,a.yg)("p",null,"Eine umfassende Beschreibung aller Rollen, Zust\xe4nde und Eigenschaften findet man einerseits im ",(0,a.yg)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria/"},"ARIA-Standard"),", eine etwas kompaktere Auflistung der wichtigsten Zust\xe4nde und Eigenschaften gibt es auch bei ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.selfhtml.org/wiki/WAI-ARIA/Zust%C3%A4nde_und_Eigenschaften"},"selfhtml"),"."),(0,a.yg)("h2",{id:"richtlinien-f\xfcr-die-erstellung-barrierefreier-webseiten"},"Richtlinien f\xfcr die Erstellung barrierefreier Webseiten"),(0,a.yg)("p",null,"Angesichts der zahlreichen Rollen, Eigenschaften und Zust\xe4nde sowie deren Beziehungen untereinander mag man als Webentwickler verzweifelt fragen: Brauche ich das wirklich alles? Nicht wirklich, denn meist reicht es, sich an einige wichtige Grundregeln zu halten:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Verwenden Sie semantisch passende Elemente (wie oben gesehen haben viele Elemente schon die richtigen ARIA-Rollen). Nur wenn Sie generische Elemente wie ",(0,a.yg)("inlineCode",{parentName:"li"},"span")," oder ",(0,a.yg)("inlineCode",{parentName:"li"},"div")," verwenden, sollten Sie auch entsprechende Rollen angeben, wo n\xf6tig."),(0,a.yg)("li",{parentName:"ol"},"Verwenden Sie die oben angef\xfchrten Landmark-Roles als Orientierungspunkte. Wenn Sie sich an Regel 1 halten, werden die Landmark-Roles gro\xdfteils ohnehin schon richtig vergeben."),(0,a.yg)("li",{parentName:"ol"},"Strukturieren Sie Ihre Seite richtig: Verwenden Sie richtige Header-Hierarchien (h1, h2, h3, h4, ...)"),(0,a.yg)("li",{parentName:"ol"},"Verwenden Sie Schriftarten, Schriftgr\xf6\xdfen und Farben, die die Lesbarkeit Ihrer Seite erh\xf6hen. Links sollten als solche erkennbar sein, ihr Zustand ebenso."),(0,a.yg)("li",{parentName:"ol"},"Setzen Sie bei interaktiven Elementen (Eingabefeldern, ...) die relevanten ARIA-Attribute, um auch Benutzer*innen mit Einschr\xe4nkungen die Verwendung Ihrer Seite zu erm\xf6glichen"),(0,a.yg)("li",{parentName:"ol"},"Achten Sie bei Multimediainhalten wie Bildern darauf, dass stets ein Alternativtext angegeben ist. Sollen Bilder keinen Inhalt transportieren, geben Sie einen leeren Alternativtext an, lassen ihn aber nicht weg."),(0,a.yg)("li",{parentName:"ol"},"Verwenden Sie JavaScript nicht mehr als n\xf6tig. Zu viele dynamische Inhalte erschweren oft die Verwendung Ihrer Seite f\xfcr Benutzer*innen mit Einschr\xe4nkungen.")),(0,a.yg)("p",null,"Hier sehen Sie ein paar Beispiele, wie man es ",(0,a.yg)("strong",{parentName:"p"},"nicht")," machen soll:"),(0,a.yg)("iframe",{width:"100%",height:"400",src:"//jsfiddle.net/michivo/u64rq5nb/18/embedded/result,html,css,js/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}),(0,a.yg)("p",null,"Meist ist es so, dass es kaum Zusatzaufwand bedeutet, Seiten barrierefrei zu gestalten, es ist aber oft viel Arbeit, Seiten im Nachhinein barrierefrei zu machen. Daher: Machen Sie Ihre Seiten von vornherein barrierefrei!"))}g.isMDXComponent=!0}}]);