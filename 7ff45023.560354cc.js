(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{130:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(t),u=r,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||a;return t?i.a.createElement(m,l(l({ref:n},c),{},{components:t})):i.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var r=t(3),i=t(7),a=(t(0),t(130)),o={id:"http-intro",title:"HTTP - das HyperText Transfer Protocol",sidebar_label:"\xdcberblick"},l={unversionedId:"http-intro",id:"http-intro",isDocsHomePage:!1,title:"HTTP - das HyperText Transfer Protocol",description:"Das Hypertext Transfer Protocol (HTTP, englisch f\xfcr Hypertext-\xdcbertragungsprotokoll) ist ein",source:"@site/docs/http_intro.md",slug:"/http-intro",permalink:"/webbasics/docs/http-intro",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/http_intro.md",version:"current",sidebar_label:"\xdcberblick",sidebar:"someSidebar",previous:{title:"Lernziele",permalink:"/webbasics/docs/intro-learnings"},next:{title:"HTTP f\xfcr Webservices",permalink:"/webbasics/docs/http-whatfor"}},s=[{value:"Beispiel-Anfrage",id:"beispiel-anfrage",children:[]}],c={toc:s};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Das Hypertext Transfer Protocol (HTTP, englisch f\xfcr Hypertext-\xdcbertragungsprotokoll) ist ein"),"\n",Object(a.b)("em",{parentName:"p"},"zustandsloses Protokoll zur \xdcbertragung von Daten auf der Anwendungsschicht \xfcber ein Rechnernetz."),"\n",Object(a.b)("em",{parentName:"p"},"Es wird haupts\xe4chlich eingesetzt, um Webseiten (Hypertext-Dokumente) aus dem World Wide Web (WWW)"),"\n",Object(a.b)("em",{parentName:"p"},"in einen Webbrowser zu laden. Es ist jedoch nicht prinzipiell darauf beschr\xe4nkt und auch als"),"\n",Object(a.b)("em",{parentName:"p"},"allgemeines Datei\xfcbertragungsprotokoll sehr verbreitet."),"\n(Quelle: ",Object(a.b)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol"},"https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol"),")."),Object(a.b)("p",null,"HTTP ist also"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ein zustandsloses Protokoll: Anfragen sind voneinander unabh\xe4ngig. Anfragen haben keinen Bezug zu fr\xfcheren Anfragen."),Object(a.b)("li",{parentName:"ul"},"ein Protokoll auf der Anwendungsschicht des ",Object(a.b)("a",{parentName:"li",href:"intro-protocols"},"TCP/IP-Referenzmodells")),Object(a.b)("li",{parentName:"ul"},"ein Protokoll zur \xdcbertragung von Daten \xfcber ein Rechnernetz, meist \xfcber das Internet")),Object(a.b)("p",null,"Die Kommunikation bei HTTP findet stets zwischen einem HTTP-Client (meist einem Browser, wie\nChrome, Firefox, Edge, ...) und einem HTTP-Server (nginx, Apache, MS IIS, ...) statt. Der Client\nschickt ",Object(a.b)("strong",{parentName:"p"},"Anfragen/Requests")," an den Server, der Server reagiert darauf mit ",Object(a.b)("strong",{parentName:"p"},"Antworten/Responses"),".\nAnfragen und Antworten werden als ",Object(a.b)("strong",{parentName:"p"},"Nachrichten")," bezeichnet, jede Nachricht besteht aus einem\n",Object(a.b)("strong",{parentName:"p"},"Header")," und optional einem ",Object(a.b)("strong",{parentName:"p"},"Body"),". Der Header enth\xe4lt Daten \xfcber den Body, damit dieser vom Empf\xe4nger\nder jeweiligen Nachricht richtig verarbeitet werden kann."),Object(a.b)("h3",{id:"beispiel-anfrage"},"Beispiel-Anfrage"),Object(a.b)("p",null,"HTTP-Requests sind auch f\xfcr Menschen lesbar. Will man zum Beispiel die Internetseite mit\nder URL ",Object(a.b)("a",{parentName:"p",href:"http://info.cern.ch/hypertext/WWW/TheProject.html"},"http://info.cern.ch/hypertext/WWW/TheProject.html")," abrufen, wird zuerst (siehe ",Object(a.b)("a",{parentName:"p",href:"intro-dns"},"DNS"),")\nder Domainname ",Object(a.b)("inlineCode",{parentName:"p"},"info.cern.ch")," aufgel\xf6st. Der Domainname ist mit der IP-Adresse 188.184.100.82\nverkn\xfcpft, zum Rechner mit dieser IP-Adresse wird dann folgende Anfrage geschickt:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"GET /hypertext/WWW/TheProject.html HTTP/1.1\nHost: info.cern.ch\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GET")," ist dabei das sogenannte ",Object(a.b)("strong",{parentName:"li"},"HTTP-Anfragemethode")," und bezeichnet die Operation, die ausgef\xfchrt werden soll"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"/hypertext/WWW/TheProject.html")," ist die Ressource, auf die zugegriffen werden soll"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"HTTP/1.1")," ist der Protokollbezeichner - es wird also HTTP Version 1.1 f\xfcr die Kommunikation verwendet"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Host")," ist ein ",Object(a.b)("strong",{parentName:"li"},"HTTP-Header"),", der festlegt, f\xfcr welchen DNS-Namen die Anfrage gedacht ist. So ist es m\xf6glich, mehrere Webseiten auf einem Rechner mit einer IP-Adresse zu betreiben. Der Wert dieses Headers ist der DNS-Name ",Object(a.b)("inlineCode",{parentName:"li"},"info.cern.ch"),".")),Object(a.b)("p",null,"Eine Anfrage ",Object(a.b)("em",{parentName:"p"},"kann")," im Allgemeinen auch einen Body haben, eine ",Object(a.b)("strong",{parentName:"p"},"GET"),"-Anfrage hat jedoch keinen Body, sie besteht nur aus\neinem Header."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'HTTP/1.1 200 OK \nDate: Tue, 30 Jun 2020 09:24:25 GMT  \nServer: Apache  \nLast-Modified: Thu, 03 Dec 1992 08:37:20 GMT  \nETag: "40521e06-8a9-291e721905000"   \nAccept-Ranges: bytes  \nContent-Length: 2217  \nConnection: close  \nContent-Type: text/html\n\n[Antwort-Body]\n')),Object(a.b)("details",null,Object(a.b)("summary",null,"Klicken Sie hier, um den gesamten Antwort-Body zu sehen (zur besseren Lesbarkeit formatiert)."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<HEADER>\n  <TITLE>The World Wide Web project<TITLE> \n  <NEXTID N="55"> \n</HEADER> \n<BODY> \n  <H1>World Wide Web</H1>\n  The WorldWideWeb (W3) is a wide-area<A NAME=0 HREF="WhatIs.html"> hypermedia</A> \n  information retrieval initiative aiming to give universal access to a large universe \n  of documents.\n  <P> \n  Everything there is online about W3 is linked directly or indirectly to this document, \n  including an <A NAME=24 HREF="Summary.html">executive summary</A> of the project, \n  <A NAME=29 HREF="Administration/Mailing/Overview.html">Mailing lists</A> , \n  <A NAME=30 HREF="Policy.html">Policy</A> , November\'s  \n  <A NAME=34 HREF="News/9211.html">W3  news</A> , \n  <A NAME=41 HREF="FAQ/List.html">Frequently Asked Questions</A> . \n  <DL> \n    <DT><A NAME=44 HREF="../DataSources/Top.html">What\'s out there?</A> \n    <DD> Pointers to the world\'s online information,\n    <A NAME=45 HREF="../DataSources/bySubject/Overview.html"> subjects</A> , \n    <A NAME=z54 HREF="../DataSources/WWW/Servers.html">W3 servers</A>, etc. \n\n    <DT><A NAME=46 HREF="Help.html">Help</A> \n    <DD> on the browser you are using \n\n    <DT><A NAME=13 HREF="Status.html">Software Products</A> \n    <DD> A list of W3 project components and their current state. (e.g. \n    <A NAME=27 HREF="LineMode/Browser.html">Line Mode</A> ,X11 \n    <A NAME=35 HREF="Status.html#35">Viola</A> ,  \n    <A NAME=26 HREF="NeXT/WorldWideWeb.html">NeXTStep</A> , \n    <A NAME=25 HREF="Daemon/Overview.html">Servers</A> , \n    <A NAME=51 HREF="Tools/Overview.html">Tools</A> ,\n    <A NAME=53 HREF="MailRobot/Overview.html"> Mail robot</A> ,\n    <A NAME=52 HREF="Status.html#57"> Library</A> ) \n    \n    <DT><A NAME=47 HREF="Technical.html">Technical</A> \n    <DD> Details of protocols, formats, program internals etc \n\n    <DT><A NAME=40 HREF="Bibliography.html">Bibliography</A> \n    <DD> Paper documentation on  W3 and references. \n\n    <DT><A NAME=14 HREF="People.html">People</A> \n    <DD> A list of some people involved in the project. \n\n    <DT><A NAME=15 HREF="History.html">History</A> \n    <DD> A summary of the history of the project. \n\n    <DT><A NAME=37 HREF="Helping.html">How can I help</A> ? \n    <DD> If you would like to support the web.. \n\n    <DT><A NAME=48 HREF="../README.html">Getting code</A> \n    <DD> Getting the code by\n    <A NAME=49 HREF="LineMode/Defaults/Distribution.html"> anonymous FTP</A> , etc.</A>\n  </DL>\n</BODY>\n'))),Object(a.b)("p",null,"Die Bedeutung der Response-Header ist wie folgt:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"HTTP/1.1")," - das Ergebnis enspricht HTTP Version 1.1"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"200 OK")," - der Ergebnisstatuscode ist 200 OK, die Anfrage konnte erfolgreich bearbeitet werden"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Date: Tue, 30 Jun 2020 09:24:25 GMT")," - Datum der Response"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Server: Apache")," - die Response kommt von einem Apache-Server"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Last-Modified: Thu, 03 Dec 1992 08:37:20 GMT")," - das abgefragte Dokument wurde zuletzt 1992 modifiziert"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},'ETag: "40521e06-8a9-291e721905000"')," - Entity Tag, wird u.a. f\xfcr Caching verwendet"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Accept-Ranges: bytes")," - Hiermit gibt der Server bekannt, dass er auch partielle Requests verarbeiten kann (z.B. wenn ein Download unterbrochen wurde)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Content-Length: 2217")," - L\xe4nge des Response-Bodys"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Connection: close")," - Darunterliegende TCP-Verbindung soll geschlossen werden"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Content-Type: text/html")," - Das Ergebnis enth\xe4lt HTML")))}b.isMDXComponent=!0}}]);