(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{149:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(2),o=t(9),a=(t(0),t(166)),i={id:"intro-protocols",title:"Protokolle und das OSI-Modell",sidebar_label:null},c={id:"intro-protocols",title:"Protokolle und das OSI-Modell",description:"In diesem Skriptum wurde HTTP, das Hypertext Transfer Protocol bereits mehrfach erw\xe4hnt.",source:"@site/docs/protocols.md",permalink:"/webbasics/docs/intro-protocols",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/protocols.md",sidebar_label:null,sidebar:"someSidebar",previous:{title:"Eine kurze Geschichte des WWW",permalink:"/webbasics/docs/intro-brief_history"},next:{title:"Powered by MDX",permalink:"/webbasics/docs/mdx"}},l=[],s={rightToc:l};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In diesem Skriptum wurde HTTP, das ",Object(a.b)("em",{parentName:"p"},"Hypertext Transfer Protocol")," bereits mehrfach erw\xe4hnt.\nNachdem schon kurz umrissen wurde, was ",Object(a.b)("em",{parentName:"p"},"Hypertext")," ist und die Bedeutung von ",Object(a.b)("em",{parentName:"p"},"Transfer"),"\n(also \xdcbertragung) wohl keiner weiteren Erl\xe4uterung bedarf, bleibt noch der Begriff\n",Object(a.b)("strong",{parentName:"p"},"Protocol"),"."),Object(a.b)("p",null,"Ein Protokoll in der Informatik bzw. Telekommunikation ist eine Vereinbarung, nach der\nDaten\xfcbertragung zwischen zwei (oder mehreren) Parteien abl\xe4uft. Einige f\xfcr das Internet\nwichtige Protokolle sind z.B. das Internet Protocol (IP) und das Transmission\nControl Protocol (TCP). Netzwerkprotokolle sind in der Regel aus Schichten aufgebaute\nProtokollstapel (d.h. HTTP basiert auf dem TCP, TCP setzt auf das IP, ...). Das\nStandardmodell f\xfcr solche Protokolle im Netzwerkbereich ist das 7-Schichten-OSI-Modell\n(auch ISO/OSI-Modell)."))}u.isMDXComponent=!0},166:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=n,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return t?o.a.createElement(f,c(c({ref:r},s),{},{components:t})):o.a.createElement(f,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);