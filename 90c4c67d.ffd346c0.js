(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return o}));var r=t(2),i=t(9),a=(t(0),t(174)),s={id:"html-intro",title:"HTML - HyperText Markup Language",sidebar_label:"HTML"},d={id:"html-intro",title:"HTML - HyperText Markup Language",description:"HTML steht f\xfcr HyperText Markup Language. Wof\xfcr Hypertext steht, wurde ja bereits im Kontext von HTTP gekl\xe4rt, was",source:"@site/docs/html_intro.mdx",permalink:"/webbasics/docs/html-intro",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/html_intro.mdx",sidebar_label:"HTML",sidebar:"someSidebar",previous:{title:"URLs - Wie werden Ressourcen im Web identifiziert?",permalink:"/webbasics/docs/uris-urls"},next:{title:"HTML - Elemente",permalink:"/webbasics/docs/html-elements"}},l=[{value:"Markup-Sprachen",id:"markup-sprachen",children:[]},{value:"Geschichte von HTML",id:"geschichte-von-html",children:[]},{value:"Bausteine eines HTML-Dokuments",id:"bausteine-eines-html-dokuments",children:[{value:"Doctype-Deklaration",id:"doctype-deklaration",children:[]},{value:"Elemente",id:"elemente",children:[]},{value:"Attribute",id:"attribute",children:[]}]},{value:"Quellen",id:"quellen",children:[]}],c={rightToc:l};function o(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"HTML steht f\xfcr ",Object(a.b)("em",{parentName:"p"},"HyperText Markup Language"),". Wof\xfcr ",Object(a.b)("strong",{parentName:"p"},"Hypertext")," steht, wurde ja bereits im Kontext von HTTP gekl\xe4rt, was\neine Sprache ist, ist wohl auch in diesem Zusammenhang klar. Was sind aber Markup-Sprachen?"),Object(a.b)("h2",{id:"markup-sprachen"},"Markup-Sprachen"),Object(a.b)("p",null,"Der Begriff ",Object(a.b)("em",{parentName:"p"},"Markup")," kommt aus dem Englischen und wurde dort von Schriftsetzer",Object(a.b)("em",{parentName:"p"},"innen verwendet. Als Markup wurden Notizen in Manuskripten bezeichnet,\ndie den Schriftsetzer"),"innen typographische Informationen zum Text gaben: Ob und wie Textstellen hervorgehoben werden sollen, wie Texte zu formatieren sind,... .\nFolglich wurde der Begriff dann auch f\xfcr die Sprachen f\xfcr computerbasierten Textsatzsysteme wie troff oder TeX bzw. LaTeX auf \xfcbernommen. Markup-Sprachen\nsind also menschen- und maschinenlesbare Sprachen, mit denen Texte formatiert und gegliedert werden k\xf6nnen. HTML ist wohl die bekannteste Markup-Sprache und war urspr\xfcnglich auch prim\xe4r zur Formatierung und Gliederung von Dokumenten, Artikeln und B\xfcchern gedacht (siehe ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#1"}),"[1]"),"). HTML hat sich aber zu einer Sprache entwickelt, mit der auch die Struktur moderner Webanwendungen beschrieben werden kann."),Object(a.b)("p",null,"Neben HTML gibt es zahlreiche weitere Markup-Sprachen, wie zum Beispiel das oben genannte TeX/LaTeX, Markdown, Wikitext und zahlreiche XML-basierte Auszeichnungssprachen wie MathML, MusicXML oder das Open Document Format (ODF)."),Object(a.b)("h2",{id:"geschichte-von-html"},"Geschichte von HTML"),Object(a.b)("p",null,"Wie bereits erw\xe4hnt war die urspr\xfcngliche Idee von Tim Berners-Lee bei der Entwicklung von HTML, eine Sprache zur Auszeichnung von Dokumenten wie Artikeln,\nB\xfcchern oder Tutorials zu entwickeln. Die Urversion 1992 enthielt daher auch nur Elemente, mit denen \xdcberschriften, Abs\xe4tze und Zeilenumbr\xfcche dargestellt\nwerden konnten und Dokumente \xfcber Links miteinander verkn\xfcpft werden konnten.\nAuch die n\xe4chste HTML-Version 1993 hatte noch keine offizielle Versionsnummer, sie enthielt bereits Elemente zur Formatierung von Text (fett, kursiv, ...) und zum\nEinbinden von Bildern in HTML-Seiten."),Object(a.b)("p",null,"HTML 2.0 wurde 1995 verabschiedet, es wurde um Elemente f\xfcr Formulare und Tabellen erweitert, au\xdferdem wurde es damit m\xf6glich, Sonderzeichen wie\nUmlaute darzustellen. In den folgenden Jahren kam es zum bereits erw\xe4hnten Browserkrieg zwischen Internet Explorer und Netscape Navigator. Microsoft und Netscape\nversuchten, durch nicht-standardisierte Erweiterungen am HTML-Standard den jeweiligen Konkurrenten auszustechen. Die Versionen 3.0 und 3.1 wurden daher\n\xfcbersprungen, im Jahr 1997 erschien der HTML-Standard 3.2, der Unterst\xfctzung f\xfcr Applets brachte. Applets waren in Java geschriebene Programme, die direkt in\nWebseiten eingebunden werden konnten. "),Object(a.b)("p",null,"Sp\xe4ter im Jahr 1997 wurde auch HTML 4.0 verabschiedet, diese Version brachte Unterst\xfctzung von Stylesheets (CSS), Skripte (JavaScript bzw. JScript) und Frames.\nDieser Standard war bis zum Jahr 2014 (abgesehen von kleinen \xc4nderungen in HTML 4.01 im Jahr 1999) der g\xfcltige Standard. Im W3C arbeitete man an einem neuen,\nXML-basierten HTML-Standard, verlor aber dabei den Fokus auf notwendige \xc4nderungen an den HTML-Standards: Webseiten wurden nicht mehr nur auf\nDesktop-Ger\xe4ten dargestellt, Webanwendungen wurden zunehmend komplexer und das Web wurde zur Plattform f\xfcr Spiele, soziale Medien, Office-Suiten und vieles mehr.\nBereits 2004 schlossen sich Apple, Mozilla und Opera, drei der damals vier wichtigsten Browser-Hersteller, zur Web\nHypertext Application Technology Working Group ",Object(a.b)("strong",{parentName:"p"},"WHATWG")," zusammen, deren Ziel es ist, HTML und\nandere Web-Standards kontinuierlich weiterzuentwickeln. Heute wird die WHATWG von Apple, Mozilla, Google und Microsoft gesteuert. Diese Arbeitsgruppe\nstartete unter anderem die Entwicklung des neuen Standards ",Object(a.b)("strong",{parentName:"p"},"HTML5"),", parallel zur Arbeit des W3C an einem neuen HTML-Standard. Nach jahrelangen Konflikten\neinigten sich die WHATWG und das W3C 2019 darauf, dass die WHATWG f\xfcr den HTML-Standard zust\xe4ndig ist. Dieser neue HTML-Standard wird mittlerweile als\nsich st\xe4ndig weiterentwickelnder ",Object(a.b)("strong",{parentName:"p"},"HTML Living Standard")," bezeichnet, auch wenn die Bezeichnung ",Object(a.b)("strong",{parentName:"p"},"HTML5")," im allgemeinen Sprachgebrauch noch immer \xfcblich ist.\nDie jeweils aktuelle Version des HTML-Standards ist auf ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://html.spec.whatwg.org"}),"https://html.spec.whatwg.org")," zu finden. Alle g\xe4ngigen Browser unterst\xfctzen diesen\nStandard weitestgehend."),Object(a.b)("p",null,"Diese Unterlagen beziehen sich ausschlie\xdflich auf den ",Object(a.b)("strong",{parentName:"p"},"HTML Living Standard"),". Wann immer von HTML oder HTML5 die Rede ist, ist damit der aktuelle\n",Object(a.b)("strong",{parentName:"p"},"HTML Living Standard")," gemeint."),Object(a.b)("h2",{id:"bausteine-eines-html-dokuments"},"Bausteine eines HTML-Dokuments"),Object(a.b)("p",null,"Jedes HTML-Dokument beginnt mit der sogenannten ",Object(a.b)("strong",{parentName:"p"},"Doctype-Deklaration"),", die deklariert, dass das Dokument ein HTML-Dokument ist. Danach folgt das eigentliche\nDokument, das aus ",Object(a.b)("strong",{parentName:"p"},"Elementen")," und ihrem ",Object(a.b)("strong",{parentName:"p"},"Inhalt")," sowie den ",Object(a.b)("strong",{parentName:"p"},"Attributen")," dieser Elemente besteht."),Object(a.b)("p",null,"HTML-Dokumente m\xfcssen laut Standard immer UTF8-kodiert sein (siehe ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://de.wikipedia.org/wiki/UTF-8"}),"https://de.wikipedia.org/wiki/UTF-8")," f\xfcr Informationen zu UTF-8)."),Object(a.b)("h3",{id:"doctype-deklaration"},"Doctype-Deklaration"),Object(a.b)("p",null,"Mit der Doctype-Deklaration wird dem Browser (oder einem anderen Programm, mit dem ein HTML-Dokument ge\xf6ffnet wird) mitgeteilt, um welche Art von\nDokument es sich handelt. Im Falle von HTML-Dokumenten sieht die Doctype-Deklaration wie folgt aus:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<!DOCTYPE html>\n")),Object(a.b)("p",null,"Wobei weder ",Object(a.b)("inlineCode",{parentName:"p"},"DOCTYPE")," noch ",Object(a.b)("inlineCode",{parentName:"p"},"html")," case-sensitiv sind, ",Object(a.b)("inlineCode",{parentName:"p"},"<!doctype HTML>"),") ist also ebenso g\xfcltig. Die Doctype-Deklaration sollte ganz am Beginn eines\nHTML-Dokuments stehen."),Object(a.b)("h3",{id:"elemente"},"Elemente"),Object(a.b)("p",null,"Elemente bestehen aus einem einzelnen (Start-)Tag oder einem Tag-Paar, bestehend aus Start- und Endtag. Ein Starttag beginnt mit dem Zeichen ",Object(a.b)("inlineCode",{parentName:"p"},"<"),",\ndarauf folgt der Elementname (z.B. ",Object(a.b)("inlineCode",{parentName:"p"},"img")," f\xfcr ein Bild, ",Object(a.b)("inlineCode",{parentName:"p"},"h1")," f\xfcr eine \xdcberschrift erster Ordnung oder ",Object(a.b)("inlineCode",{parentName:"p"},"p")," f\xfcr einen Absatz). Danach folgen\noptionale Attribute, mit dem Zeichen ",Object(a.b)("inlineCode",{parentName:"p"},">")," wird der Tag wieder geschlossen. Dann folgt der ",Object(a.b)("strong",{parentName:"p"},"Inhalt"),", gefolgt vom Endtag. Der Endtag beginnt mit ",Object(a.b)("inlineCode",{parentName:"p"},"</"),",\ngefolgt vom Elementnamen und dem abschlie\xdfenden ",Object(a.b)("inlineCode",{parentName:"p"},">"),". Hier sind ein paar Beispiele von Elementen ohne Attribute:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<h1>Das ist eine \xdcberschrift</h1>\n<p>Das ist ein Absatz, mit dem br-Element <br> macht man einen Zeilenumbruch. br hat keinen Endtag, ein Zeilenumbruch hat ja auch (im Gegensatz\nzu einer \xdcberschrift oder einem Absatz) weder Anfang noch Ende.</p>\n")),Object(a.b)("p",null,"Hier ist das HTML-Dokument als JSFiddle:"),Object(a.b)("iframe",{width:"100%",height:"250",src:"//jsfiddle.net/michivo/f50y1cp8/3/embedded/html,result/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}),Object(a.b)("p",null,"Was in diesem Beispiel auch ersichtlich ist: Zeilenumbr\xfcche in Ihrem HTML-File werden im Browser nicht als solche dargestellt. Sie m\xfcssen\nZeilenumbr\xfcche immer explizit mit ",Object(a.b)("inlineCode",{parentName:"p"},"<br>")," angeben!"),Object(a.b)("h3",{id:"attribute"},"Attribute"),Object(a.b)("p",null,"Attribute enthalten Informationen zu einem Element. In der Regel beginnen sie mit dem Attributnamen, gefolgt von einem ",Object(a.b)("inlineCode",{parentName:"p"},"=")," und dem Attributwert. Der Attributwert\nist meistens in Anf\xfchrungszeichen gehalten, dabei werden doppelte Anf\xfchrungszeichen bevorzugt. Es gibt auch Attribute, die keinen Wert haben, in solchen F\xe4llen\nwird nur der Attributname angegeben:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'<a href="https://www.campus02.at" target="_blank">Link zum Campus 02, \xf6ffnet sich in einem neuen Tab</a><br>\n<script src="jquery.js" async><\/script> \x3c!-- das Skript jquery.js soll asynchron (async) geladen werden --\x3e\n<img src="https://www.campus02.at/wp-content/themes/campus02/assets/img/logo.png" width=214 height=70 alt=\'Logo des "Campus 02"\'>\n')),Object(a.b)("p",null,"Das letzte Beispiel bindet ein Bild ein. Es zeigt anhand der Attribute ",Object(a.b)("inlineCode",{parentName:"p"},"height")," und ",Object(a.b)("inlineCode",{parentName:"p"},"width"),", dass man die Anf\xfchrungszeichen weglassen kann. Das\nAttribut ",Object(a.b)("inlineCode",{parentName:"p"},"alt")," zeigt, dass man auch einfache statt doppelter Anf\xfchrungszeichen verwenden kann, wenn z.B. im Attributwert ein doppeltes Anf\xfchrungszeichen vorkommt."),Object(a.b)("p",null,"In diesem Beispiel ist auch ein Kommentar zu sehen, Kommentare in HTML beginnen mit ",Object(a.b)("inlineCode",{parentName:"p"},"\x3c!--")," und enden mit ",Object(a.b)("inlineCode",{parentName:"p"},"--\x3e"),"."),Object(a.b)("iframe",{width:"100%",height:"250",src:"//jsfiddle.net/michivo/hn8y3f49/4/embedded/html,result/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}),Object(a.b)("h2",{id:"quellen"},"Quellen"),Object(a.b)("a",{id:"hypertext"},"[1]")," https://www.w3.org/DesignIssues/Uses.html")}o.isMDXComponent=!0},174:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return p}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),o=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},u=function(e){var n=o(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=o(t),m=r,p=u["".concat(s,".").concat(m)]||u[m]||b[m]||a;return t?i.a.createElement(p,d(d({ref:n},c),{},{components:t})):i.a.createElement(p,d({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,s[1]=d;for(var c=2;c<a;c++)s[c]=t[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);