"use strict";(self.webpackChunkweb_basics=self.webpackChunkweb_basics||[]).push([[8190],{5680:(e,n,t)=>{t.d(n,{xA:()=>o,yg:()=>f});var l=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=l.createContext({}),m=function(e){var n=l.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},o=function(e){var n=m(e.components);return l.createElement(d.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},h=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=m(t),h=r,f=u["".concat(d,".").concat(h)]||u[h]||c[h]||i;return t?l.createElement(f,a(a({ref:n},o),{},{components:t})):l.createElement(f,a({ref:n},o))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=h;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var m=2;m<i;m++)a[m]=t[m];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var l=t(8168),r=t(8587),i=(t(6540),t(5680));const a=["components"],s={id:"html-elements",title:"HTML - Elemente",sidebar_label:"Elemente"},d=void 0,m={unversionedId:"html-elements",id:"html-elements",title:"HTML - Elemente",description:"Auf https://developer.mozilla.org/en-US/docs/Web/HTML/Element sind die g\xe4ngigsten HTML-Elemente",source:"@site/docs/html_elements.mdx",sourceDirName:".",slug:"/html-elements",permalink:"/webbasics/docs/html-elements",draft:!1,editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/html_elements.mdx",tags:[],version:"current",frontMatter:{id:"html-elements",title:"HTML - Elemente",sidebar_label:"Elemente"},sidebar:"someSidebar",previous:{title:"HTML",permalink:"/webbasics/docs/html-intro"},next:{title:"Forms",permalink:"/webbasics/docs/html-forms"}},o={},u=[{value:"Elemente zum Organisieren einer Webseite",id:"elemente-zum-organisieren-einer-webseite",level:2},{value:"Elemente zum Strukturieren von Textinhalten",id:"elemente-zum-strukturieren-von-textinhalten",level:2},{value:"Elemente f\xfcr die Semantik von Inline-Textelementen",id:"elemente-f\xfcr-die-semantik-von-inline-textelementen",level:2},{value:"Elemente f\xfcr Multimediainhalte",id:"elemente-f\xfcr-multimediainhalte",level:2},{value:"Elemente f\xfcr eingebettete Inhalte",id:"elemente-f\xfcr-eingebettete-inhalte",level:2},{value:"Scripting",id:"scripting",level:2},{value:"Elemente f\xfcr Tabellen",id:"elemente-f\xfcr-tabellen",level:2},{value:"Interaktive Elemente",id:"interaktive-elemente",level:2},{value:"WebComponents - Templates und Slots",id:"webcomponents---templates-und-slots",level:2}],c={toc:u},h="wrapper";function f(e){let{components:n}=e,t=(0,r.A)(e,a);return(0,i.yg)(h,(0,l.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Auf ",(0,i.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Element")," sind die g\xe4ngigsten HTML-Elemente\n\xfcbersichtlich dargestellt und dokumentiert. In diesem Skriptum gibt es Beispiele f\xfcr die bei Mozilla angef\xfchrten\nElemente. "),(0,i.yg)("p",null,"Die Beispielseiten sind optisch noch nicht wirklich ansprechend. Klarerweise w\xfcrden Sie, wenn Sie\nwirklich eine Webseite bauen, Styleinformationen f\xfcr die entsprechenden Elemente hinterlegen."),(0,i.yg)("h2",{id:"elemente-zum-organisieren-einer-webseite"},"Elemente zum Organisieren einer Webseite"),(0,i.yg)("iframe",{width:"100%",height:"400",src:"//jsfiddle.net/michivo/Lzkuws4p/10/embedded/html,result/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}),(0,i.yg)("h2",{id:"elemente-zum-strukturieren-von-textinhalten"},"Elemente zum Strukturieren von Textinhalten"),(0,i.yg)("iframe",{width:"100%",height:"400",src:"//jsfiddle.net/michivo/w25fsdyp/40/embedded/html,result/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}),(0,i.yg)("h2",{id:"elemente-f\xfcr-die-semantik-von-inline-textelementen"},"Elemente f\xfcr die Semantik von Inline-Textelementen"),(0,i.yg)("p",null,"W\xe4hrend die zuvor angef\xfchrten Elemente dazu da sind, Textinhalte zu strukturieren,\nsind die nun folgenden Elemente dazu gedacht, Text innerhalb z.B. von Abs\xe4tzen zu\nformatieren:"),(0,i.yg)("iframe",{width:"100%",height:"300",src:"//jsfiddle.net/michivo/td3g0e4c/33/embedded/html,result/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}),(0,i.yg)("h2",{id:"elemente-f\xfcr-multimediainhalte"},"Elemente f\xfcr Multimediainhalte"),(0,i.yg)("iframe",{width:"100%",height:"300",src:"//jsfiddle.net/michivo/Lueg2dwc/30/embedded/html,result/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}),(0,i.yg)("h2",{id:"elemente-f\xfcr-eingebettete-inhalte"},"Elemente f\xfcr eingebettete Inhalte"),(0,i.yg)("p",null,"In eine Seite k\xf6nnen auch externe Inhalte eingebettet werden. Externe Inhalte k\xf6nnen\neinerseits von externe Webseiten kommen (z.B. Stra\xdfenkarten von Google Maps oder\nOpenStreetMaps, Videos von YouTube oder anderen Anbietern, ...), andererseits\nk\xf6nnen auch Inhalte eingebettet werden, die durch Browser-Plugins dargestellt werden\nk\xf6nnen. Fr\xfcher waren solche Plugins weit verbreitet (insbesondere Flash und Java-Applets),\nheutzutage bilden derart eingebettete Inhalte eher die Ausnahme (z.B. eingebettete\nPDF-Dokumente)."),(0,i.yg)("iframe",{width:"100%",height:"300",src:"//jsfiddle.net/michivo/oh7t6ydp/8/embedded/html,result/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}),(0,i.yg)("h2",{id:"scripting"},"Scripting"),(0,i.yg)("iframe",{width:"100%",height:"500",src:"//jsfiddle.net/michivo/yjL04rsh/45/embedded/html,js,result/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}),(0,i.yg)("h2",{id:"elemente-f\xfcr-tabellen"},"Elemente f\xfcr Tabellen"),(0,i.yg)("p",null,"Das folgende Beispiel zeigt die wichtigsten Elemente zum Gestalten von Tabellen in HTML:"),(0,i.yg)("iframe",{width:"100%",height:"400",src:"//jsfiddle.net/michivo/8dq2L7pa/35/embedded/html,css,result/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}),(0,i.yg)("h2",{id:"interaktive-elemente"},"Interaktive Elemente"),(0,i.yg)("p",null,"Es gibt noch einige interaktive Elemente, darunter fallen dialog, menu, summary und details.\nDie ersten beiden sind jedoch noch experimentell und nicht in allen g\xe4ngigen Browsern\nimplementiert, die Funktionsweise von summary und detail werden hier gezeigt:"),(0,i.yg)("iframe",{width:"100%",height:"150",src:"//jsfiddle.net/michivo/yjwatbhg/5/embedded/html,css,result/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}),(0,i.yg)("h2",{id:"webcomponents---templates-und-slots"},"WebComponents - Templates und Slots"),(0,i.yg)("p",null,"Templates und Slots erm\xf6glichen es, benutzerdefinierte Vorlagen (Templates) zu erstellen\nund diese an bestimmten Stellen (den Slots) mit Daten zu bef\xfcllen. Ein Beispiel f\xfcr\nTemplates & Slots finden Sie hier, bitte beachten Sie den JS-Code:"),(0,i.yg)("iframe",{width:"100%",height:"400",src:"//jsfiddle.net/michivo/3yhcmgaf/10/embedded/html,js,result/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}))}f.isMDXComponent=!0}}]);