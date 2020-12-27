(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{144:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return l})),i.d(n,"metadata",(function(){return b})),i.d(n,"rightToc",(function(){return s})),i.d(n,"default",(function(){return o}));var t=i(2),r=i(9),a=(i(0),i(184)),l={id:"css-units",title:"CSS - Einheiten und Werte",sidebar_label:"Einheiten"},b={id:"css-units",title:"CSS - Einheiten und Werte",description:"Ein wesentlicher Bestandteil von CSS ist ja, wie Gr\xf6\xdfen, Abst\xe4nde oder die Dicke von Linien angegeben werden. Diese Werte m\xfcssen",source:"@site/docs/css_units.mdx",permalink:"/webbasics/docs/css-units",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/css_units.mdx",sidebar_label:"Einheiten",sidebar:"someSidebar",previous:{title:"Das CSS Box-Model",permalink:"/webbasics/docs/css-box-model"},next:{title:"CSS Layouting",permalink:"/webbasics/docs/css-layout"}},s=[{value:"Absolute L\xe4ngeneinheiten",id:"absolute-l\xe4ngeneinheiten",children:[]},{value:"Relative L\xe4ngenangaben",id:"relative-l\xe4ngenangaben",children:[]},{value:"Farben",id:"farben",children:[]}],c={rightToc:s};function o(e){var n=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},c,i,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Ein wesentlicher Bestandteil von CSS ist ja, wie Gr\xf6\xdfen, Abst\xe4nde oder die Dicke von Linien angegeben werden. Diese Werte m\xfcssen\nin entsprechenden Einheiten angegeben werden. W\xe4hrend das auf den ersten Blick trivial erscheinen mag, ist es doch oft eine\nHerausforderung. So ist es ja wichtig, dass eine Seite auf Bildschirmen unterschiedlicher Aufl\xf6sung in diversen Zoomeinstellungen\nimmer gut aussieht und das Layout nicht zusammenbricht. Alle L\xe4ngenangaben (au\xdfer 0) m\xfcssen in CSS immer aus Zahlenwert und Einheit\n(ohne Leerzeichen dazwischen) bestehen, also z.B. ",Object(a.b)("inlineCode",{parentName:"p"},"16px"),", ",Object(a.b)("inlineCode",{parentName:"p"},"25mm"),", ",Object(a.b)("inlineCode",{parentName:"p"},"3.5Q")," oder ",Object(a.b)("inlineCode",{parentName:"p"},"2.50rem"),"."),Object(a.b)("p",null,"Es gibt absolute L\xe4ngeneinheiten (wie cm, mm, Pixel, ...) und relative Einheiten:"),Object(a.b)("h2",{id:"absolute-l\xe4ngeneinheiten"},"Absolute L\xe4ngeneinheiten"),Object(a.b)("p",null,'Absolute L\xe4ngeneinheiten beziehen sich nicht auf irgendein Element (wie z.B. die Fensterbreite), sondern sind, wie der Name schon sagt,\nabsolut. Diese "Absolutheit" hat aber nur insofern G\xfcltigkeit, als dabei nat\xfcrlich auch von einer gewissen Bildschirmaufl\xf6sung und\neinem gewissen Zoomlevel ausgegangen wird. 1px (=1 Pixel) ist also nicht immer einen physikalischen Pixel breit, sondern sollte\nauf jedem Bildschirm bei einer Zoomeinstellung von 100% tats\xe4chlich 0.264583mm gro\xdf sein. Abh\xe4ngig vom Zoom-Level wird sich diese Gr\xf6\xdfe\nauch \xe4ndern.'),Object(a.b)("p",null,"Die absoluten L\xe4ngeneinheiten in CSS sind:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"cm")," (Zentimeter)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"mm")," (Millimeter)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Q")," (Viertelmillimeter)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"in")," (Zoll/Inches, 1in=2.54cm)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pc")," (Picas, 1pc=1/6 Zoll)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pt")," (Points, 1pt=1/72 Zoll)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"px")," (Pixel, 1px=1/96 Zoll)")),Object(a.b)("p",null,"Absolute L\xe4ngenangaben werden haupts\xe4chlich f\xfcr Ausdrucke verwendet, einzig ",Object(a.b)("inlineCode",{parentName:"p"},"px")," und (f\xfcr Schriftart) ",Object(a.b)("inlineCode",{parentName:"p"},"pt")," werden auch f\xfcr die\nBildschirmausgabe verwendet. "),Object(a.b)("h2",{id:"relative-l\xe4ngenangaben"},"Relative L\xe4ngenangaben"),Object(a.b)("p",null,'Relative Einheiten beziehen sich immer auf "irgendetwas anderes". Dieses "andere" kann eine typographische Gr\xf6\xdfe oder eine\nGr\xf6\xdfe des Anzeigefensters sein. Die relativen Einheiten sind:'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"em")," - Die Schriftgr\xf6\xdfe des Elternelements, wenn es sich um typographische Angaben (wie font-size) handelt, sonst die Schriftgr\xf6\xdfe des Elements selbst"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ex")," - Die H\xf6he des Buchstaben ",Object(a.b)("strong",{parentName:"li"},"x")," in der Schriftart des Elements"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ch")," - Die Breite des Zeichens ",Object(a.b)("strong",{parentName:"li"},"0")," in der Schriftart des Elements"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"rem")," - Die Schriftgr\xf6\xdfe des Wurzelelements (also des ",Object(a.b)("inlineCode",{parentName:"li"},"html"),"-Elements)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"lh")," - Die Zeilenh\xf6he des Elements"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"vw")," - 1% der Breite des Anzeigefensters"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"vh")," - 1% der H\xf6he des Anzeigefensters"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"vmin")," - 1% der kleineren Dimension des Anzeigefensters"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"vmax")," - 1% der gr\xf6\xdferen Dimension des Anzeigefensters"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"%")," - Relative Angabe in Relation zu etwas anderem (bei H\xf6hen und Breiten die H\xf6he bzw. Breite des Elternelements, bei Schriftarten die Schriftgr\xf6\xdfe des Elternelements)")),Object(a.b)("p",null,"Am g\xe4ngigsten sind hier die Angaben ",Object(a.b)("inlineCode",{parentName:"p"},"rem"),", ",Object(a.b)("inlineCode",{parentName:"p"},"%")," und ",Object(a.b)("inlineCode",{parentName:"p"},"em"),". Insbesondere ",Object(a.b)("inlineCode",{parentName:"p"},"rem")," wird bei vielen modernen Webseiten f\xfcr (fast) alle L\xe4ngenangaben verwendet."),Object(a.b)("h2",{id:"farben"},"Farben"),Object(a.b)("p",null,"Neben Gr\xf6\xdfenangaben sind auch Farben ein wichtiger Faktor beim Layout und Design von Webseiten. Farben k\xf6nnen wie auch L\xe4ngen auf unterschiedliche Arten angegeben werden:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"als Hexadezimalwerte mit oder ohne Alpha-Channel f\xfcr Transparenz. Die ersten zwei Stellen geben dabei den Rotwert, die n\xe4chsten zwei Stellen den Gr\xfcnwert, die folgenden Stellen den Blauwert und (falls vorhanden) die abschlie\xdfenden zwei Stellen den Alpha-/Transparenzwert als Hexadezimalzahlen im Bereich von 0-255 bzw. 00-FF an. ",Object(a.b)("inlineCode",{parentName:"li"},"#FF0000")," ist also rot, ",Object(a.b)("inlineCode",{parentName:"li"},"#00FF00")," gr\xfcn, ",Object(a.b)("inlineCode",{parentName:"li"},"#FF00FF80")," ein halbtransparentes lila, ..."),Object(a.b)("li",{parentName:"ul"},"RGB und RGBA-Werte mit der Funktion ",Object(a.b)("inlineCode",{parentName:"li"},"rgb()")," bzw. ",Object(a.b)("inlineCode",{parentName:"li"},"rgba()"),". Diesen Funktionen werden jeweils die Rot-, Blau- und Gr\xfcnwerte (0-255), sowie bei ",Object(a.b)("inlineCode",{parentName:"li"},"rgba()")," auch der Alpha-Wert (0.0-1.0) \xfcbergeben. ",Object(a.b)("inlineCode",{parentName:"li"},"rgb(255, 255, 0)")," w\xe4re also rot, ",Object(a.b)("inlineCode",{parentName:"li"},"rgb(0, 255, 0)")," gr\xfcn und ",Object(a.b)("inlineCode",{parentName:"li"},"rgba(255, 0, 255, 0.5)")," ein halbtransparentes lila."),Object(a.b)("li",{parentName:"ul"},"HSL und HSLA-Werte mit der Funktion ",Object(a.b)("inlineCode",{parentName:"li"},"hsl()")," bzw. ",Object(a.b)("inlineCode",{parentName:"li"},"hsla()"),". Diesen Funktionen werden die Werte f\xfcr Hue (0-360), Saturation (0%-100%) und Lightness (0%-100%), sowie bei ",Object(a.b)("inlineCode",{parentName:"li"},"hsla()")," auch der Alpha-Wert (0.0-1.0) \xfcbergeben. ",Object(a.b)("inlineCode",{parentName:"li"},"hsl(0, 100%, 50%)")," w\xe4re also rot, ",Object(a.b)("inlineCode",{parentName:"li"},"hsl(120, 100%, 50%)")," gr\xfcn und ",Object(a.b)("inlineCode",{parentName:"li"},"hsla(300, 100%, 50%, 0.5)")," ein halbtransparentes lila."),Object(a.b)("li",{parentName:"ul"},"Schl\xfcsselw\xf6rter wie ",Object(a.b)("inlineCode",{parentName:"li"},"black"),", ",Object(a.b)("inlineCode",{parentName:"li"},"red"),", ",Object(a.b)("inlineCode",{parentName:"li"},"green"),", ",Object(a.b)("inlineCode",{parentName:"li"},"slategray"),", ",Object(a.b)("inlineCode",{parentName:"li"},"blanchedalmond"),", etc. - eine vollst\xe4nde Liste von Farben finden Sie u.a. bei ",Object(a.b)("a",Object(t.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"}),"Mozilla"))),Object(a.b)("p",null,"Es gibt freilich noch zahlreiche weitere Wertangaben, so zum Beispiel f\xfcr Winkel, Zeiten oder URLs, Farben und L\xe4ngen sind aber f\xfcr den Rahmen dieses Skriptums ausreichend."))}o.isMDXComponent=!0},184:function(e,n,i){"use strict";i.d(n,"a",(function(){return d})),i.d(n,"b",(function(){return p}));var t=i(0),r=i.n(t);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function b(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=r.a.createContext({}),o=function(e){var n=r.a.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):b(b({},n),e)),i},d=function(e){var n=o(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(i),u=t,p=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return i?r.a.createElement(p,b(b({ref:n},c),{},{components:i})):r.a.createElement(p,b({ref:n},c))}));function p(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=i.length,l=new Array(a);l[0]=u;var b={};for(var s in n)hasOwnProperty.call(n,s)&&(b[s]=n[s]);b.originalType=e,b.mdxType="string"==typeof e?e:t,l[1]=b;for(var c=2;c<a;c++)l[c]=i[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"}}]);