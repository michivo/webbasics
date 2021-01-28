(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),i=n(9),a=(n(0),n(195)),o={id:"http-headers-overview",title:"HTTP Header",sidebar_label:"HTTP Header"},l={id:"http-headers-overview",title:"HTTP Header",description:"Header k\xf6nnen als Teil des Requests und der Response vorkommen, k\xf6nnen gem\xe4\xdf ihres Kontexts wie folgt gruppiert werden:",source:"@site/docs/http_headers_overview.md",permalink:"/webbasics/docs/http-headers-overview",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/http_headers_overview.md",sidebar_label:"HTTP Header",sidebar:"someSidebar",previous:{title:"HTTP - Response Codes",permalink:"/webbasics/docs/http-responses"},next:{title:"Lernziele",permalink:"/webbasics/docs/http-learnings"}},c=[],s={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Header k\xf6nnen als Teil des Requests und der Response vorkommen, k\xf6nnen gem\xe4\xdf ihres Kontexts wie folgt gruppiert werden:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Request Headers")," enthalten weitere Informationen \xfcber die angeforderte Ressource oder den Client selbst. Einige der wichtigsten Request Header sind ",Object(a.b)("inlineCode",{parentName:"li"},"Host"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Accept-*"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Cookie"),", ",Object(a.b)("inlineCode",{parentName:"li"},"User-Agent"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Referer")," und die ",Object(a.b)("inlineCode",{parentName:"li"},"If-*"),"-Header."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Response Headers")," enthalten Informationen \xfcber die Antwort des Servers oder den Server selbst. Einige der wichtigsten Response Header sind ",Object(a.b)("inlineCode",{parentName:"li"},"Server"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Etag"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Location")," und ",Object(a.b)("inlineCode",{parentName:"li"},"Set-Cookie"),". "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Entity Headers")," enthalten Informationen \xfcber den Request- bzw. Response-Body. Einige der wichtigsten Entity Header sind ",Object(a.b)("inlineCode",{parentName:"li"},"Content-Type"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Content-Length"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Content-Language")," und ",Object(a.b)("inlineCode",{parentName:"li"},"Content-Encoding"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"General Headers")," enthalten allgemeine Informationen \xfcber Request oder Response ohne Bezug auf den Body. Einige der wichtigsten dieser Header sind ",Object(a.b)("inlineCode",{parentName:"li"},"Date"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Cache-Control")," und ",Object(a.b)("inlineCode",{parentName:"li"},"Connection"),".")),Object(a.b)("p",null,"Auf folgenden Seiten finden Sie genauere Beschreibungen der Standard-HTTP-Header: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/de/docs/Web/HTTP/Headers"}),"https://developer.mozilla.org/de/docs/Web/HTTP/Headers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en/docs/Web/HTTP/Headers"}),"https://developer.mozilla.org/en/docs/Web/HTTP/Headers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc2616#section-4.2"}),"https://tools.ietf.org/html/rfc2616#section-4.2")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc7231"}),"https://tools.ietf.org/html/rfc7231"))))}b.isMDXComponent=!0},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||a;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);