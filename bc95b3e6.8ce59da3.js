(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{110:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return d})),n.d(r,"toc",(function(){return c})),n.d(r,"default",(function(){return l}));var t=n(3),i=n(7),a=(n(0),n(130)),s=n(134),o={id:"intro-glossary",title:"Glossar",sidebar_label:"Glossar"},d={unversionedId:"intro-glossary",id:"intro-glossary",isDocsHomePage:!1,title:"Glossar",description:"In diesem Skriptum werden Begriffe wie Client, Server oder Browser immer wieder vorkommen. Um sicherzustellen,",source:"@site/docs/intro_definitions_glossary.mdx",slug:"/intro-glossary",permalink:"/webbasics/docs/intro-glossary",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/intro_definitions_glossary.mdx",version:"current",sidebar_label:"Glossar",sidebar:"someSidebar",previous:{title:"DNS - Das Domain Name Service",permalink:"/webbasics/docs/intro-dns"},next:{title:"Lernziele",permalink:"/webbasics/docs/intro-learnings"}},c=[{value:"Client",id:"client",children:[]},{value:"Browser",id:"browser",children:[]},{value:"Server",id:"server",children:[]},{value:"HTTP-Server oder Webserver",id:"http-server-oder-webserver",children:[]},{value:"Proxy-Server",id:"proxy-server",children:[]},{value:"Content Delivery/Distribution Networks (CDNs)",id:"content-deliverydistribution-networks-cdns",children:[]}],u={toc:c};function l(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In diesem Skriptum werden Begriffe wie ",Object(a.b)("em",{parentName:"p"},"Client"),", ",Object(a.b)("em",{parentName:"p"},"Server")," oder ",Object(a.b)("em",{parentName:"p"},"Browser")," immer wieder vorkommen. Um sicherzustellen,\ndass es zu keinen Missverst\xe4ndnissen bei diesen Begriffen kommt, hier ein kurzer \xdcberblick:"),Object(a.b)("h2",{id:"client"},"Client"),Object(a.b)("p",null,"Ein Programm, das Dienste von einem Server abruft. Meist laufen Client und Server auf unterschiedlichen Rechnern,\nkommunizieren also meist \xfcber ein Netzwerk (wie das Internet) miteinander."),Object(a.b)("h2",{id:"browser"},"Browser"),Object(a.b)("p",null,"Ein Programm auf einem Rechner (PC, Tablet, Smartphone, ...) das in der Lage ist, Webseiten darzustellen. Der Browser\nist ein ",Object(a.b)("em",{parentName:"p"},"Client"),"-Programm. Beispiele f\xfcr Browser sind Chrome, Firefox, Edge, Chromium, Internet Explorer, Safari und\nOpera."),Object(a.b)("h2",{id:"server"},"Server"),Object(a.b)("p",null,"Ein Programm, das anderen Programmen (den Clients) Dienste anbietet. In diesem Skriptum wird der Begriff\n",Object(a.b)("strong",{parentName:"p"},"Server")," nur f\xfcr ",Object(a.b)("em",{parentName:"p"},"Software"),", nicht f\xfcr ",Object(a.b)("em",{parentName:"p"},"Hardware")," verwendet."),Object(a.b)("h2",{id:"http-server-oder-webserver"},"HTTP-Server oder Webserver"),Object(a.b)("p",null,"Ein Programm auf einem Rechner, das Dokumente, Dateien und weitere Daten meist \xfcber das Internet an Clients wie z.B.\nBrowser \xfcbertr\xe4gt. Es hat sich eingeb\xfcrgert, auch die Rechner, auf denen solche Programme laufen, als Server zu\nbezeichnet, in diesem Skriptum ist mit HTTP-Server oder Webserver jedoch immer das Programm (die Software) und nicht\nder Rechner (die Hardware) gemeint. Die g\xe4ngigsten HTTP-Server sind ",Object(a.b)("a",{parentName:"p",href:"https://httpd.apache.org/"},"Apache"),",\n",Object(a.b)("a",{parentName:"p",href:"https://nginx.org/en/"},"nginx"),", Microsoft Internet Information Services und ",Object(a.b)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")),Object(a.b)("h2",{id:"proxy-server"},"Proxy-Server"),Object(a.b)("p",null,"Ein Programm, das Anfragen von einem Client entgegennimmt und an einen Server weiterleitet. Ein Client (wie z.B. ein\nBrowser) stellt also keine direkte Verbindung zu einem Webserver her, sondern \xf6ffnet eine Verbindung zum Proxy-Server.\nM\xf6chte der Client eine Webseite \xf6ffnen, schickt er also eine Anfrage an den Proxy-Server. Hat der Proxy-Server z.B.\ndie angefragte Seite im Cache, kann er die Anfrage beantworten, ohne den Zielserver zu kontaktieren."),Object(a.b)("img",{alt:"Kommunikation via Proxy",src:Object(s.a)("img/proxy.png")}),Object(a.b)("p",null,"Es gibt unterschiedliche Arten von Proxies. Proxies, \xfcber die s\xe4mtiche Datenstr\xf6me zwischen einem Client und dem Internet\nlaufen, nennt man oft auch ",Object(a.b)("strong",{parentName:"p"},"Forward Proxies"),". Proxies, die zwischen dem Server und dem Internet agieren, nennt man\n",Object(a.b)("strong",{parentName:"p"},"Reverse Proxies"),". Mit der Bezeichnung ",Object(a.b)("em",{parentName:"p"},"Proxy")," (ohne ",Object(a.b)("em",{parentName:"p"},"Forward")," oder ",Object(a.b)("em",{parentName:"p"},"Reverse"),") wird ein Forward Proxy bezeichnet. Forward\nProxies findet man oft in gr\xf6\xdferen Firmennetzwerken, oft werden sie auch von Internet Service Providern (ISPs) betrieben."),Object(a.b)("p",null,"Proxies werden zu unterschiedlichen Zwecken eingesetzt:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Performance: Sogenannte ",Object(a.b)("strong",{parentName:"li"},"Caching Proxies")," werden eingesetzt, um die ben\xf6tigte Bandbreite zu reduzieren und Anfragen schneller beantworten zu k\xf6nnen. Sie ",Object(a.b)("em",{parentName:"li"},"merken")," sich die Antwort auf Anfragen von Clients und geben diese Antwort bei gleichartigen Anfragen wieder zur\xfcck, ohne den Server erneut zu kontaktieren. Das Caching-Verhalten (welche Antworten sich der Proxy merken soll und welche nicht) kann \xfcber diverse HTTP-Header beeinflusst werden. Caching Proxies werden sowohl bei Forward als auch Reverse Proxies eingesetzt: Bei Forward Proxies, um den ausgehenden Datenverkehr zu reduzieren, bei Reverse Proxies um die Last auf die Webserver zu reduzieren. Reverse Proxies \xfcbernehmen oft auch die Aufgabe der Ver- und Entschl\xfcsselung der Datenstr\xf6me zum Client (",Object(a.b)("em",{parentName:"li"},"SSL-Termination"),"), sowie das Komprimieren und Dekomprimieren der mit dem Client ausgetauschten Daten."),Object(a.b)("li",{parentName:"ul"},"Sicherheitszwecke: Forward Proxies haben oft die Aufgabe, den Datenverkehr zwischen Client und Server zu \xfcberwachen. Somit kann verhindert werden, dass z.B. Clients in Firmen unerw\xfcnschten Seiten aufrufen oder dass sch\xe4dliche Inhalte geladen werden. Bei Reverse Proxies k\xf6nnen einerseits nat\xfcrlich ebenfalls b\xf6swillige Zugriffe verhindert werden, au\xdferdem dienen Reverse Proxies oft dazu, Details \xfcber die dahinterliegende Infrastruktur vor der Au\xdfenwelt zu verbergen, was Angriffe auf diese erschwert."),Object(a.b)("li",{parentName:"ul"},"Anonymisierung: Baut ein Client eine Verbindung \xfcber einen Forward Proxy zu einem Server auf, ist es f\xfcr den Server schwer bis gar nicht m\xf6glich, festzustellen, von welchem Rechner die Anfrage kommt - er sieht nur eine Anfrage des Proxies. Somit sind Anfragen \xfcber einen Proxy bis zu einem gewissen Grad anonym. Proxies kommen oft auch zum Einsatz, um Geoblocking zu umgehen, weil Server annehmen m\xfcssen, dass eine Anfrage \xfcber einen Proxy aus der Region gestellt wird, in der der Proxy steht - der Standort des Clients ist f\xfcr den Server nicht eruierbar, wobei man sich hier in einem rechtlichen Graubereich bewegt.")),Object(a.b)("h2",{id:"content-deliverydistribution-networks-cdns"},"Content Delivery/Distribution Networks (CDNs)"),Object(a.b)("p",null,"Ein Content Delivery Network (CDN) ist ein global verteiltes Netzwerk von Servern, die Inhalte ausliefern. Bei diesen Inhalten handelt es sich meist um Dateien, die sich selten \xe4ndern, aber oft abgefragt werden. Das k\xf6nnen folglich gro\xdfe Mediendateien von Streaming-Diensten, genauso wie kleine, h\xe4ufig genutzte JavaScript-Bibliotheken wie jQuery oder CSS-Frameworks wie Bootstrap. Das Ziel von CDNs ist es, Clients weltweit schnell die gew\xfcnschten Inhalte zu liefern, Latenzen also gering zu halten und den globalen Netzwerk-Traffic zu reduzieren. Mit CDNs lassen sich also oft Kostenersparnisse bei gleichzeitigem Performancegewinn realisieren."),Object(a.b)("p",null,"Bei CDNs werden Inhalte auf einem ",Object(a.b)("em",{parentName:"p"},"Ursprungsserver")," (Origin) zur Verf\xfcgung gestellt und \xfcber ein ",Object(a.b)("em",{parentName:"p"},"Distributionssystem")," auf eine gro\xdfe Zahl von ",Object(a.b)("em",{parentName:"p"},"Replica-Servern")," repliziert. Anfragen von Clients werden \xfcber ein ",Object(a.b)("em",{parentName:"p"},"Request-Routing-System")," an einen geeigneten Replica-Server weitergeleitet und von diesem beantwortet. Bekannte Anbieter von CDNs sind Google, Cloudflare, Amazon und Microsoft mit Azure."))}l.isMDXComponent=!0},130:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return f}));var t=n(0),i=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var r=i.a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},l=function(e){var r=u(e.components);return i.a.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},m=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=u(n),m=t,f=l["".concat(s,".").concat(m)]||l[m]||b[m]||a;return n?i.a.createElement(f,o(o({ref:r},c),{},{components:n})):i.a.createElement(f,o({ref:r},c))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o.mdxType="string"==typeof e?e:t,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},134:function(e,r,n){"use strict";n.d(r,"b",(function(){return a})),n.d(r,"a",(function(){return s}));var t=n(22),i=n(135);function a(){var e=Object(t.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,n=void 0===r?"/":r,a=e.url;return{withBaseUrl:function(e,r){return function(e,r,n,t){var a=void 0===t?{}:t,s=a.forcePrependBaseUrl,o=void 0!==s&&s,d=a.absolute,c=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(o)return r+n;var u=n.startsWith(r)?n:r+n.replace(/^\//,"");return c?e+u:u}(a,n,e,r)}}}function s(e,r){return void 0===r&&(r={}),(0,a().withBaseUrl)(e,r)}},135:function(e,r,n){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!t(e)}n.d(r,"b",(function(){return t})),n.d(r,"a",(function(){return i}))}}]);