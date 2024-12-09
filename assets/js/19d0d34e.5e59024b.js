"use strict";(self.webpackChunkweb_basics=self.webpackChunkweb_basics||[]).push([[8831],{5680:(e,n,r)=>{r.d(n,{xA:()=>l,yg:()=>m});var i=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=i.createContext({}),o=function(e){var n=i.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=o(e.components);return i.createElement(c.Provider,{value:n},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),h=o(r),g=t,m=h["".concat(c,".").concat(g)]||h[g]||d[g]||s;return r?i.createElement(m,a(a({ref:n},l),{},{components:r})):i.createElement(m,a({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,a=new Array(s);a[0]=g;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u[h]="string"==typeof e?e:t,a[1]=u;for(var o=2;o<s;o++)a[o]=r[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5741:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>u,metadata:()=>o,toc:()=>h});var i=r(8168),t=r(8587),s=(r(6540),r(5680));const a=["components"],u={id:"a11y-intro",title:"Accessibility - Barrierefreiheit",sidebar_label:"Einf\xfchrung"},c=void 0,o={unversionedId:"a11y-intro",id:"a11y-intro",title:"Accessibility - Barrierefreiheit",description:"Unter Accessibility (oder kurz A11Y), zu Deutsch Barrierefreiheit versteht man im Kontext von Webseiten, dass diese so gestaltet sind, dass sie von jeder\\m ohne Einschr\xe4nkungen genutzt werden k\xf6nnen. Das trifft insbesondere auf Menschen mit Beeintr\xe4chtigungen zu, also Leute die z.B. Einschr\xe4nkungen bez\xfcglich ihrer Wahrnehmung haben (Blindheit, Sehst\xf6rung, kognitive Einschr\xe4nkungen, ...), aber auch Menschen, die in ihrer Motorik eingeschr\xe4nkt sind. Es gibt Nutzer\\innen, die sich Inhalte mit einer Bildschirmlupe und/oder erh\xf6htem Kontrast ansehen, andere, die sich Seiteninhalte von Screenreadern vorlesen lassen, wiederum andere, die Braille-Leseger\xe4te verwenden. Es gibt Menschen, die ihren Browser nur \xfcber die Tastatur bedienen, andere, die nur \xfcber einen Touchscreen verf\xfcgen und welche, die ihren Rechner zum Beispiel mit einem Kopfstab oder \xfcber Sprachsteuerung bedienen. Wie man sieht, ist die Verwendung von Browsern wie Firefox, Safari oder Chrome auf klassischen Desktop- oder Laptop-Rechnern mit Tastatur und Maus zwar die h\xe4ufigste Art, mit Webseiten zu interagieren, beileibe aber nicht die einzige.",source:"@site/docs/a11y_intro.md",sourceDirName:".",slug:"/a11y-intro",permalink:"/webbasics/docs/a11y-intro",draft:!1,editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/a11y_intro.md",tags:[],version:"current",frontMatter:{id:"a11y-intro",title:"Accessibility - Barrierefreiheit",sidebar_label:"Einf\xfchrung"},sidebar:"someSidebar",previous:{title:"Lernziele",permalink:"/webbasics/docs/storage-learnings"},next:{title:"ARIA",permalink:"/webbasics/docs/a11y-aria"}},l={},h=[{value:"Rechtliche Situation",id:"rechtliche-situation",level:2},{value:"Richtlinien",id:"richtlinien",level:2}],d={toc:h},g="wrapper";function m(e){let{components:n}=e,r=(0,t.A)(e,a);return(0,s.yg)(g,(0,i.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"Unter ",(0,s.yg)("strong",{parentName:"p"},"Accessibility")," (oder kurz A11Y), zu Deutsch ",(0,s.yg)("em",{parentName:"p"},"Barrierefreiheit")," versteht man im Kontext von Webseiten, dass diese so gestaltet sind, dass sie von jeder","*","m ohne Einschr\xe4nkungen genutzt werden k\xf6nnen. Das trifft insbesondere auf Menschen mit Beeintr\xe4chtigungen zu, also Leute die z.B. Einschr\xe4nkungen bez\xfcglich ihrer Wahrnehmung haben (Blindheit, Sehst\xf6rung, kognitive Einschr\xe4nkungen, ...), aber auch Menschen, die in ihrer Motorik eingeschr\xe4nkt sind. Es gibt Nutzer","*","innen, die sich Inhalte mit einer Bildschirmlupe und/oder erh\xf6htem Kontrast ansehen, andere, die sich Seiteninhalte von Screenreadern vorlesen lassen, wiederum andere, die Braille-Leseger\xe4te verwenden. Es gibt Menschen, die ihren Browser nur \xfcber die Tastatur bedienen, andere, die nur \xfcber einen Touchscreen verf\xfcgen und welche, die ihren Rechner zum Beispiel mit einem Kopfstab oder \xfcber Sprachsteuerung bedienen. Wie man sieht, ist die Verwendung von Browsern wie Firefox, Safari oder Chrome auf klassischen Desktop- oder Laptop-Rechnern mit Tastatur und Maus zwar die h\xe4ufigste Art, mit Webseiten zu interagieren, beileibe aber nicht die einzige."),(0,s.yg)("p",null,"Wie schon mehrfach in diesem Skriptum erw\xe4hnt, beschreibt man mit HTML ja den Inhalt und die Struktur einer Seite, meist hat man dabei lediglich die Ausgabe auf einem gro\xdfen Bildschirm im Fokus, eventuell noch andere Bildschirmformate f\xfcr Mobiltelefone. Barrierefreies Design bedeutet, dass man beim Design einer Webseite nicht nur an sich selbst oder eine","*","n Standard-Benutzer","*","in denkt, sondern stets darauf achtet, dass s\xe4mtliche Inhalte auch f\xfcr Personen mit Einschr\xe4nkungen uneingeschr\xe4nkt nutzbar sind."),(0,s.yg)("h2",{id:"rechtliche-situation"},"Rechtliche Situation"),(0,s.yg)("p",null,"Der Bund ist nach dem Web-Zug\xe4nglichkeits-Gesetz dazu verpflichtet, beh\xf6rdliche Webseiten so zu gestalten, dass der Zugang f\xfcr alle Nutzerinnen und Nutzer uneingeschr\xe4nkt m\xf6glich ist. Arbeitet man also an einer Webanwendung des Bundes, ist Barrierefreiheit ohnehin verpflichtend. Im Privatbereich kommt au\xdferdem das Behindertengleichstellungsgesetz zum Tragen, das unverh\xe4ltnism\xe4\xdfige Barrieren, die eine Diskriminierung darstellen, verbietet. Das trifft auch auf Webseiten und Apps zu. Auch auf europ\xe4ischer Ebene hat sich die EU verpflichtet, s\xe4mtliche ihrer Webseiten barrierefrei zu gestalten. Barrierefreiheit ist also nicht nur aus ethischer und wirtschaftlicher Sicht sinnvoll, man ist dazu oft auch rechtlich verpflichtet."),(0,s.yg)("h2",{id:"richtlinien"},"Richtlinien"),(0,s.yg)("p",null,"Das W3C hat auf seiner Homepage umfassende Richtlinien f\xfcr barrierefreies Webdesign zusammengestellt, die aktuellste Version sind die ",(0,s.yg)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG/"},"Web Content Accessibility Guidelines (WCAG) 2.1")," aus dem Jahr 2018, es gibt auch eine ",(0,s.yg)("a",{parentName:"p",href:"https://www.einfach-fuer-alle.de/wcag2.0/"},"deutsche \xdcbersetzung der Version 2.0"),". In den Richtlinien gibt es jeweils Abschnitte zu den Themen"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Wahrnehmbarkeit (Textgr\xf6\xdfe, Kontraste, Anordnung von Elementen, Alternativdarstellungen, ...)"),(0,s.yg)("li",{parentName:"ul"},"Bedienung (Tastatur, Formulare, ...)"),(0,s.yg)("li",{parentName:"ul"},"Verst\xe4ndlichkeit (Formulierungen, Sprache, ...)"),(0,s.yg)("li",{parentName:"ul"},"Robustheit (Standarkonformit\xe4t, korrekte Verwendung von UI-Elementen)")),(0,s.yg)("p",null,"Im n\xe4chsten Abschnitt wird ein genauerer Blick auf die wichtigsten Grunds\xe4tze barrierefreien Webdesigns geworfen."))}m.isMDXComponent=!0}}]);