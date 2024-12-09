"use strict";(self.webpackChunkweb_basics=self.webpackChunkweb_basics||[]).push([[6777],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=c(t),m=i,h=g["".concat(l,".").concat(m)]||g[m]||u[m]||a;return t?r.createElement(h,s(s({ref:n},d),{},{components:t})):r.createElement(h,s({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var r=t(8168),i=t(8587),a=(t(6540),t(5680));const s=["components"],o={id:"storage-intro",title:"Clientseitig Daten speichern",sidebar_label:"Einf\xfchrung"},l=void 0,c={unversionedId:"storage-intro",id:"storage-intro",title:"Clientseitig Daten speichern",description:"In vielen Webanwendungen ist es erw\xfcnscht oder gar notwendig, clientseitig Daten zu speichern.",source:"@site/docs/storage_intro.md",sourceDirName:".",slug:"/storage-intro",permalink:"/webbasics/docs/storage-intro",draft:!1,editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/storage_intro.md",tags:[],version:"current",frontMatter:{id:"storage-intro",title:"Clientseitig Daten speichern",sidebar_label:"Einf\xfchrung"},sidebar:"someSidebar",previous:{title:"Lernziele",permalink:"/webbasics/docs/css-learnings"},next:{title:"Cookies",permalink:"/webbasics/docs/storage-cookies"}},d={},g=[{value:"Geschichte",id:"geschichte",level:2}],u={toc:g},m="wrapper";function h(e){let{components:n}=e,t=(0,i.A)(e,s);return(0,a.yg)(m,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"In vielen Webanwendungen ist es erw\xfcnscht oder gar notwendig, clientseitig Daten zu speichern.\nDer Browser soll also lokal Daten speichern, das kann u.a. f\xfcr folgende Zwecke sinnvoll sein:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Anmeldedaten")," werden im Browser gespeichert und dem Server bei jeder Anfrage mitgeschickt, dort auf ihre G\xfcltigkeit \xfcberpr\xfcft"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Trackingdaten")," werden dazu eingesetzt, damit das Nutzer","*","innenverhalten nachverfolgt und analysiert werden kann. Das ist nicht unbedingt im Interesse der Benutzer","*","innen, sehr wohl aber im Interesse von Internetunternehmen wie Google, Facebook usw., die damit Profile erstellen k\xf6nnen und Werbung besser platzieren k\xf6nnen"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Benutzer*innendefinierte Einstellungen"),", so z.B. das jeweils bevorzugte Farbschema"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Anwendungsdaten"),", wie z.B. ein Dokument, an dem man gerade in einer browserbasierten Office-Anwendung arbeiten")),(0,a.yg)("p",null,"Die erw\xe4hnten Anwendungsf\xe4lle unterscheiden sich grundlegend: Bei Anmelde- und Trackingdaten handelt es sich um recht geringe Datenmengen, die aber bei jeder Anfrage mitgeschickt werden sollen. Benutzer*innendefinierte Einstellungen m\xfcssen gegebenenfalls gar nicht an den Server geschickt werden, die Datenmengen sind auch hier gering. Anwendungsdaten k\xf6nnen dagegen teils mehrere Megabyte gro\xdf sein, m\xfcssen daf\xfcr aber nur zu bestimmten Zeitpunkten an einen Server \xfcbertragen werden (z.B. beim Speichern\neines lokal bearbeiteten Dokuments). F\xfcr die unterschiedlichen Anwendungsf\xe4lle gibt es auch unterschiedliche Technologien, mit denen Daten clientseitig gespeichert werden:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Cookies")," werden f\xfcr kleine Datenmengen (bis 4kB) verwendet, die clientseitig gespeichert und bei jedem Request mitgeschickt werden. Cookies werden im n\xe4chsten Abschnitt genauer behandelt"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Web Storage (lokal)")," wird verwendet, um Daten persistent auf einem Client zu speichern. Sie bleiben auch nach dem Schlie\xdfen des Browsers bestehen, eignen sich also z.B. zum Speichern von Einstellungen. Die Datenmengen k\xf6nnen hier gr\xf6\xdfer sein (\xfcblicherweise 5 MB pro Domain)."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Web Storage (session-spezifisch)"),' wird verwendet, um Daten auf einem Client zu speichern, die spezifisch f\xfcr eine "Sitzung" (einen Tab/ein Fenster) sind. So k\xf6nnen Sie z.B. zwei Dokumente in parallel in zwei Tabs mit der gleichen Webanwendung bearbeiten und diese im session-spezifischen Web Storage hinterlegen. Wird eine Sitzung beendet, gehen die Daten verloren, wenn sie nicht davor an den Server \xfcbertragen wurden.')),(0,a.yg)("h2",{id:"geschichte"},"Geschichte"),(0,a.yg)("p",null,"Cookies wurden 1994 von Netscape erdacht und in deren Browser unterst\xfctzt, 1995 zog auch Microsoft mit dem Internet Explorer nach. Die urspr\xfcngliche Idee hinter Cookies war\nes, die Datenmenge, die auf Servern gespeichert werden muss, zu reduzieren und solche Daten stattdessen clientseitig zu speichern (z.B. Inhalte eines Einkaufswagens, ...). Cookies dienten weiters dazu, auf dem eigentlich zustandslosen Protokoll HTTP auch zustandsbehaftete Anwendungen bauen zu k\xf6nnen. Beim Login von Webanwendungen werden meist Benutzer","*","innenname und Passwort vom Browser an den Server \xfcbertragen. Der Server validiert diese Daten dann, schickt dem Client anschlie\xdfend ein sogenanntes ",(0,a.yg)("em",{parentName:"p"},"Session-Cookie"),"\nmit dem sich der Client bei folgenden Anfragen authentifizieren kann."),(0,a.yg)("p",null,"Web Storage (auch DOM Storage) ist eine Weiterentwicklung von Cookies, die 2009 seit von der W3C/WHATWG als neuer Standard eingef\xfchrt wurde. Mit Web Storage k\xf6nnen wesentlich gr\xf6\xdfere Datenmengen gespeichert werden (mehrere MB statt mehrere KB). Im Unterschied zu Cookies werden die Daten im Web Storage nicht mit dem Server geteilt, sondern bleiben am Client. Im Rahmen dieses Skriptums wird Web Storage nicht weiter behandelt, Cookies werden im n\xe4chsten Abschnitt n\xe4her beschrieben."))}h.isMDXComponent=!0}}]);