(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{152:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return s})),n.d(r,"rightToc",(function(){return c})),n.d(r,"default",(function(){return m}));var t=n(2),i=n(9),a=(n(0),n(173)),o={id:"intro-glossary",title:"Glossar",sidebar_label:"Glossar"},s={id:"intro-glossary",title:"Glossar",description:"In diesem Skriptum werden Begriffe wie Client, Server oder Browser immer wieder vorkommen. Um sicherzustellen,",source:"@site/docs/intro_definitions_glossary.md",permalink:"/webbasics/docs/intro-glossary",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/intro_definitions_glossary.md",sidebar_label:"Glossar",sidebar:"someSidebar",previous:{title:"DNS - Das Domain Name Service",permalink:"/webbasics/docs/intro-dns"},next:{title:"Lernziele",permalink:"/webbasics/docs/intro-learnings"}},c=[{value:"Client",id:"client",children:[]},{value:"Browser",id:"browser",children:[]},{value:"Server",id:"server",children:[]},{value:"HTTP-Server oder Webserver",id:"http-server-oder-webserver",children:[]}],l={rightToc:c};function m(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In diesem Skriptum werden Begriffe wie ",Object(a.b)("em",{parentName:"p"},"Client"),", ",Object(a.b)("em",{parentName:"p"},"Server")," oder ",Object(a.b)("em",{parentName:"p"},"Browser")," immer wieder vorkommen. Um sicherzustellen,\ndass es zu keinen Missverst\xe4ndnissen bei diesen Begriffen kommt, hier ein kurzer \xdcberblick:"),Object(a.b)("h3",{id:"client"},"Client"),Object(a.b)("p",null,"Ein Programm, das Dienste von einem Server abruft. Meist laufen Client und Server auf unterschiedlichen Rechnern,\nkommunizieren also meist \xfcber ein Netzwerk (wie das Internet) miteinander."),Object(a.b)("h3",{id:"browser"},"Browser"),Object(a.b)("p",null,"Ein Programm auf einem Rechner (PC, Tablet, Smartphone, ...) das in der Lage ist, Webseiten darzustellen. Der Browser\nist ein ",Object(a.b)("em",{parentName:"p"},"Client"),"-Programm. Beispiele f\xfcr Browser sind Chrome, Firefox, Edge, Chromium, Internet Explorer, Safari und\nOpera."),Object(a.b)("h3",{id:"server"},"Server"),Object(a.b)("p",null,"Ein Programm, das anderen Programmen (den Clients) Dienste anbietet. Wie bereits erw\xe4hnt wird die Bezeichnung\nServer in diesem Skriptum f\xfcr ",Object(a.b)("em",{parentName:"p"},"Software"),", nicht f\xfcr ",Object(a.b)("em",{parentName:"p"},"Hardware")," verwendet."),Object(a.b)("h3",{id:"http-server-oder-webserver"},"HTTP-Server oder Webserver"),Object(a.b)("p",null,"Ein Programm auf einem Rechner, das Dokumente, Dateien und weitere Daten meist \xfcber das Internet an Clients wie z.B.\nBrowser \xfcbertr\xe4gt. Es hat sich eingeb\xfcrgert, auch die Rechner, auf denen solche Programme laufen, als Server zu\nbezeichnet, in diesem Skriptum ist mit HTTP-Server oder Webserver jedoch immer das Programm (die Software) und nicht\nder Rechner (die Hardware) gemeint. Die g\xe4ngigsten HTTP-Server sind ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://httpd.apache.org/"}),"Apache"),",\n",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://nginx.org/en/"}),"nginx"),", Microsoft Internet Information Services und ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"Node.js"}),"https://nodejs.org/en/")))}m.isMDXComponent=!0},173:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return u}));var t=n(0),i=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),m=function(e){var r=i.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},d=function(e){var r=m(e.components);return i.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},p=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(n),p=t,u=d["".concat(o,".").concat(p)]||d[p]||b[p]||a;return n?i.a.createElement(u,s(s({ref:r},l),{},{components:n})):i.a.createElement(u,s({ref:r},l))}));function u(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);