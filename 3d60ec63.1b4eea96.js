(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(2),i=t(9),a=(t(0),t(187)),s={id:"storage-intro",title:"Clientseitig Daten speichern",sidebar_label:"Einf\xfchrung"},o={id:"storage-intro",title:"Clientseitig Daten speichern",description:"In vielen Webanwendungen ist es erw\xfcnscht oder gar notwendig, clientseitig Daten zu speichern.",source:"@site/docs/storage_intro.md",permalink:"/webbasics/docs/storage-intro",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/storage_intro.md",sidebar_label:"Einf\xfchrung",sidebar:"someSidebar",previous:{title:"CSS Layouting",permalink:"/webbasics/docs/css-layout"},next:{title:"Cookies",permalink:"/webbasics/docs/storage-cookies"}},c=[{value:"Geschichte",id:"geschichte",children:[]}],l={rightToc:c};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In vielen Webanwendungen ist es erw\xfcnscht oder gar notwendig, clientseitig Daten zu speichern.\nDer Browser soll also lokal Daten speichern, das kann u.a. f\xfcr folgende Zwecke sinnvoll sein:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Anmeldedaten")," werden im Browser gespeichert und dem Server bei jeder Anfrage mitgeschickt, dort auf ihre G\xfcltigkeit \xfcberpr\xfcft"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Trackingdaten")," werden dazu eingesetzt, damit das Nutzer","*","innenverhalten nachverfolgt und analysiert werden kann. Das ist nicht unbedingt im Interesse der Benutzer","*","innen, sehr wohl aber im Interesse von Internetunternehmen wie Google, Facebook usw., die damit Profile erstellen k\xf6nnen und Werbung besser platzieren k\xf6nnen"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Benutzer*innendefinierte Einstellungen"),", so z.B. das jeweils bevorzugte Farbschema"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Anwendungsdaten"),", wie z.B. ein Dokument, an dem man gerade in einer browserbasierten Office-Anwendung arbeiten")),Object(a.b)("p",null,"Die erw\xe4hnten Anwendungsf\xe4lle unterscheiden sich grundlegend: Bei Anmelde- und Trackingdaten handelt es sich um recht geringe Datenmengen, die aber bei jeder Anfrage mitgeschickt werden sollen. Benutzer*innendefinierte Einstellungen m\xfcssen gegebenenfalls gar nicht an den Server geschickt werden, die Datenmengen sind auch hier gering. Anwendungsdaten k\xf6nnen dagegen teils mehrere Megabyte gro\xdf sein, m\xfcssen daf\xfcr aber nur zu bestimmten Zeitpunkten an einen Server \xfcbertragen werden (z.B. beim Speichern\neines lokal bearbeiteten Dokuments). F\xfcr die unterschiedlichen Anwendungsf\xe4lle gibt es auch unterschiedliche Technologien, mit denen Daten clientseitig gespeichert werden:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Cookies")," werden f\xfcr kleine Datenmengen (bis 4kB) verwendet, die clientseitig gespeichert und bei jedem Request mitgeschickt werden. Cookies werden im n\xe4chsten Abschnitt genauer behandelt"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Web Storage (lokal)")," wird verwendet, um Daten persistent auf einem Client zu speichern. Sie bleiben auch nach dem Schlie\xdfen des Browsers bestehen, eignen sich also z.B. zum Speichern von Einstellungen. Die Datenmengen k\xf6nnen hier gr\xf6\xdfer sein (\xfcblicherweise 5 MB pro Domain)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Web Storage (session-spezifisch)"),' wird verwendet, um Daten auf einem Client zu speichern, die spezifisch f\xfcr eine "Sitzung" (einen Tab/ein Fenster) sind. So k\xf6nnen Sie z.B. zwei Dokumente in parallel in zwei Tabs mit der gleichen Webanwendung bearbeiten und diese im session-spezifischen Web Storage hinterlegen. Wird eine Sitzung beendet, gehen die Daten verloren, wenn sie nicht davor an den Server \xfcbertragen wurden.')),Object(a.b)("h2",{id:"geschichte"},"Geschichte"),Object(a.b)("p",null,"Cookies wurden 1994 von Netscape erdacht und in deren Browser unterst\xfctzt, 1995 zog auch Microsoft mit dem Internet Explorer nach. Die urspr\xfcngliche Idee hinter Cookies war\nes, die Datenmenge, die auf Servern gespeichert werden muss, zu reduzieren und solche Daten stattdessen clientseitig zu speichern (z.B. Inhalte eines Einkaufswagens, ...). Cookies dienten weiters dazu, auf dem eigentlich zustandslosen Protokoll HTTP auch zustandsbehaftete Anwendungen bauen zu k\xf6nnen. Beim Login von Webanwendungen werden meist Benutzer","*","innenname und Passwort vom Browser an den Server \xfcbertragen. Der Server validiert diese Daten dann, schickt dem Client anschlie\xdfend ein sogenanntes ",Object(a.b)("em",{parentName:"p"},"Session-Cookie"),"\nmit dem sich der Client bei folgenden Anfragen authentifizieren kann."),Object(a.b)("p",null,"Web Storage (auch DOM Storage) ist eine Weiterentwicklung von Cookies, die 2009 seit von der W3C/WHATWG als neuer Standard eingef\xfchrt wurde. Mit Web Storage k\xf6nnen wesentlich gr\xf6\xdfere Datenmengen gespeichert werden (mehrere MB statt mehrere KB). Im Unterschied zu Cookies werden die Daten im Web Storage nicht mit dem Server geteilt, sondern bleiben am Client. Im Rahmen dieses Skriptums wird Web Storage nicht weiter behandelt, Cookies werden im n\xe4chsten Abschnitt n\xe4her beschrieben."))}d.isMDXComponent=!0},187:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),d=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},g=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),g=r,m=u["".concat(s,".").concat(g)]||u[g]||b[g]||a;return t?i.a.createElement(m,o(o({ref:n},l),{},{components:t})):i.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);