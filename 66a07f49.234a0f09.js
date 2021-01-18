(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{154:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),i=t(9),a=(t(0),t(187)),o={id:"dom-tree",title:"Der DOM-Baum",sidebar_label:"DOM-Baum"},c={id:"dom-tree",title:"Der DOM-Baum",description:"Hier noch einmal die Darstellung des DOM-Baums einer einfachen Webseite:",source:"@site/docs/dom_tree.md",permalink:"/webbasics/docs/dom-tree",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/dom_tree.md",sidebar_label:"DOM-Baum",sidebar:"someSidebar",previous:{title:"Das Document Object Model",permalink:"/webbasics/docs/dom-intro"},next:{title:"Cascading Style Sheets",permalink:"/webbasics/docs/css-intro"}},l=[{value:"Knotentypen",id:"knotentypen",children:[]}],b={rightToc:l};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hier noch einmal die Darstellung des DOM-Baums einer einfachen Webseite:\n(Quelle: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://commons.wikimedia.org/wiki/File:DOM-model.svg"}),"https://commons.wikimedia.org/wiki/File:DOM-model.svg"),", Autor: Birger Eriksson):\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/580px-DOM-model.svg.png",alt:"Beispiel-DOM einer Webseite"}))),Object(a.b)("p",null,"Der DOM-Baum ist eine baumartige Repr\xe4sentation eines HTML-Dokuments. Die Wurzel des Baums ist\nder ",Object(a.b)("strong",{parentName:"p"},"Dokumentknoten"),". Der Dokumentknoten hat ein Kind, den ",Object(a.b)("strong",{parentName:"p"},"Elementknoten")," des HTML-Elements, der wiederum\nzwei Kinder hat: Die Elementknoten f\xfcr Body und Head."),Object(a.b)("h2",{id:"knotentypen"},"Knotentypen"),Object(a.b)("p",null,"Wie in der Abbildung zu sehen, gibt es unterschiedliche Knotentypen im DOM-Baum:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Den ",Object(a.b)("strong",{parentName:"li"},"Dokumentknoten")," als Wurzels des DOM-Baums"),Object(a.b)("li",{parentName:"ul"},"Den ",Object(a.b)("strong",{parentName:"li"},"Dokumenttypknoten"),", der in der Abbildung oben nicht dargestellt wird (f\xfcr die ",Object(a.b)("inlineCode",{parentName:"li"},"DOCTYPE"),"-Angabe)"),Object(a.b)("li",{parentName:"ul"},"F\xfcr jedes Element gibt es einen zugeh\xf6rigen ",Object(a.b)("strong",{parentName:"li"},"Elementknoten"),". Ein Elementknoten kann, je nach Element, ein oder mehrere weitere Elementknoten, Attributknoten oder Textknoten als Kinder haben"),Object(a.b)("li",{parentName:"ul"},"F\xfcr jedes Attribut gibt es einen ",Object(a.b)("strong",{parentName:"li"},"Attributknoten"),". Attributknoten k\xf6nnen keine weiteren Kinder haben."),Object(a.b)("li",{parentName:"ul"},"Textinhalte werden in ",Object(a.b)("strong",{parentName:"li"},"Textknoten")," abgelegt. Auch Textknoten k\xf6nnen keine weiteren Kinder haben."),Object(a.b)("li",{parentName:"ul"},"F\xfcr Kommentare gibt es ",Object(a.b)("strong",{parentName:"li"},"Kommentarknoten"),", die klarerweise auch keine Kinder haben")),Object(a.b)("p",null,"Auf ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://bioub.github.io/dom-visualizer/"}),"http://bioub.github.io/dom-visualizer/")," gibt es ein Tool, das DOM-B\xe4ume einfacher Webseiten \xfcbersichtlich darstellt. Aber Vorsicht: DOM-B\xe4ume werden schnell sehr gro\xdf und komplex, eine Visualisierung dieser Art bietet sich wirklich nur bei sehr kleinen, einfachen Seiten an."))}s.isMDXComponent=!0},187:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),s=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(t),p=r,d=u["".concat(o,".").concat(p)]||u[p]||m[p]||a;return t?i.a.createElement(d,c(c({ref:n},b),{},{components:t})):i.a.createElement(d,c({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<a;b++)o[b]=t[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);