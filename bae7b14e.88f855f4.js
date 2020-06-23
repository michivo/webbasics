(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),i=n(9),a=(n(0),n(166)),o={id:"intro-web_vs_internet",title:"Das Web"},s={id:"intro-web_vs_internet",title:"Das Web",description:"Der Titel dieses Skriptums ist Web Basics. Was aber ist das Web? Web ist eine kurzbezeichnung f\xfcr",source:"@site/docs/web_vs_internet.md",permalink:"/webbasics/docs/intro-web_vs_internet",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/web_vs_internet.md",sidebar:"someSidebar",previous:{title:"Die eine Sekunde...",permalink:"/webbasics/docs/intro-onesecond"},next:{title:"Eine kurze Geschichte des WWW",permalink:"/webbasics/docs/intro-brief_history"}},c=[],b={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Der Titel dieses Skriptums ist ",Object(a.b)("strong",{parentName:"p"},"Web Basics"),". Was aber ist ",Object(a.b)("em",{parentName:"p"},"das Web"),"? ",Object(a.b)("em",{parentName:"p"},"Web")," ist eine kurzbezeichnung f\xfcr\ndas ",Object(a.b)("strong",{parentName:"p"},"World Wide Web"),", also ein weltweites Netz. Im Gegensatz zum ",Object(a.b)("em",{parentName:"p"},"Internet"),", das ein Verbund von\nRechnernetzen ist, ist das ",Object(a.b)("em",{parentName:"p"},"World Wide Web")," ein System von elektronischen Dokumenten, sogenannten\n",Object(a.b)("em",{parentName:"p"},"Webseiten"),". Das ",Object(a.b)("em",{parentName:"p"},"World Wide Web")," ist \xfcber das Internet abrufbar, basiert also auf diesem."),Object(a.b)("p",null,"Das World Wide Web basiert auf drei essenziellen Standards:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"einem System global eindeutiger Bezeichner f\xfcr Ressourcen im Web, die sogenannte ",Object(a.b)("em",{parentName:"li"},"URL")," (uniform resource locator)\nbzw. ",Object(a.b)("em",{parentName:"li"},"URI")," (uniform resource identifier), siehe u.a. ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc3986"}),"RFC 3986"),",\nz.B. ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://michivo.github.io/webbasics/"}),"https://michivo.github.io/webbasics/")),Object(a.b)("li",{parentName:"ul"},"einem Protokoll, mit dem Clients (i.A. Browser) Informationen von Webservern anfordern k\xf6nnen: Dem HyperText\nTransfer Protocol HTTP "),Object(a.b)("li",{parentName:"ul"},"einer Auszeichnungssprache, die festlegt, wie Informationen gegliedert und miteinander verkn\xfcpft sind: Der\n",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://html.spec.whatwg.org/multipage/"}),"HyperText Markup Language HTML"))),Object(a.b)("p",null,"Sp\xe4ter kamen weitere Standards dazu:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Cascading Style Sheets (CSS), die getrennt vom Inhalt einer Webseite ihr Aussehen beschreiben"),Object(a.b)("li",{parentName:"ul"},"das Document Object Model (DOM) als Programmierschnittstelle, mit der z.B. Skripte (meist in JavaScript geschrieben)\nim Browser u.a. auf Webseiten zugreifen k\xf6nnen"),Object(a.b)("li",{parentName:"ul"},"HyperText Transfer Protocol Secure (HTTPS), mit dem der gesamte Datenverkehr verschl\xfcsselt werden kann")),Object(a.b)("p",null,"Diese Standards werden gro\xdfteils vom ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3.org"}),"World Wide Web Consortium")," verwaltet."))}l.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||a;return n?i.a.createElement(d,s(s({ref:t},b),{},{components:n})):i.a.createElement(d,s({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var b=2;b<a;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);