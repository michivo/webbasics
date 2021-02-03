(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(7),a=(t(0),t(130)),o={id:"http-responses",title:"HTTP - Response Codes",sidebar_label:"Response Codes"},l={unversionedId:"http-responses",id:"http-responses",isDocsHomePage:!1,title:"HTTP - Response Codes",description:"Jede Response von einem HTTP-Server beginnt mit einem Response-Code, der dem Client",source:"@site/docs/http_response_codes.md",slug:"/http-responses",permalink:"/webbasics/docs/http-responses",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/http_response_codes.md",version:"current",sidebar_label:"Response Codes",sidebar:"someSidebar",previous:{title:"HTTP - Anfragemethoden",permalink:"/webbasics/docs/http-methods"},next:{title:"HTTP Header",permalink:"/webbasics/docs/http-headers-overview"}},d=[{value:"Informationen",id:"informationen",children:[{value:"100 Continue",id:"100-continue",children:[]},{value:"101 Switching protocols",id:"101-switching-protocols",children:[]},{value:"102 Processing",id:"102-processing",children:[]}]},{value:"Erfolg",id:"erfolg",children:[{value:"200 OK",id:"200-ok",children:[]},{value:"201 Created",id:"201-created",children:[]},{value:"202 Accepted",id:"202-accepted",children:[]},{value:"203 Non-Authoritative Information",id:"203-non-authoritative-information",children:[]},{value:"204 No Content",id:"204-no-content",children:[]},{value:"205 Reset Content",id:"205-reset-content",children:[]},{value:"206 Partial Content",id:"206-partial-content",children:[]}]},{value:"Umleitung",id:"umleitung",children:[{value:"300 Multiple Choices",id:"300-multiple-choices",children:[]},{value:"301 Moved Permanently",id:"301-moved-permanently",children:[]},{value:"302 Found",id:"302-found",children:[]},{value:"303 See Other",id:"303-see-other",children:[]},{value:"307 Temporary Redirect",id:"307-temporary-redirect",children:[]}]},{value:"Client-Fehler",id:"client-fehler",children:[{value:"400 Bad Request",id:"400-bad-request",children:[]},{value:"401 Unauthorized",id:"401-unauthorized",children:[]},{value:"403 Forbidden",id:"403-forbidden",children:[]},{value:"404 Not Found",id:"404-not-found",children:[]},{value:"405 Method Not Allowed",id:"405-method-not-allowed",children:[]},{value:"406 Not Acceptable",id:"406-not-acceptable",children:[]},{value:"407 Proxy Authentication Required",id:"407-proxy-authentication-required",children:[]},{value:"408 Request Timeout",id:"408-request-timeout",children:[]},{value:"409 Conflict",id:"409-conflict",children:[]},{value:"410 Gone",id:"410-gone",children:[]}]},{value:"Server-Fehler",id:"server-fehler",children:[{value:"500 Internal Server Error",id:"500-internal-server-error",children:[]},{value:"501 Not Implemented",id:"501-not-implemented",children:[]},{value:"502 Bad Gateway",id:"502-bad-gateway",children:[]},{value:"503 Service Unavailable",id:"503-service-unavailable",children:[]},{value:"504 Gateway Timeout",id:"504-gateway-timeout",children:[]},{value:"505 HTTP Version not supported",id:"505-http-version-not-supported",children:[]}]},{value:"Quellen",id:"quellen",children:[]}],c={toc:d};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Jede Response von einem HTTP-Server beginnt mit einem Response-Code, der dem Client\nInformationen dar\xfcber gibt, ob die von ihm gestellte Anfrage erfolgreich beantwortet\nwerden konnte oder nicht. Wenn eine Anfrage nicht erfolgreich beantwortet werden konnte,\nenth\xe4lt der Response Code Informationen dar\xfcber, was der Grund f\xfcr den Fehler war."),Object(a.b)("p",null,"Der Response Code ist eine dreistellige Dezimalzahl, deren erste Stelle die Statusklasse\ndarstellt:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"1xx -> Informationen - die Anfrage wurde entgegengenommen und ist in Bearbeitung"),Object(a.b)("li",{parentName:"ul"},"2xx -> Erfolgreiche Operationen - die Anfrage wurde entgegengenommen, verstanden und erfolgreich bearbeitet"),Object(a.b)("li",{parentName:"ul"},"3xx -> Umleitung - f\xfcr die Bearbeitung der Anfrage muss der Client noch etwas machen"),Object(a.b)("li",{parentName:"ul"},"4xx -> Client-Fehler - die Anfrage ist ung\xfcltig bzw. kann nicht verarbeitet werden"),Object(a.b)("li",{parentName:"ul"},"5xx -> Server-Fehler - die Anfrage war zwar g\xfcltig, bei der Bearbeitung ist es am Server aber zu einem Fehler gekommen")),Object(a.b)("h2",{id:"informationen"},"Informationen"),Object(a.b)("h3",{id:"100-continue"},"100 Continue"),Object(a.b)("p",null,"Eine Zwischenantwort, mit der der Server anzeigt, dass bisher alles in Ordnung ist und\nder Client mit seinem Request weitermachen soll. M\xf6chte der Client z.B. gro\xdfe Mengen an\nDaten schicken, kann er zuerst einen Request ohne Body schicken, auf den der Server dann\nmit ",Object(a.b)("inlineCode",{parentName:"p"},"100 Continue")," oder einem entsprechenden Fehlercode antworten kann. Nur bei ",Object(a.b)("inlineCode",{parentName:"p"},"100 Continue"),"\nw\xfcrde der Client auch tats\xe4chlich Daten schicken."),Object(a.b)("h3",{id:"101-switching-protocols"},"101 Switching protocols"),Object(a.b)("p",null,"Der Client hat beim Server um einen Protokollwechsel angefragt, der Server antwortet, dass\ndas in Ordnung ist. Dieser Status Code kommt selten vor."),Object(a.b)("h3",{id:"102-processing"},"102 Processing"),Object(a.b)("p",null,"Der Server teilt dem Client mit, dass sein Request noch verarbeitet wird. Der Client wei\xdf\nalso, dass der Server noch am Request arbeitet und kein Timeout (oder ein anderer Fehler)\naufgetreten ist."),Object(a.b)("h2",{id:"erfolg"},"Erfolg"),Object(a.b)("h3",{id:"200-ok"},"200 OK"),Object(a.b)("p",null,"Der h\xe4ufigste Response-Code. Die Anfrage wurde erfolgreich bearbeitet, der Body enth\xe4lt die\nangeforderten Daten"),Object(a.b)("h3",{id:"201-created"},"201 Created"),Object(a.b)("p",null,"Die Anfrage wurde erfolgreich bearbeitet, eine oder mehrere Ressourcen wurden erfolgreich\nangelegt."),Object(a.b)("h3",{id:"202-accepted"},"202 Accepted"),Object(a.b)("p",null,"Die Anfrage wurde akzeptiert, aber noch nicht vollst\xe4ndig verarbeitet."),Object(a.b)("h3",{id:"203-non-authoritative-information"},"203 Non-Authoritative Information"),Object(a.b)("p",null,"Die Antwort kommt von einem Proxy, der vom Zielserver eine Antwort mit Status ",Object(a.b)("inlineCode",{parentName:"p"},"200 OK")," bekommen\nhat, dem Client aber eine ver\xe4nderte Version der Antwort weitergibt."),Object(a.b)("h3",{id:"204-no-content"},"204 No Content"),Object(a.b)("p",null,"Der Server hat die Anfrage des Clients entgegengenommen und erfolgreich verarbeitet,\nes gibt aber keinen Body."),Object(a.b)("h3",{id:"205-reset-content"},"205 Reset Content"),Object(a.b)("p",null,"Der Server hat die Anfrage erfolgreich bearbeitet und teilt dem Client mit, dass er das\naktive Dokument zur\xfccksetzen bzw. neu laden soll."),Object(a.b)("h3",{id:"206-partial-content"},"206 Partial Content"),Object(a.b)("p",null,"Der Server liefert nur einen Teil der Antwort im Body, weil der Client das so angefordert hat\n(z.B. um einen zuvor abgebrochenen Download fortzusetzen)."),Object(a.b)("p",null,"Die weiteren 2xx-Codes haben kaum praktische Relevanz, werden hier daher nicht weiter behandelt."),Object(a.b)("h2",{id:"umleitung"},"Umleitung"),Object(a.b)("h3",{id:"300-multiple-choices"},"300 Multiple Choices"),Object(a.b)("p",null,"Es gibt mehrere Optionen f\xfcr die angefragte Ressource (z.B. mehrere unterschiedliche Videoformate, ...),\nder Client muss erst entscheiden, welches Format er bevorzugt."),Object(a.b)("h3",{id:"301-moved-permanently"},"301 Moved Permanently"),Object(a.b)("p",null,"Die Ressource, die unter dieser URI zu finden war, ist nun unter einer neuen URI zu finden. Der Client\nsoll in Zukunft nur noch die neue URI verwenden."),Object(a.b)("h3",{id:"302-found"},"302 Found"),Object(a.b)("p",null,"Die Ressource, die unter dieser URI zu finden war, ist tempor\xe4r unter einer neuen URI zu finden. Diese\nUmleitung kann sich in Zukunft \xe4ndern, der Client sollte daher bei sp\xe4teren Requests immer die\nurspr\xfcngliche URI verwenden. Der Body der Antwort sollte einen kurzen Hinweis auf die Umleitung und einen\nLink zur neuen URI enthalten."),Object(a.b)("h3",{id:"303-see-other"},"303 See Other"),Object(a.b)("p",null,"Der Server leitet die Anfrage des Clients zu einer anderen Ressource um, die eine indirekte Antwort auf\ndie urspr\xfcngliche Anfrage des Clients gibt."),Object(a.b)("h3",{id:"307-temporary-redirect"},"307 Temporary Redirect"),Object(a.b)("p",null,"Temporary Redirect verh\xe4lt sich bis auf ein Detail gleich wie ",Object(a.b)("inlineCode",{parentName:"p"},"302 Found"),". Der einzige Unterschied ist,\ndass ",Object(a.b)("inlineCode",{parentName:"p"},"302 Found")," aus historischen Gr\xfcnden eine \xc4nderung der Methode von ",Object(a.b)("inlineCode",{parentName:"p"},"POST")," zu ",Object(a.b)("inlineCode",{parentName:"p"},"GET")," zul\xe4sst."),Object(a.b)("h2",{id:"client-fehler"},"Client-Fehler"),Object(a.b)("h3",{id:"400-bad-request"},"400 Bad Request"),Object(a.b)("p",null,"Der Server kann die Anfrage nicht beantworten, weil die Anfrage ung\xfcltig ist (Fehlende Daten, ung\xfcltige\nSyntax, ...)"),Object(a.b)("h3",{id:"401-unauthorized"},"401 Unauthorized"),Object(a.b)("p",null,"F\xfcr die Anfrage muss sich der Client erst gegen\xfcber dem Server authentifizieren."),Object(a.b)("h3",{id:"403-forbidden"},"403 Forbidden"),Object(a.b)("p",null,"Der Server hat die Anfrage verstanden, der Client ist aber nicht dazu berechtigt, auf die angefragte\nRessource zuzugreifen. Der Client sollte nicht versuchen, die Anfrage noch einmal gleich zu stellen,\nkann sie aber mit neuen Zugriffsinformationen erneut senden.\nServer k\xf6nnen statt mit ",Object(a.b)("inlineCode",{parentName:"p"},"403 Forbidden")," auch mit ",Object(a.b)("inlineCode",{parentName:"p"},"404 Not Found")," antworten, wenn sie aus\nSicherheitsgr\xfcnden dem Client nicht mitteilen wollen, dass die angefragte Ressource \xfcberhaupt existiert."),Object(a.b)("h3",{id:"404-not-found"},"404 Not Found"),Object(a.b)("p",null,"Der Server kann die angefragte Ressource nicht finden oder will dem Client aus Sicherheitsgr\xfcnden nicht\nmitteilen, dass die Ressource existiert. Dieser Statuscode sagt nichts dar\xfcber aus, ob dieser Zustand\ntempor\xe4r oder permanent ist."),Object(a.b)("h3",{id:"405-method-not-allowed"},"405 Method Not Allowed"),Object(a.b)("p",null,"Die angefragte Ressource existiert zwar, ein Zugriff mit der vom Client verwendeten Anfragemethode (GET, POST, ...)\nist aber nicht m\xf6glich. In den Response-Headern teilt der Server dem Client die unterst\xfctzten Methoden mit."),Object(a.b)("h3",{id:"406-not-acceptable"},"406 Not Acceptable"),Object(a.b)("p",null,"Die angefragte Ressource steht nicht in der angefragten Form zur Verf\xfcgung. Der Server kann dem Client\nmitteilen, in welcher Form die Ressource angefragt werden kann. Diese ",Object(a.b)("em",{parentName:"p"},"Form")," ist \xfcblicherweise ein\nFormat (z.B. Datenformat XML, Videoformat, ...)."),Object(a.b)("h3",{id:"407-proxy-authentication-required"},"407 Proxy Authentication Required"),Object(a.b)("p",null,"Vergleichbar mit ",Object(a.b)("inlineCode",{parentName:"p"},"401 Unauthorized"),", jedoch muss sich der Client hier nicht gegen\xfcber einem Server,\nsondern gegen\xfcber einem Proxy authentifizieren."),Object(a.b)("h3",{id:"408-request-timeout"},"408 Request Timeout"),Object(a.b)("p",null,"Innerhalb der vom Server erlaubten Zeitspanne wurde keine vollst\xe4ndige Anfrage des Clients empfangen."),Object(a.b)("h3",{id:"409-conflict"},"409 Conflict"),Object(a.b)("p",null,"Die Anfrage kann nicht verarbeitet werden, weil die Zielressource in einem Zustand ist, der diese\nAnfrage nicht zul\xe4sst."),Object(a.b)("h3",{id:"410-gone"},"410 Gone"),Object(a.b)("p",null,"Die Zielressource ist am Server nicht mehr vorhanden, daran wird sich auch voraussichtlich nichts \xe4ndern."),Object(a.b)("p",null,"Das sind die wichtigsten Fehlercodes f\xfcr Client-Fehler, eine umfassendere Liste findet sich in den in den Quellenangaben\nverlinkten Dokumenten. Wie der Name schon sagt, ist (zumindest aus Sicht des Servers) der ",Object(a.b)("strong",{parentName:"p"},"Client"),"\nverantwortlich f\xfcr die 4xx-er Fehler, w\xe4hrend der Server f\xfcr die 5xx-er-Fehler verantwortlich ist. Die Abgrenzung\nzwischen Client- und Serverfehlern ist jedoch nicht immer ganz klar."),Object(a.b)("h2",{id:"server-fehler"},"Server-Fehler"),Object(a.b)("h3",{id:"500-internal-server-error"},"500 Internal Server Error"),Object(a.b)("p",null,"Generischer Fehlercode f\xfcr unerwartete Serverfehler."),Object(a.b)("h3",{id:"501-not-implemented"},"501 Not Implemented"),Object(a.b)("p",null,"Die Funktionalit\xe4t, um eine Anfrage zu bearbeiten, wurde noch nicht implementiert."),Object(a.b)("h3",{id:"502-bad-gateway"},"502 Bad Gateway"),Object(a.b)("p",null,"Diese Antwort kommt \xfcblicherweise von einem Proxy, wenn er wiederum eine ung\xfcltige Antwort bekommen hat."),Object(a.b)("h3",{id:"503-service-unavailable"},"503 Service Unavailable"),Object(a.b)("p",null,"Der Server steht gerade nicht zur Verf\xfcgung, z.B. weil er gerade neu gestartet wird oder wegen Wartungsarbeiten."),Object(a.b)("h3",{id:"504-gateway-timeout"},"504 Gateway Timeout"),Object(a.b)("p",null,"Diese Antwort kommt \xfcblicherweise von einem Proxy, wenn er wiederum keine Antwort innerhalb der erwarteten Zeit bekommen hat."),Object(a.b)("h3",{id:"505-http-version-not-supported"},"505 HTTP Version not supported"),Object(a.b)("p",null,"Die im Request angegebene HTTP-Version wird nicht unterst\xfctzt."),Object(a.b)("p",null,"Auch hier gibt es weitere Fehler-Codes, die oben genannten sind allerdings die h\xe4ufigsten serverseitigen Fehler."),Object(a.b)("h2",{id:"quellen"},"Quellen"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7231#section-6"},"https://tools.ietf.org/html/rfc7231#section-6")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://developer.mozilla.org/de/docs/Web/HTTP/Status"},"https://developer.mozilla.org/de/docs/Web/HTTP/Status")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/HTTP-Statuscode"},"https://de.wikipedia.org/wiki/HTTP-Statuscode")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"))))}s.isMDXComponent=!0},130:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),s=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},h=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(t),h=r,m=u["".concat(o,".").concat(h)]||u[h]||b[h]||a;return t?i.a.createElement(m,l(l({ref:n},c),{},{components:t})):i.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=h;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);