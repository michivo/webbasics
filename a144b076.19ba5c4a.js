(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return p}));var i=t(2),r=t(9),a=(t(0),t(173)),l={id:"mime-intro",title:"Media Types - Datenformate",sidebar_label:"\xdcberblick"},d={id:"mime-intro",title:"Media Types - Datenformate",description:"Ein (Internet) Media Type (auch als MIME-Type, nach der Spezifikation Multipurpose Internet Mail Extensions) dient der Identifikation von Formaten bei der \xdcbertragung von Daten \xfcber das Internet. Media Types kommen u.a. in E-Mails und bei der Daten\xfcbertragung \xfcber HTTP zum Einsatz. F\xfcr die Verwaltung und Standardisierung der Media Typen ist die IANA",source:"@site/docs/mime_intro.md",permalink:"/webbasics/docs/mime-intro",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/mime_intro.md",sidebar_label:"\xdcberblick",sidebar:"someSidebar",previous:{title:"HTML - HyperText Markup Language",permalink:"/webbasics/docs/html-intro"},next:{title:"Einige der wichtigsten Media Types f\xfcr das Web",permalink:"/webbasics/docs/mime-list"}},o=[{value:"Aufbau",id:"aufbau",children:[{value:"Typen",id:"typen",children:[]},{value:"B\xe4ume",id:"b\xe4ume",children:[]}]},{value:"Verwendung in HTTP-Headern",id:"verwendung-in-http-headern",children:[]}],b={rightToc:o};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Ein (Internet) Media Type (auch als ",Object(a.b)("strong",{parentName:"p"},"MIME-Type"),", nach der Spezifikation ",Object(a.b)("em",{parentName:"p"},"Multipurpose Internet Mail Extensions"),") dient der Identifikation von Formaten bei der \xdcbertragung von Daten \xfcber das Internet. Media Types kommen u.a. in E-Mails und bei der Daten\xfcbertragung \xfcber HTTP zum Einsatz. F\xfcr die Verwaltung und Standardisierung der Media Typen ist die IANA\n(Internet Assigned Numbers Authority) zust\xe4ndig, die u.a. auch die \xfcbergeordnete Beh\xf6rde f\xfcr die DNS-Verwaltung und die Vergabe von IP-Adressbl\xf6cken ist."),Object(a.b)("p",null,"Ohne die Angabe eines Media Types w\xe4re es einem Browser zum Beispiel nicht immer m\xf6glich, zu wissen, wie er von einem Server empfangene Daten richtig interpretieren soll."),Object(a.b)("h2",{id:"aufbau"},"Aufbau"),Object(a.b)("p",null,"Media Types sind wie folgt aufgebaut (Terme in eckigen Klammern sind optional, ein Media Type kann mehrere Parameter haben):"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'Typ "/" [Baum "."] Subtyp ["+" Suffix] *[";" Parameter]\n')),Object(a.b)("p",null,"Beispiele f\xfcr Media Types sind ",Object(a.b)("inlineCode",{parentName:"p"},"text/html; charset=UTF-8")," f\xfcr UTF-8-kodierte HTML-Dokumente, ",Object(a.b)("inlineCode",{parentName:"p"},"image/jpeg")," f\xfcr JPEG-Bilder,\n",Object(a.b)("inlineCode",{parentName:"p"},"application/vnd.openxmlformats-officedocument.presentationml.presentation")," f\xfcr Powerpoint-Pr\xe4sentationen oder\n",Object(a.b)("inlineCode",{parentName:"p"},"application/vnd.apple.installer+xml")," f\xfcr Apples Installer-Pakete. Derzeit gibt es rund 1400 ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"http://www.iana.org/assignments/media-types/media-types.xhtml"}),"offizielle, von der IANA anerkannte Media Types"),"."),Object(a.b)("h3",{id:"typen"},"Typen"),Object(a.b)("p",null,"Derzeit sind folgende Typen registriert:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"text")," f\xfcr menschenlesbare, in Textformat vorliegende Daten, wie z.B. ",Object(a.b)("inlineCode",{parentName:"li"},"text/html")," f\xfcr HTML-Dokumente oder ",Object(a.b)("inlineCode",{parentName:"li"},"text/plain")," f\xfcr allgemeine Textdateien. Text-Typen werden oft erg\xe4nzt durch die Angabe einer Zeichenkodierung erg\xe4nzt, z.B.  ",Object(a.b)("inlineCode",{parentName:"li"},"text/html; charset=UTF-8")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"image")," f\xfcr Bilddaten, der Subtyp gibt dabei den genauen Bildtyp an, z.B. ",Object(a.b)("inlineCode",{parentName:"li"},"image/jpeg")," oder ",Object(a.b)("inlineCode",{parentName:"li"},"image/png")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"audio")," f\xfcr Audiodaten, der Subtyp gibt wiederum das Format an, z.B. ",Object(a.b)("inlineCode",{parentName:"li"},"audio/mp3")," oder ",Object(a.b)("inlineCode",{parentName:"li"},"audio/ogg")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"video")," f\xfcr Videodaten, der Subtyp gibt wie gehabt das Format an, z.B. ",Object(a.b)("inlineCode",{parentName:"li"},"video/mpeg")," oder ",Object(a.b)("inlineCode",{parentName:"li"},"video/ogg")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"application")," f\xfcr Datenformate, die zu keinem anderen Format passen und von Anwendungen/Programmen verarbeitet werden (z.B. ",Object(a.b)("inlineCode",{parentName:"li"},"application/msword")," f\xfcr Word-Dokumente oder ",Object(a.b)("inlineCode",{parentName:"li"},"application/octet-stream")," f\xfcr allgemeine Bin\xe4rdaten)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"multipart")," f\xfcr Daten, die sich aus mehreren Teilen unterschiedlichen Typs zusammensetzen, z.B. ",Object(a.b)("inlineCode",{parentName:"li"},"multipart/form-data")," f\xfcr Daten aus HTML-Formularen oder ",Object(a.b)("inlineCode",{parentName:"li"},"multipart/message")," bei E-Mails, die geforwardete E-Mails beinhalten"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"font")," f\xfcr Schriftarten, z.B. ",Object(a.b)("inlineCode",{parentName:"li"},"font/ttf")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"example")," als Platzhalter in Beispielcode"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"model")," f\xfcr 3D-Modelle u.\xe4., z.B. ",Object(a.b)("inlineCode",{parentName:"li"},"model/3mf")," oder ",Object(a.b)("inlineCode",{parentName:"li"},"model/vml"))),Object(a.b)("h3",{id:"b\xe4ume"},"B\xe4ume"),Object(a.b)("p",null,"Es gibt folgende B\xe4ume:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Standards f\xfcr Media Types, die von allgemeiner Bedeutung sind. Der Standards-Baum wird nicht angegeben: ",Object(a.b)("inlineCode",{parentName:"li"},"text/html"),", ",Object(a.b)("inlineCode",{parentName:"li"},"image/jpeg"),", ... . Standards m\xfcssen an die IANA \xfcbermittelt werden, werden dort einem Experten-Review unterzogen und dann ver\xf6ffentlicht."),Object(a.b)("li",{parentName:"ul"},"Vendor-Baum ",Object(a.b)("inlineCode",{parentName:"li"},"vnd")," f\xfcr Typen, die mit \xf6ffentlich verf\xfcgbaren Software-Produkten verwendet werden, z.B. ",Object(a.b)("inlineCode",{parentName:"li"},"application/vnd.openxmlformats-officedocument.presentationml.presentation")," oder ",Object(a.b)("inlineCode",{parentName:"li"},"application/vnd.amazon.ebook"),". Typen aus diesem Baum ",Object(a.b)("em",{parentName:"li"},"k\xf6nnen")," der IANA f\xfcr Reviews geschickt werden."),Object(a.b)("li",{parentName:"ul"},"Personal/Vanity-Baum ",Object(a.b)("inlineCode",{parentName:"li"},"prs")," f\xfcr Typen, die f\xfcr Testzwecke oder in nicht \xf6ffentlich verf\xfcgbaren Produkten verwendet werden, z.B. ",Object(a.b)("inlineCode",{parentName:"li"},"application/prs.c02.funnydata"),". Typen aus diesem Baum ",Object(a.b)("em",{parentName:"li"},"k\xf6nnen")," der IANA f\xfcr Reviews geschickt werden."),Object(a.b)("li",{parentName:"ul"},"Unregistrierte Typen im ",Object(a.b)("inlineCode",{parentName:"li"},"x"),"-Baum, der nur f\xfcr interne/private Zwecke genutzt werden soll, z.B. ",Object(a.b)("inlineCode",{parentName:"li"},"text/x.michael.bigdb"))),Object(a.b)("p",null,"Eine Liste der h\xe4ufigsten MIME-Typen ist u.a. ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types"}),"bei Mozilla")," zu finden."),Object(a.b)("h2",{id:"verwendung-in-http-headern"},"Verwendung in HTTP-Headern"),Object(a.b)("p",null,"In HTTP-Headern werden Media Types u.a. im Request-Header ",Object(a.b)("inlineCode",{parentName:"p"},"Accept")," und im Response-Header ",Object(a.b)("inlineCode",{parentName:"p"},"Content-Type")," verwendet. Im ",Object(a.b)("inlineCode",{parentName:"p"},"Accept"),"-Header gibt der Client an, welche Datenformate er erwartet und unterst\xfctzt, kann mit dem Q-Wert zus\xe4tzlich angeben, welche Media Types bevorzugt werden:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\n")))}p.isMDXComponent=!0},173:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return s}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},c=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=i,s=c["".concat(l,".").concat(u)]||c[u]||m[u]||a;return t?r.a.createElement(s,d(d({ref:n},b),{},{components:t})):r.a.createElement(s,d({ref:n},b))}));function s(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var b=2;b<a;b++)l[b]=t[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);