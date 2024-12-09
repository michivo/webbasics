"use strict";(self.webpackChunkweb_basics=self.webpackChunkweb_basics||[]).push([[4189],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=i,u=c["".concat(s,".").concat(m)]||c[m]||g[m]||a;return t?r.createElement(u,o(o({ref:n},p),{},{components:t})):r.createElement(u,o({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5819:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=t(8168),i=t(8587),a=(t(6540),t(5680));const o=["components"],l={id:"http-headers-overview",title:"HTTP Header",sidebar_label:"HTTP Header"},s=void 0,d={unversionedId:"http-headers-overview",id:"http-headers-overview",title:"HTTP Header",description:"Header k\xf6nnen als Teil des Requests und der Response vorkommen, k\xf6nnen gem\xe4\xdf ihres Kontexts wie folgt gruppiert werden:",source:"@site/docs/http_headers_overview.md",sourceDirName:".",slug:"/http-headers-overview",permalink:"/webbasics/docs/http-headers-overview",draft:!1,editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/http_headers_overview.md",tags:[],version:"current",frontMatter:{id:"http-headers-overview",title:"HTTP Header",sidebar_label:"HTTP Header"},sidebar:"someSidebar",previous:{title:"Response Codes",permalink:"/webbasics/docs/http-responses"},next:{title:"Lernziele",permalink:"/webbasics/docs/http-learnings"}},p={},c=[],g={toc:c},m="wrapper";function u(e){let{components:n}=e,t=(0,i.A)(e,o);return(0,a.yg)(m,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Header k\xf6nnen als Teil des Requests und der Response vorkommen, k\xf6nnen gem\xe4\xdf ihres Kontexts wie folgt gruppiert werden:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Request Headers")," enthalten weitere Informationen \xfcber die angeforderte Ressource oder den Client selbst. Einige der wichtigsten Request Header sind ",(0,a.yg)("inlineCode",{parentName:"li"},"Host"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Accept-*"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Cookie"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"User-Agent"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Referer")," und die ",(0,a.yg)("inlineCode",{parentName:"li"},"If-*"),"-Header."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Response Headers")," enthalten Informationen \xfcber die Antwort des Servers oder den Server selbst. Einige der wichtigsten Response Header sind ",(0,a.yg)("inlineCode",{parentName:"li"},"Server"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Etag"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Location")," und ",(0,a.yg)("inlineCode",{parentName:"li"},"Set-Cookie"),". "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Entity Headers")," enthalten Informationen \xfcber den Request- bzw. Response-Body. Einige der wichtigsten Entity Header sind ",(0,a.yg)("inlineCode",{parentName:"li"},"Content-Type"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Content-Length"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Content-Language")," und ",(0,a.yg)("inlineCode",{parentName:"li"},"Content-Encoding"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"General Headers")," enthalten allgemeine Informationen \xfcber Request oder Response ohne Bezug auf den Body. Einige der wichtigsten dieser Header sind ",(0,a.yg)("inlineCode",{parentName:"li"},"Date"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Cache-Control")," und ",(0,a.yg)("inlineCode",{parentName:"li"},"Connection"),".")),(0,a.yg)("p",null,"Auf folgenden Seiten finden Sie genauere Beschreibungen der Standard-HTTP-Header: "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/de/docs/Web/HTTP/Headers"},"https://developer.mozilla.org/de/docs/Web/HTTP/Headers")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en/docs/Web/HTTP/Headers"},"https://developer.mozilla.org/en/docs/Web/HTTP/Headers")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc2616#section-4.2"},"https://tools.ietf.org/html/rfc2616#section-4.2")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7231"},"https://tools.ietf.org/html/rfc7231"))))}u.isMDXComponent=!0}}]);