(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{147:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return a})),i.d(n,"metadata",(function(){return o})),i.d(n,"rightToc",(function(){return d})),i.d(n,"default",(function(){return b}));var t=i(2),r=i(9),l=(i(0),i(184)),a={id:"css-layout",title:"CSS Layouting",sidebar_label:"Layouts"},o={id:"css-layout",title:"CSS Layouting",description:"In diesem Abschnitt geht des darum, darzustellen, wie Elemente auf einer Webseite positioniert werden k\xf6nnen. Wenn dem Browser \xfcber CSS nicht irgendwie mitgeteilt wird, wie Elemente zu positionieren sind, werden die Elemente anhand diverser Standardregeln positioniert. Das ist der normale Fluss oder Normal flow. Im Beispiel von der Startseite ist sch\xf6n zu sehen, wie dieser normale Fluss aussieht:",source:"@site/docs/css_layout.mdx",permalink:"/webbasics/docs/css-layout",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/css_layout.mdx",sidebar_label:"Layouts",sidebar:"someSidebar",previous:{title:"CSS - Einheiten und Werte",permalink:"/webbasics/docs/css-units"},next:{title:"Clientseitig Daten speichern",permalink:"/webbasics/docs/storage-intro"}},d=[{value:"Flexbox-Modell",id:"flexbox-modell",children:[]},{value:"Grid-Modell",id:"grid-modell",children:[]}],s={rightToc:d};function b(e){var n=e.components,i=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},s,i,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In diesem Abschnitt geht des darum, darzustellen, wie Elemente auf einer Webseite positioniert werden k\xf6nnen. Wenn dem Browser \xfcber CSS nicht irgendwie mitgeteilt wird, wie Elemente zu positionieren sind, werden die Elemente anhand diverser Standardregeln positioniert. Das ist der ",Object(l.b)("strong",{parentName:"p"},"normale Fluss")," oder ",Object(l.b)("strong",{parentName:"p"},"Normal flow"),". Im Beispiel von der Startseite ist sch\xf6n zu sehen, wie dieser normale Fluss aussieht:"),Object(l.b)("iframe",{width:"100%",height:"400",src:"//jsfiddle.net/michivo/9u5vo2nj/1/embedded/result,html/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}),Object(l.b)("p",null,"Die Elemente scheinen in der gerenderten Seite in der selben Reihenfolge auf wie im Code. Teils sind sie nebeneinander angeordnet (wie die Links im ",Object(l.b)("inlineCode",{parentName:"p"},"nav"),"-Bereich), teils untereinander (wie die Listenelemente ",Object(l.b)("inlineCode",{parentName:"p"},"li")," in der ",Object(l.b)("inlineCode",{parentName:"p"},"ul"),"-Liste). Elemente, die nebeneinander aufscheinen, werden als ",Object(l.b)("em",{parentName:"p"},"inline"),"-Elemente bezeichnet, solche die untereinander dargestellt werden, als ",Object(l.b)("em",{parentName:"p"},"block"),"-Elemente. Die wichtigsten CSS-Eigenschaften, mit denen die Positionierung gesteuert werden kann, sind:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"display")," mit den m\xf6glichen Werten ",Object(l.b)("inlineCode",{parentName:"li"},"inline")," (keine Zeilenumbr\xfcche, Darstellung nebeneinander wenn m\xf6glich), ",Object(l.b)("inlineCode",{parentName:"li"},"block")," (Zeilenumbr\xfcche vor und nach dem Element, Darstellung untereinander), ",Object(l.b)("inlineCode",{parentName:"li"},"table")," f\xfcr eine tabellarische Darstellung der Inhalte, ",Object(l.b)("inlineCode",{parentName:"li"},"flex")," f\xfcr eine Anordnung der Inhalte gem\xe4\xdf dem Flexbox-Modell (dazu sp\xe4ter mehr), ",Object(l.b)("inlineCode",{parentName:"li"},"grid")," f\xfcr eine Anordnung gem\xe4\xdf dem Grid-Modell (dazu sp\xe4ter mehr), ",Object(l.b)("inlineCode",{parentName:"li"},"list-item")," f\xfcr die Darstellung von Listenelementen etc."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"float")," um den Textfluss um Elemente zu bestimmen (",Object(l.b)("inlineCode",{parentName:"li"},"left"),", ",Object(l.b)("inlineCode",{parentName:"li"},"right"),", ",Object(l.b)("inlineCode",{parentName:"li"},"inline-start"),", ",Object(l.b)("inlineCode",{parentName:"li"},"inline-end")," und ",Object(l.b)("inlineCode",{parentName:"li"},"none"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"position")," um den Bezugsrahmen f\xfcr die Positionierung festzulegen: ",Object(l.b)("inlineCode",{parentName:"li"},"static")," f\xfcr den normalen Fluss, ",Object(l.b)("inlineCode",{parentName:"li"},"relative")," f\xfcr eine Verschiebung der Position relativ zur eigentlichen Position, ",Object(l.b)("inlineCode",{parentName:"li"},"absolute")," f\xfcr eine absolute Positionierung innerhalb des n\xe4chsten \xfcbergeordneten Elements mit relativer oder absoluter Position und ",Object(l.b)("inlineCode",{parentName:"li"},"fixed")," f\xfcr eine absolute Positionierung innerhalb des Browserfensters. F\xfcr ",Object(l.b)("inlineCode",{parentName:"li"},"relative"),", ",Object(l.b)("inlineCode",{parentName:"li"},"fixed")," und ",Object(l.b)("inlineCode",{parentName:"li"},"absolute")," wird die Position mithilfe der Eigenschaften ",Object(l.b)("inlineCode",{parentName:"li"},"top"),", ",Object(l.b)("inlineCode",{parentName:"li"},"left"),", ",Object(l.b)("inlineCode",{parentName:"li"},"right")," und ",Object(l.b)("inlineCode",{parentName:"li"},"bottom")," definiert.")),Object(l.b)("p",null,"Moderne Webseiten verwenden \xfcblicherweise das Flexbox-Modell und/oder das Grid-Modell. \xc4ltere Versionen des Internet Explorer unterst\xfctzen diese beiden Modelle nur teilweise bzw. gar nicht, moderne Browser jedoch vollst\xe4ndig. Diese beiden Modelle erlauben eine flexible Positionierung, insbesondere auch f\xfcr responsive Seiten."),Object(l.b)("h2",{id:"flexbox-modell"},"Flexbox-Modell"),Object(l.b)("p",null,"Das Flexbox-Modell wird von \xe4lteren Versionen des Internet Explorer nicht unterst\xfctzt, vereinzelt gibt es noch User, die diese Browser verwenden (1-2%). F\xfcr sie wird eine Seite mit Flexbox-Layout nicht korrekt dargestellt."),Object(l.b)("p",null,"Das Flexbox-Modell entstand aus dem Bed\xfcrfnis, CSS-Layouts verwenden zu k\xf6nnen, die auf unterschiedlichen Ausgabeger\xe4ten, Bildschirmgr\xf6\xdfen und Aufl\xf6sungen gleicherma\xdfen gut funktionieren. Das Layout sollte sich also an den Bildschirm anpassen. Mit den in CSS2 verf\xfcgbaren Optionen (wie ",Object(l.b)("inlineCode",{parentName:"p"},"float")," und ",Object(l.b)("inlineCode",{parentName:"p"},"position"),"), Elemente zu positionieren, war das oft nur schwer oder gar nicht m\xf6glich, man brauchte ein flexibleres Modell: Das ",Object(l.b)("strong",{parentName:"p"},"CSS Flexible Box Layout")," oder kurz ",Object(l.b)("strong",{parentName:"p"},"Flexbox"),"."),Object(l.b)("p",null,"Das grundlegende Konzept hinter dem Flexbox-Modell ist es, Elemente innerhalb einer Box nebeneinander oder untereinander anzuordnen. Wie viele Elemente das sind und wie viel Platz ihnen einger\xe4umt wird, h\xe4ngt vom verf\xfcgbaren Platz ab. M\xf6chte man beispielsweise drei Artikel nebeneinander darstellen, sodass jedes Element gleich viel Platz bekommt und gleich hoch ist, kann das mit Flexbox wie folgt umgesetzt werden:"),Object(l.b)("iframe",{width:"100%",height:"400",src:"//jsfiddle.net/michivo/o0vn7cmh/8/embedded/result,html,css/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}),Object(l.b)("p",null,"Das ",Object(l.b)("inlineCode",{parentName:"p"},"section"),"-Element ist in diesem Fall der sogenannte ",Object(l.b)("strong",{parentName:"p"},"Flex-Container")," (definiert durch die CSS-Eigenschaft ",Object(l.b)("inlineCode",{parentName:"p"},"display: flex"),"). Darin befinden sich die ",Object(l.b)("inlineCode",{parentName:"p"},"article"),"-Elemente als sogenannte ",Object(l.b)("strong",{parentName:"p"},"Flex-Items"),"."),Object(l.b)("p",null,"Wenn man das Fenster verkleinert, \xe4ndert sich auch das Layout: Die Artikel werden untereinander statt nebeneinander dargestellt, das geschieht \xfcber eine sogenannte ",Object(l.b)("em",{parentName:"p"},"Media Query")," (dazu sp\xe4ter mehr). Die relevanten CSS-Eigenschaften f\xfcr den Flex-Container sind:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"display: flex")," bzw. ",Object(l.b)("inlineCode",{parentName:"li"},"display: inline flex")," - so wird ein Flex-Container definiert"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"flex-direction")," gibt die Richtung an, in der die Items im Container angeordnet werden: ",Object(l.b)("inlineCode",{parentName:"li"},"row"),", ",Object(l.b)("inlineCode",{parentName:"li"},"row-reverse"),", ",Object(l.b)("inlineCode",{parentName:"li"},"column")," und ",Object(l.b)("inlineCode",{parentName:"li"},"column-reverse")," sind hier die m\xf6glichen Werte"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"flex-wrap")," definiert, ob alle Elemente in einer Zeile bzw. Spalte angeordnet werden sollen (",Object(l.b)("inlineCode",{parentName:"li"},"nowrap"),"), oder ob sie auf mehrere Zeilen bzw. Spalten aufgeteilt werden sollen (",Object(l.b)("inlineCode",{parentName:"li"},"wrap")," bzw. ",Object(l.b)("inlineCode",{parentName:"li"},"wrap-reverse"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"flex-flow")," ist eine CSS-Eigenschaft, mit der man ",Object(l.b)("inlineCode",{parentName:"li"},"flex-direction")," und ",Object(l.b)("inlineCode",{parentName:"li"},"flex-wrap")," in einem angeben kann, also z.B. ",Object(l.b)("inlineCode",{parentName:"li"},"flex-flow: row wrap;")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"justify-content")," definiert, wie die Items im Container in Bezug auf die ",Object(l.b)("inlineCode",{parentName:"li"},"flex-direction")," positioniert werden sollen: ",Object(l.b)("inlineCode",{parentName:"li"},"flex-start"),", ",Object(l.b)("inlineCode",{parentName:"li"},"flex-end"),", ",Object(l.b)("inlineCode",{parentName:"li"},"center"),", ",Object(l.b)("inlineCode",{parentName:"li"},"space-between"),", ",Object(l.b)("inlineCode",{parentName:"li"},"space-around")," und ",Object(l.b)("inlineCode",{parentName:"li"},"space-evenly")," sind die m\xf6glichen Werte"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"align-items")," definiert, wie die Items im Container quer zur ",Object(l.b)("inlineCode",{parentName:"li"},"flex-direction")," positioniert werden soll: ",Object(l.b)("inlineCode",{parentName:"li"},"flex-start"),", ",Object(l.b)("inlineCode",{parentName:"li"},"flex-end"),", ",Object(l.b)("inlineCode",{parentName:"li"},"center"),", ",Object(l.b)("inlineCode",{parentName:"li"},"stretch")," und ",Object(l.b)("inlineCode",{parentName:"li"},"baseline")," sind die m\xf6glichen Werte"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"align-content")," definiert, wie die Item-Zeilen bzw. -Spalten im Container positioniert werden sollen: ",Object(l.b)("inlineCode",{parentName:"li"},"flex-start"),", ",Object(l.b)("inlineCode",{parentName:"li"},"flex-end"),", ",Object(l.b)("inlineCode",{parentName:"li"},"center"),", ",Object(l.b)("inlineCode",{parentName:"li"},"stretch"),", ",Object(l.b)("inlineCode",{parentName:"li"},"space-between")," und ",Object(l.b)("inlineCode",{parentName:"li"},"space-around")," sind die m\xf6glichen Werte.")),Object(l.b)("p",null,"TODO flex-items.."),Object(l.b)("p",null,"Eine sch\xf6ne \xdcbersicht \xfcber die Flexbox-spezifischen CSS-Eigenschaften findet man ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"}),"hier"),"."),Object(l.b)("h2",{id:"grid-modell"},"Grid-Modell"),Object(l.b)("p",null,"Das Grid-Layout wird von \xe4lteren Versionen des Internet Explorer und Edge nicht unterst\xfctzt, nach wie vor verwenden noch einige wenige Benutzer diese Browser (3-5%), f\xfcr sie wird eine Seite mit Grid-Layout also nicht korrekt dargestellt."))}b.isMDXComponent=!0},184:function(e,n,i){"use strict";i.d(n,"a",(function(){return c})),i.d(n,"b",(function(){return u}));var t=i(0),r=i.n(t);function l(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){l(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function d(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},c=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,l=e.originalType,a=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=b(i),p=t,u=c["".concat(a,".").concat(p)]||c[p]||m[p]||l;return i?r.a.createElement(u,o(o({ref:n},s),{},{components:i})):r.a.createElement(u,o({ref:n},s))}));function u(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=i.length,a=new Array(l);a[0]=p;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:t,a[1]=o;for(var s=2;s<l;s++)a[s]=i[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);