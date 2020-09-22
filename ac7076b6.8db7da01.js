(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(9),i=(t(0),t(168)),s=t(172),o={id:"intro-dns",title:"DNS - Das Domain Name Service",sidebar_label:"Domain Name Service"},c={id:"intro-dns",title:"DNS - Das Domain Name Service",description:"Das Internet als IP-basiertes Netzwerk kennt IP-Adressen, keine Domain-Namen wie z.B. campus02.at.",source:"@site/docs/intro_dns.mdx",permalink:"/webbasics/docs/intro-dns",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/intro_dns.mdx",sidebar_label:"Domain Name Service",sidebar:"someSidebar",previous:{title:"Protokolle",permalink:"/webbasics/docs/intro-protocols"},next:{title:"Glossar",permalink:"/webbasics/docs/intro-glossary"}},l=[{value:"Aufl\xf6sung eines DNS-Requests",id:"aufl\xf6sung-eines-dns-requests",children:[]}],u={rightToc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Das Internet als IP-basiertes Netzwerk kennt ",Object(i.b)("em",{parentName:"p"},"IP-Adressen"),", keine ",Object(i.b)("em",{parentName:"p"},"Domain-Namen")," wie z.B. campus02.at.\nWir als Benutzer arbeiten aber nur in seltenen F\xe4llen direkt mit IP-Adressen, in der Regel kennen\nwir nur Domain-Namen wie z.B. campus02.at . Die Umwandlung eines Domain-Namens in eine IP-Adresse\ngeschieht \xfcber das ",Object(i.b)("strong",{parentName:"p"},"Domain Name Service (DNS)"),"."),Object(i.b)("p",null,"Der Dom\xe4ne campus02.at ist zum Beispiel die IPv4-Adresse 149.154.100.47 zugeordnet (Stand 26.6.2020),\nder Dom\xe4ne de.wikipedia.org die IPv4-Adresse 91.198.174.192 und die IPv6-Adresse 2620:0:862:ed1a::1."),Object(i.b)("p",null,"Das DNS funktioniert also \xe4hnlich einem Telefonbuch: Im Telefonbuch werden Unternehmen oder Personen\nTelefonnummern zugeordnet, im DNS werden Domain-Namen IP-Adressen zugeordnet. Im Falle des DNS werden\ndie Domains in einem global verteilten System gespeichert, das den Namensraum des Internets verwaltet."),Object(i.b)("h2",{id:"aufl\xf6sung-eines-dns-requests"},"Aufl\xf6sung eines DNS-Requests"),Object(i.b)("p",null,"Angenommen, Sie wollen von Ihrem Rechner eine Verbindung zu ",Object(i.b)("inlineCode",{parentName:"p"},"www.campus02.at")," aufbauen. Dazu brauchen\nSie, wie bereits erw\xe4hnt, die ",Object(i.b)("em",{parentName:"p"},"IP-Adresse"),", die der Domain ",Object(i.b)("inlineCode",{parentName:"p"},"www.campus02.at")," zugeordnet ist.\nWie wird nun so ein DNS-Request aufgel\xf6st?"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Ihr Rechner sucht in der Hosts-Datei bzw. in einem lokalen Cache,, ob die IP-Adresse f\xfcr ",Object(i.b)("inlineCode",{parentName:"li"},"www.campus02.at")," hinterlegt ist. Wenn nicht, ..."),Object(i.b)("li",{parentName:"ol"},"Ihr Rechner kontaktiert den DNS-Server, der in der Regel \xfcber DHCP automatisch zugewiesen wurde.\nDer DNS-Server wird in der Regel von Ihrem Internet Service Provider (ISP) betrieben. Der DNS-Server \xfcberpr\xfcft,\nob er die IP-Adresse f\xfcr ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.campus02.at"}),"www.campus02.at")," kennt. Wenn nicht, ..."),Object(i.b)("li",{parentName:"ol"},"Der DNS-Server fragt bei einem der weltweit 13 Root-Nameserver nach ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.campus02.at."}),"www.campus02.at.")," Der Root-Nameserver\nwei\xdf, in welcher DNS-Zone ",Object(i.b)("inlineCode",{parentName:"li"},"at.")," verwaltet wird und sendet Namen und IP-Adressen der ",Object(i.b)("inlineCode",{parentName:"li"},".at"),"-Nameserver an\nden DNS-Server Ihres ISPs."),Object(i.b)("li",{parentName:"ol"},"Der ",Object(i.b)("inlineCode",{parentName:"li"},".at"),"-Nameserver sendet dem DNS-Server die Namen und IP-Adressen der Nameserver f\xfcr ",Object(i.b)("inlineCode",{parentName:"li"},"campus02.at"),"."),Object(i.b)("li",{parentName:"ol"},"Der DNS-Server fragt den Nameserver f\xfcr ",Object(i.b)("inlineCode",{parentName:"li"},"campus02.at")," nach der IP-Adresse f\xfcr ",Object(i.b)("inlineCode",{parentName:"li"},"www.campus02.at"),". "),Object(i.b)("li",{parentName:"ol"},"Der Nameserver antwortet dem DNS-Server mit der IP-Adresse. Der DNS-Server antwortet Ihrem Rechner ebenso\nmit dieser IP-Adresse. "),Object(i.b)("li",{parentName:"ol"},"Ihr Rechner kennt die IP-Adresse von ",Object(i.b)("inlineCode",{parentName:"li"},"www.campus02.at"),",\nSie k\xf6nnen eine Verbindung zu diesem Rechner aufbauen. ",Object(i.b)("img",{alt:"Happy dancing banana",src:Object(s.a)("img/banana.gif"),height:"30"}))))}d.isMDXComponent=!0},168:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,p=d["".concat(s,".").concat(b)]||d[b]||m[b]||i;return t?a.a.createElement(p,o(o({ref:n},l),{},{components:t})):a.a.createElement(p,o({ref:n},l))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},169:function(e,n,t){"use strict";var r=t(0),a=t(53);n.a=function(){return Object(r.useContext)(a.a)}},172:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));t(173);var r=t(169);function a(e){var n=(Object(r.a)().siteConfig||{}).baseUrl,t=void 0===n?"/":n;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?t+e.slice(1):t+e}},173:function(e,n,t){"use strict";var r=t(17),a=t(35),i=t(176),s="".startsWith;r(r.P+r.F*t(177)("startsWith"),"String",{startsWith:function(e){var n=i(this,e,"startsWith"),t=a(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),r=String(e);return s?s.call(n,r,t):n.slice(t,t+r.length)===r}})},176:function(e,n,t){var r=t(71),a=t(24);e.exports=function(e,n,t){if(r(n))throw TypeError("String#"+t+" doesn't accept regex!");return String(a(e))}},177:function(e,n,t){var r=t(3)("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[r]=!1,!"/./"[e](n)}catch(a){}}return!0}}}]);