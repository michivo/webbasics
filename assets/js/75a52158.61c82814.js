"use strict";(self.webpackChunkweb_basics=self.webpackChunkweb_basics||[]).push([[7997],{5680:(e,n,i)=>{i.d(n,{xA:()=>g,yg:()=>c});var t=i(6540);function l(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){l(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,l=function(e,n){if(null==e)return{};var i,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(l[i]=e[i]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var o=t.createContext({}),d=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},g=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=d(i),u=l,c=p["".concat(o,".").concat(u)]||p[u]||m[u]||r;return i?t.createElement(c,a(a({ref:n},g),{},{components:i})):t.createElement(c,a({ref:n},g))}));function c(e,n){var i=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=i.length,a=new Array(r);a[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:l,a[1]=s;for(var d=2;d<r;d++)a[d]=i[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},3965:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var t=i(8168),l=i(8587),r=(i(6540),i(5680));const a=["components"],s={id:"css-syntax",title:"Die Syntax von CSS",sidebar_label:"Syntax"},o=void 0,d={unversionedId:"css-syntax",id:"css-syntax",title:"Die Syntax von CSS",description:"Deklarationen",source:"@site/docs/css_syntax.mdx",sourceDirName:".",slug:"/css-syntax",permalink:"/webbasics/docs/css-syntax",draft:!1,editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/css_syntax.mdx",tags:[],version:"current",frontMatter:{id:"css-syntax",title:"Die Syntax von CSS",sidebar_label:"Syntax"},sidebar:"someSidebar",previous:{title:"Einf\xfchrung",permalink:"/webbasics/docs/css-intro"},next:{title:"Box-Model",permalink:"/webbasics/docs/css-box-model"}},g={},p=[{value:"Deklarationen",id:"deklarationen",level:2},{value:"Deklarationsbl\xf6cke",id:"deklarationsbl\xf6cke",level:2},{value:"CSS-Regels\xe4tze",id:"css-regels\xe4tze",level:2},{value:"Selektoren",id:"selektoren",level:3},{value:"Universeller Selektor",id:"universeller-selektor",level:4},{value:"Typselektoren",id:"typselektoren",level:4},{value:"Klassenselektoren",id:"klassenselektoren",level:4},{value:"ID-Selektoren",id:"id-selektoren",level:4},{value:"Pseudoklassen",id:"pseudoklassen",level:4},{value:"Pseudoelemente",id:"pseudoelemente",level:4},{value:"Attribut-Selektoren",id:"attribut-selektoren",level:4},{value:"Selektoren kombinieren",id:"selektoren-kombinieren",level:4},{value:"At-Regeln",id:"at-regeln",level:2},{value:"@media",id:"media",level:3},{value:"@supports",id:"supports",level:3},{value:"@layer",id:"layer",level:3},{value:"Externes, internes und inline CSS",id:"externes-internes-und-inline-css",level:2},{value:"Pr\xe4valenz von CSS-Regeln",id:"pr\xe4valenz-von-css-regeln",level:2},{value:"Spezifit\xe4t/Specificity",id:"spezifit\xe4tspecificity",level:3}],m={toc:p},u="wrapper";function c(e){let{components:n}=e,i=(0,l.A)(e,a);return(0,r.yg)(u,(0,t.A)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"deklarationen"},"Deklarationen"),(0,r.yg)("p",null,"CSS-Deklarationen bestehen stets aus einer Eigenschaft (wie zum Beispiel ",(0,r.yg)("inlineCode",{parentName:"p"},"background-color")," f\xfcr die Hintergrundfarbe,\n",(0,r.yg)("inlineCode",{parentName:"p"},"font-family")," f\xfcr die Schriftart oder ",(0,r.yg)("inlineCode",{parentName:"p"},"border-width")," f\xfcr die Rahmenbreite) und einem Wert (z.B. ",(0,r.yg)("inlineCode",{parentName:"p"},"red"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Arial")," oder ",(0,r.yg)("inlineCode",{parentName:"p"},"1px"),")."),(0,r.yg)("p",null,"Eine CSS-Deklaration besteht aus der Eigenschaft, gefolgt von einem Doppelpunkt und dem Wert:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},"background-color: red\n")),(0,r.yg)("p",null,"Es gibt \xfcber 100 CSS-Eigenschaften."),(0,r.yg)("h2",{id:"deklarationsbl\xf6cke"},"Deklarationsbl\xf6cke"),(0,r.yg)("p",null,"Deklarationen werden in Bl\xf6cken zusammengefasst. Ein Block wird von geschwungenen Klammern umgeben, besteht dann aus einer oder mehreren\nDeklarationen, jeweils gefolgt von einem Strichpunkt:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},"{\n    background-color: red;\n    font-family: Helvetica, Arial, Sans-Serif;\n    border-width: 1px;\n}\n")),(0,r.yg)("h2",{id:"css-regels\xe4tze"},"CSS-Regels\xe4tze"),(0,r.yg)("p",null,"Ein CSS-Regelsatz definiert nun, auf welche Elemente ein Deklarationsblock angewendet werden soll. Ein Regelsatz besteht daher aus einem Selektor,\nder festlegt, worauf sich der Regelsatz bezieht, und einem Deklarationsblock, der definiert, welche Regeln angewendet werden sollen."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},"p.important, div.statement {\n    background-color: red;\n    font-family: Helvetica, Arial, Sans-Serif;\n    border-width: 1px;\n}\n")),(0,r.yg)("p",null,"Dieser Block definiert, dass alle ",(0,r.yg)("inlineCode",{parentName:"p"},"p"),"-Elemente, deren ",(0,r.yg)("inlineCode",{parentName:"p"},"class"),"-Attribut den Wert ",(0,r.yg)("inlineCode",{parentName:"p"},"important")," hat rot, mit Schriftart Helvetica (alternativ mit Arial bzw. einer generischen\nserifenlosen Schrift) und einem 1 Pixel breiten Rahmen dargestellt werden sollen. Dieselben Regeln gelten f\xfcr alle ",(0,r.yg)("inlineCode",{parentName:"p"},"div"),"-Elemente,\nderen ",(0,r.yg)("inlineCode",{parentName:"p"},"class"),"-Attribut den Wert ",(0,r.yg)("inlineCode",{parentName:"p"},"statement")," haben."),(0,r.yg)("h3",{id:"selektoren"},"Selektoren"),(0,r.yg)("p",null,"Mit Selektoren kann festgelegt werden, auf welche Elemente CSS-Regels\xe4tze angewendet werden sollen. Wie vorhin beschrieben, wird mit Hilfe dieser Selektoren entschieden,\nwelche Knoten im DOM mit welchen Stilinformationen verkn\xfcpft werden:"),(0,r.yg)("h4",{id:"universeller-selektor"},"Universeller Selektor"),(0,r.yg)("p",null,"Der Universelle Selektor ",(0,r.yg)("inlineCode",{parentName:"p"},"*")," selektiert alle Elemente des Dokuments. z.B.:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},"* {\n    font-family: 'Comic Sans MS'\n}\n")),(0,r.yg)("h4",{id:"typselektoren"},"Typselektoren"),(0,r.yg)("p",null,"Typselektoren selektieren alle Elemente eines gewissen Typs, also z.B. alle ",(0,r.yg)("inlineCode",{parentName:"p"},"h1"),"-Elemente, alle ",(0,r.yg)("inlineCode",{parentName:"p"},"p"),"-Elemente, ... . Sie bestehen aus dem Elementnamen:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},"h1 {\n    font-size: 16pt;\n    font-weight: 200;\n}\n")),(0,r.yg)("h4",{id:"klassenselektoren"},"Klassenselektoren"),(0,r.yg)("p",null,"Klassenselektoren selektieren alle Elemente gem\xe4\xdf dem Wert ihres ",(0,r.yg)("inlineCode",{parentName:"p"},"class"),"-Attributs. Sie bestehen aus einem ",(0,r.yg)("inlineCode",{parentName:"p"},".")," gefolgt vom Klassennamen. Oft werden\nsie auch kombiniert mit Typselektoren, die richtige Syntax daf\xfcr ist ",(0,r.yg)("inlineCode",{parentName:"p"},"elementname.classname"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},".warning {\n    color: orange;\n}\n\ndiv.error {\n    color: red;\n}\n")),(0,r.yg)("h4",{id:"id-selektoren"},"ID-Selektoren"),(0,r.yg)("p",null,"ID-Selektoren selektieren ein Element gem\xe4\xdf dem Wert des ",(0,r.yg)("inlineCode",{parentName:"p"},"id"),"-Attributs. ID-Attribute sollten innerhalb eines Dokuments stets eindeutig sein.\nDiese Selektoren bestehen aus einem ",(0,r.yg)("inlineCode",{parentName:"p"},"#")," gefolgt vom ID-Wert. Auch sie k\xf6nnen mit Elementnamen kombiniert werden, auch wenn das ob der\nEindeutigkeit des ID-Selektors nicht notwendig ist:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},"#title {\n    font-size: larger;\n}\n")),(0,r.yg)("h4",{id:"pseudoklassen"},"Pseudoklassen"),(0,r.yg)("p",null,"Mit Pseudoklassen k\xf6nnen Elemente abh\xe4ngig von ihrem Zustand selektiert werden. Beispielsweise bei Links k\xf6nnen Links, die die",(0,r.yg)("em",{parentName:"p"},"der Benutzer"),"in bereits besucht hat,\nanders dargestellt werden als solche, die noch nicht besucht wurden:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},"a:visited {\n    color: slategray;\n}\n")),(0,r.yg)("p",null,"Eine ausf\xfchrliche Dokumentation der Pseudoklassen finden Sie bei ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"},"Mozilla"),"."),(0,r.yg)("h4",{id:"pseudoelemente"},"Pseudoelemente"),(0,r.yg)("p",null,"Mit Pseudoelementen k\xf6nnen gewisse Teile einzelner Elemente selektiert werden, z.B. die erste Zeile oder ein fiktives Element vor oder nach einem Element."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},"a::after {\n    content: '>';\n}\n\np::first-line {\n    padding-left: 2rem;\n}\n")),(0,r.yg)("p",null,"Eine ausf\xfchrliche Dokumentation der Pseudoelemente finden Sie bei ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements"},"Mozilla"),"."),(0,r.yg)("h4",{id:"attribut-selektoren"},"Attribut-Selektoren"),(0,r.yg)("p",null,"Mit Attribut-Selektoren k\xf6nnen Elemente abh\xe4ngig von gewissen Attributwerten selektiert werden, so z.B.:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},'/* selektiert alle a-Elemente mit einem title-Attribut */\na[title] {\n    background-color: gray;\n}\n\n/* selektiert alle a-Elemente, die auf www.campus02.at verlinken */ \na[title="https://www.campus02.at"] {\n    font-size: 2rem;\n}\n')),(0,r.yg)("p",null,"Eine ausf\xfchrliche Dokumentation der Attribut-Selektoren finden Sie bei ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"},"Mozilla"),"."),(0,r.yg)("h4",{id:"selektoren-kombinieren"},"Selektoren kombinieren"),(0,r.yg)("p",null,"Mehrere Selektoren k\xf6nnen auch kombiniert werden:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Selektoren k\xf6nnen gruppiert werden, indem sie durch Beistriche getrennt werden, z.B.: ",(0,r.yg)("inlineCode",{parentName:"li"},"div, span.warning, p { ... }")),(0,r.yg)("li",{parentName:"ul"},"Kind-Kombinationen k\xf6nnen verwendet werden, wenn Regeln auf direkte Kinder anderer Elemente angewendet werden sollen. Sollen z.B. alle ",(0,r.yg)("inlineCode",{parentName:"li"},"li"),"-Elemente in ",(0,r.yg)("inlineCode",{parentName:"li"},"ul"),"-Elementen selektiert werden, dann erfolgt dies mithilfe eines ",(0,r.yg)("inlineCode",{parentName:"li"},">"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"ul > li")),(0,r.yg)("li",{parentName:"ul"},"Nachkommen-Kombinationen k\xf6nnen verwendet werden, wenn Regeln auf alle ",(0,r.yg)("em",{parentName:"li"},"Nachkommen")," (also Kinder, deren Kinder & Kindeskinder, ...) angewendet werden sollen. Dazu gibt man einfach ein Leerzeichen zwischen den Selektoren an: ",(0,r.yg)("inlineCode",{parentName:"li"},"nav a")," selektiert alle ",(0,r.yg)("inlineCode",{parentName:"li"},"a"),"-Elemente, die sich irgendwo in einem ",(0,r.yg)("inlineCode",{parentName:"li"},"nav"),"-Element befinden"),(0,r.yg)("li",{parentName:"ul"},"Geschwister-Kombinationen k\xf6nnen verwendet werden, wenn Regeln auf ",(0,r.yg)("em",{parentName:"li"},"nachfolgende Geschwister")," angewendet werden sollen (also Elemente, die dieselben Eltern im DOM-Baum haben). Der Operator f\xfcr diese Kombinationen ist die ",(0,r.yg)("inlineCode",{parentName:"li"},"~"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"p ~ span")," selektiert alle span-Elemente, die auf ein p-Element folgen und die gleichen Eltern haben."),(0,r.yg)("li",{parentName:"ul"},"Nachbars-Geschwister-Kombinationen k\xf6nnen verwendet werden, wenn Regeln auf ",(0,r.yg)("em",{parentName:"li"},"direkt nachfolgende Geschwister")," angewendet werden sollen, der Operator daf\xfcr ist das ",(0,r.yg)("inlineCode",{parentName:"li"},"+"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"h2 + p")," selektiert alle p-Elemente, die direkt auf ein h2-Element folgen.")),(0,r.yg)("h2",{id:"at-regeln"},"At-Regeln"),(0,r.yg)("p",null,"Zus\xe4tzlich zu den CSS-Regels\xe4tzen gibt es noch At-Regeln, die wichtigsten sind:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@charset")," definiert den verwendeten Zeichensatz, z.B. ",(0,r.yg)("inlineCode",{parentName:"li"},'@charset "utf-8;"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@import")," zum Importieren externer Stylesheets, z.B. ",(0,r.yg)("inlineCode",{parentName:"li"},'@import "custom.css";')," oder ",(0,r.yg)("inlineCode",{parentName:"li"},"import url('landscape.css') screen and (orientation:landscape);")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@font-face")," zum Importieren von Schriftarten, z.B. ",(0,r.yg)("inlineCode",{parentName:"li"},'@font-face { font-family: MyHelvetica; src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"), url(MgOpenModernaBold.ttf); font-weight: bold; }')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@keyframes")," f\xfcr Animationen, die im Rahmen dieses Skriptums nicht behandelt werden. Mehr zu Animationen finden Sie u.a. bei ",(0,r.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations"},"Mozilla")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@page")," um spezielle Regeln f\xfcr Ausdrucke zu definieren, z.B. ",(0,r.yg)("inlineCode",{parentName:"li"},"@page :first { margin: 2cm; }"))),(0,r.yg)("p",null,"Weiters gibt es die etwas komplexeren Regeln ",(0,r.yg)("inlineCode",{parentName:"p"},"@media")," und ",(0,r.yg)("inlineCode",{parentName:"p"},"@supports"),":"),(0,r.yg)("h3",{id:"media"},"@media"),(0,r.yg)("p",null,"Mit der ",(0,r.yg)("inlineCode",{parentName:"p"},"@media"),"-Regel k\xf6nnen ausgabemedienabh\xe4ngige Bedingungen definiert werden. Nur, wenn diese Bedingungen erf\xfcllt werden, werden auch die zugeh\xf6rigen Regels\xe4tze angewendet.\nSoll z.B. die Zeilenh\xf6he gr\xf6\xdfer gew\xe4hlt werden, wenn ein Benutzer eine Seite auf einem Bildschirm mit \xfcber 1200px Breite ansieht, kann das so definiert werden:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},"@media (width >= 1200px) {\n    body { line-height: 1.4; }\n}\n\n@media (800px <= width < 1200px) {\n    body { line-height: 1.2; }\n}\n")),(0,r.yg)("p",null,"Eine umfassende Beschreibung der media-Queries gibt es bei ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media"},"Mozilla"),"."),(0,r.yg)("h3",{id:"supports"},"@supports"),(0,r.yg)("p",null,"Mit der ",(0,r.yg)("inlineCode",{parentName:"p"},"@supports"),"-Regel k\xf6nnen Regels\xe4tze abh\xe4ngig von vom Browser unterst\xfctzten Features angewendet werden. M\xf6chte man zum Beispiel\nin Browsern, die das unterst\xfctzen, ein Grid-Layout verwenden, in allen anderen ein Flex-Layout (auf diese Art von Layouts werden wir\nnoch eingehen), kann das so formuliert werden:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},".layout {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n@supports (display: grid) {\n  .layout {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n    grid-gap: 2rem;\n  }\n}\n")),(0,r.yg)("p",null,"Nachdem alle modernen Browser ein weitgehend gleiches Set von Features unterst\xfctzen, hat die @supports-Regel eine untergeordnete\nBedeutung.\nEine umfassende Beschreibung der supports-Queries gibt es bei ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@supports"},"Mozilla"),"."),(0,r.yg)("h3",{id:"layer"},"@layer"),(0,r.yg)("p",null,"Anfang 2022 wurde CSS um Layers erweitert, die eine flexiblere Definition von CSS-Regeln und deren Pr\xe4valenz erlauben. Mit dem Statement"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},"@layer base, specific;\n")),(0,r.yg)("p",null,"kann definiert werden, dass es zwei Layer namens ",(0,r.yg)("em",{parentName:"p"},"base")," bzw. ",(0,r.yg)("em",{parentName:"p"},"specific")," gibt, wobei Regeln in einem sp\xe4ter genannten Layer immer Vorrang gegen\xfcber Regeln in den Layern davor haben. So h\xe4tte z.B. bei folgenden CSS-Regeln"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},"@layer base, specific;\n\n@layer base {\n  ul > li {\n    font-weight: 900;\n  }\n}\n\n@layer specific {\n  li {\n    font-weight: 100;\n  }\n}\n")),(0,r.yg)("p",null,"jedes ",(0,r.yg)("inlineCode",{parentName:"p"},"<li>"),"-Element nur ein ",(0,r.yg)("inlineCode",{parentName:"p"},"font-weight")," von 100, weil die Regel aus dem Layer ",(0,r.yg)("em",{parentName:"p"},"specific")," jene aus dem Layer ",(0,r.yg)("inlineCode",{parentName:"p"},"base")," \xfcberschreibt."),(0,r.yg)("h2",{id:"externes-internes-und-inline-css"},"Externes, internes und inline CSS"),(0,r.yg)("p",null,"Es gibt drei unterschiedliche M\xf6glichkeiten, CSS-Regeln zu definieren:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Externe CSS-Regeln werden in einer separaten CSS-Datei definiert. Diese Dateien werden im Header mit dem ",(0,r.yg)("inlineCode",{parentName:"li"},"link"),"-Element eingebunden"),(0,r.yg)("li",{parentName:"ul"},"Interne CSS-Regeln werden direkt im HTML-Head mit dem ",(0,r.yg)("inlineCode",{parentName:"li"},"style"),"-Tag angegeben"),(0,r.yg)("li",{parentName:"ul"},"Inline-CSS-Regeln, die bei beliebigen HTML-Elementen im Body im ",(0,r.yg)("inlineCode",{parentName:"li"},"style"),"-Attribut angegeben werden. Inline-CSS-Regeln enthalten Deklarationsbl\xf6cke ohne die geschwungenen Klammern")),(0,r.yg)("p",null,"Ist f\xfcr ein Element ",(0,r.yg)("em",{parentName:"p"},"keine")," CSS-Regel definiert, verwendet der Browser Default-Werte, daher sind z.B. \xdcberschriften gro\xdf und Links blau,\nauch wenn man das nirgends definiert hat. Diese Default-Werte unterscheiden sich teilweise je nach Browser, daher ist es nicht un\xfcblich,\neinen ",(0,r.yg)("strong",{parentName:"p"},"CSS-Reset")," oder eine ",(0,r.yg)("strong",{parentName:"p"},"Normalisierung")," durchzuf\xfchren. Dabei werden zahlreiche CSS-Regeln auf einen browserunabh\xe4ngigen, moderner anmutenden\nStandardwert gesetzt. Das geschieht, indem man z.B. ein ",(0,r.yg)("a",{parentName:"p",href:"https://meyerweb.com/eric/tools/css/reset/"},"reset.css von Eric Meyer")," oder\n",(0,r.yg)("a",{parentName:"p",href:"https://necolas.github.io/normalize.css/"},"Normalize.css")," als erstes Stylesheet einbindet."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n    <head>\n        <link rel="stylesheet" href="styles.css"> \x3c!-- externes Stylesheet styles.css --\x3e\n         \n        \x3c!-- hier kommt internes CSS --\x3e\n        <style>\n            p {\n                font-weight: bold;\n            }\n        </style>\n    </head>\n    <body>\n        <h1>Hallo Welt</h1>\n        <p>Ein Absatz ohne gesonderte Stilinformationen.</p>\n        <p style="font-style: italic;">Das ist inline-CSS!</p>\n    </body>\n</html>\n')),(0,r.yg)("h2",{id:"pr\xe4valenz-von-css-regeln"},"Pr\xe4valenz von CSS-Regeln"),(0,r.yg)("p",null,"Wie gerade beschrieben gibt es mehrere M\xf6glichkeiten, CSS-Regeln zu definieren. Welche CSS-Regeln haben aber nun Vorrang? Angenommen, Sie haben folgende HTML-Datei:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n    <head>\n        <link rel="stylesheet" href="styles.css"> \x3c!-- externes CSS enth\xe4lt Regel h1 { color: red; } --\x3e\n        <style>\n            h1 {\n                color: blue;\n            }\n        </style>\n    </head>\n    <body>\n        <h1 style="color: green;">Hallo Welt</h1>\n    </body>\n</html>\n')),(0,r.yg)("p",null,'Welche Farbe hat dann die \xdcberschrift "Hallo Welt"? In diesem Fall hat die Inline-Regel Vorrang, die \xdcberschrift wird also gr\xfcn sein.\nOhne die Inline-Regel w\xe4re die \xdcberschrift blau, denn die sp\xe4ter im Header definierte Regel hat Vorrang gegen\xfcber davor definierter Regeln.\nDie Vorrangregeln f\xfcr CSS-Regeln sind also: '),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Inline-Regeln"),(0,r.yg)("li",{parentName:"ol"},"Im Header definierte Regeln, wobei sp\xe4ter im Header angef\xfchrte Regeln Vorrang gegen\xfcber fr\xfcher angef\xfchrten Regeln haben und ",(0,r.yg)("em",{parentName:"li"},"spezifische")," Regeln Vorrang haben gegen\xfcber allgemeinen Regeln."),(0,r.yg)("li",{parentName:"ol"},"Browser-Standard-Werte")),(0,r.yg)("h3",{id:"spezifit\xe4tspecificity"},"Spezifit\xe4t/Specificity"),(0,r.yg)("p",null,"Wenn es widerspr\xfcchliche CSS-Regeln gibt (z.B.: ",(0,r.yg)("inlineCode",{parentName:"p"},"li { font-weight: 900 }")," und ",(0,r.yg)("inlineCode",{parentName:"p"},"ul li { font-weight: 100 }"),"), so gibt es in CSS die sogenannte Spezifit\xe4t von Regeln, die bestimmt, welche Regeln vorrangig behandelt werden:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"der *-Selektor (der universelle Selektor) hat die geringste Spezifit\xe4t"),(0,r.yg)("li",{parentName:"ul"},"Elementselektoren, wie z.B. ",(0,r.yg)("inlineCode",{parentName:"li"},"div")," oder ",(0,r.yg)("inlineCode",{parentName:"li"},"li > ul")," haben die n\xe4chsh\xf6here Spezifit\xe4t"),(0,r.yg)("li",{parentName:"ul"},"(Pseudo)Klassen- und Attributselektoren (",(0,r.yg)("inlineCode",{parentName:"li"},"li.someClass"),", ",(0,r.yg)("inlineCode",{parentName:"li"},'input[type="text"]'),", ...) haben die n\xe4chsth\xf6here Spezifit\xe4t"),(0,r.yg)("li",{parentName:"ul"},"ID-Selektoren (",(0,r.yg)("inlineCode",{parentName:"li"},"#title"),") haben die n\xe4chsth\xf6here Spezifit\xe4t"),(0,r.yg)("li",{parentName:"ul"},"Inline-Styles (",(0,r.yg)("inlineCode",{parentName:"li"},'<a style="..."'),") haben die h\xf6chste Priorit\xe4t, k\xf6nnen jedoch mit")),(0,r.yg)("p",null,"Zum Aushebeln dieses Regelwerks gibt es die M\xf6glichkeit, CSS-Regeln mit ",(0,r.yg)("inlineCode",{parentName:"p"},"!important")," zu markieren. Solche Regeln haben immer Vorrang. ",(0,r.yg)("inlineCode",{parentName:"p"},"!important")," sollte aber\nsehr sparsam eingesetzt werden, spezifischere Regeln und eine nachvollziehbare Reihenfolge der Styles sind stets zu bevorzugen:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css"},"div.warning {\n  background-color: red !important;\n}\n")))}c.isMDXComponent=!0}}]);