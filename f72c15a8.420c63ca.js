(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{182:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return c}));var i=t(2),r=t(9),a=(t(0),t(187)),o=t(190),s={id:"storage-cookies",title:"Cookies",sidebar_label:"Cookies"},d={id:"storage-cookies",title:"Cookies",description:"Den meisten Nutzer*innen sind Cookies vor allem deswegen ein Begriff, weil man bei den meisten Seiten dem Einsatz eben dieser Cookies zustimmen muss.",source:"@site/docs/storage_cookies.mdx",permalink:"/webbasics/docs/storage-cookies",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/storage_cookies.mdx",sidebar_label:"Cookies",sidebar:"someSidebar",previous:{title:"Clientseitig Daten speichern",permalink:"/webbasics/docs/storage-intro"},next:{title:"Gefahren von Cookies",permalink:"/webbasics/docs/storage-threats"}},l=[{value:"Implementierung",id:"implementierung",children:[]},{value:"Attribute",id:"attribute",children:[]},{value:"First-Party vs Third-Party-Cookies",id:"first-party-vs-third-party-cookies",children:[]},{value:"Links",id:"links",children:[]}],b={rightToc:l};function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Den meisten Nutzer",Object(a.b)("em",{parentName:"p"},"innen sind Cookies vor allem deswegen ein Begriff, weil man bei den meisten Seiten dem Einsatz eben dieser Cookies zustimmen muss.\nWas aber sind "),"Cookies* genau?"),Object(a.b)("img",{alt:"Delicious Cookie",src:Object(o.a)("img/cookie.svg"),height:"300"}),Object(a.b)("p",null,"Cookies sind Daten, die vom Client (also dem Browser) beim Besuch einer Webseite gespeichert werden. HTTP an sich ist ja ein ",Object(a.b)("em",{parentName:"p"},"zustandsloses")," Protokoll,\nauf HTTP-Ebene ist somit jede Anfrage unabh\xe4ngig von jenen davor und danach zu betrachten. Um trotzdem Webanwendungen mit Zustandsinformationen umsetzen\nzu k\xf6nnen, braucht es eine L\xf6sung, wie dieser Zustand abgebildet werden. Dieser Zustand kann z.B. aus dem Einkaufswagen eines Online-Shops, Login-Daten,\nTrackingdaten, Einstellungen oder anderen Daten bestehen. Die L\xf6sung daf\xfcr sind ",Object(a.b)("em",{parentName:"p"},"Cookies"),". Ein Cookie besteht aus"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"einem Namen"),Object(a.b)("li",{parentName:"ul"},"einem Wert (L\xe4nge: Maximal 4kB)"),Object(a.b)("li",{parentName:"ul"},"Attributen, wie z.B. dem Ablaufdatum, der Dom\xe4ne, sowie Flags (",Object(a.b)("inlineCode",{parentName:"li"},"HttpOnly"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Secure"),", ...)")),Object(a.b)("h2",{id:"implementierung"},"Implementierung"),Object(a.b)("p",null,"Cookies werden, wie bereits bei den Kapiteln zu HTTP beschrieben, in HTTP-Headern \xfcbertragen. Der Server weist mit dem ",Object(a.b)("inlineCode",{parentName:"p"},"Set-Cookie"),"-Header den Client an, ein oder mehrere Cookies zu speichern. Hier ist der Anfang einer Beispielantwort eines Servers, mit der zwei Cookies gesetzt werden:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"HTTP/1.0 200 OK\nContent-type: text/html\nSet-Cookie: theme=midnight\nSet-Cookie: sessionToken=4079935355c44e3ea04eccfb924fd6ab; Expires=Wed, 01 Feb 2021 12:34:56 GMT; Secure; HttpOnly\n")),Object(a.b)("p",null,"Der Server setzt hier ein Cookie mit dem Namen ",Object(a.b)("inlineCode",{parentName:"p"},"theme")," und dem Wert ",Object(a.b)("inlineCode",{parentName:"p"},"midnight"),", sowie ein weiteres Cookie mit dem Namen ",Object(a.b)("inlineCode",{parentName:"p"},"sessionCookie")," und dem Wert ",Object(a.b)("inlineCode",{parentName:"p"},"4079935355c44e3ea04eccfb924fd6ab")," sowie den Attributen ",Object(a.b)("inlineCode",{parentName:"p"},"Expires")," (Ablaufdatum), ",Object(a.b)("inlineCode",{parentName:"p"},"Secure")," und ",Object(a.b)("inlineCode",{parentName:"p"},"HttpOnly"),". Der Browser/Client speichert diese Cookies und\n\xfcbertr\xe4gt sie bei nachfolgenden Anfragen an den Server wieder im HTTP-Header ",Object(a.b)("inlineCode",{parentName:"p"},"Cookie"),". Um ein Cookie wieder zu l\xf6schen, wird in der Regel vom Server ein ",Object(a.b)("inlineCode",{parentName:"p"},"Set-Cookie"),"-Header mit leerem Wert (optional) und standardgem\xe4\xdf einem Ablaufdatum in der Vergangenheit geschickt, also z.B.: "),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"HTTP/1.0 200 OK\nContent-type: text/html\nSet-Cookie: sessionToken=; Expires=Wed, 01 Feb 2020 12:34:56 GMT\n")),Object(a.b)("h2",{id:"attribute"},"Attribute"),Object(a.b)("p",null,"Wie im obigen Beispiel gesehen, kann ein Cookie mehrere Attribute haben. Die wichtigsten sind:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Expires"),": Der Wert dieses Attributs gibt an, bis zu welchem Zeitpunkt ein Cookie vom Client verwendet werden soll. Alternativ kann auch das Attribut ",Object(a.b)("inlineCode",{parentName:"li"},"max-age")," verwendet werden, das das maximale Alter in Sekunden enth\xe4lt. Ist keines der Attribute vorhanden, wird das Cookie vom Browser nicht persistiert, es wird also mit dem Ende der aktuellen Browser-Session gel\xf6scht."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"HTTPOnly"),": Wenn dieses Attribut (das keinen Wert hat) vorhanden ist, bedeutet das, dass Skripte im Client nicht berechtigt sind, auf das jeweilige Cookie zuzugreifen. Das wird vor allem aus Sicherheitsgr\xfcnden bei Cookies gemacht, die z.B. Zugriff auf sensible Daten erlauben w\xfcrden. Angriffe, bei denen externer JavaScript-Code auf solche Cookies zuzugreifen versucht, werden als XSS (Cross Site Scripting bezeichnet) und durch Verwendung dieses Attributs deutlich erschwert."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Secure"),": Cookies, die dieses Attribut haben, d\xfcrfen vom Client nur \xfcber verschl\xfcsselte Verbindungen (also \xfcber HTTPS) \xfcbertragen werden, wenn sie auch vom Server \xfcber eine solche Verbindung gesetzt wurden. Damit wird es deutlich erschwert, solche Cookies zu ",Object(a.b)("em",{parentName:"li"},"sniffen"),", also ihren Inhalt durch die Analyse nicht-verschl\xfcsselter Datenkan\xe4le abzugreifen."),Object(a.b)("li",{parentName:"ul"},"Die Attribute ",Object(a.b)("inlineCode",{parentName:"li"},"Domain")," und ",Object(a.b)("inlineCode",{parentName:"li"},"Path")," geben an, f\xfcr welche Domain bzw. welchen Pfad ein Cookie g\xfcltig sind. Sie sind vor allem dann wichtig, wo mehrere Anwendungen unter einer Domain erreichbar sind. Hat bei einem Cookie das ",Object(a.b)("inlineCode",{parentName:"li"},"Domain"),"-Attribut den Wert ",Object(a.b)("inlineCode",{parentName:"li"},"github.io"),", dann w\xfcrde der Browser dieses Cookie sowohl an ",Object(a.b)("inlineCode",{parentName:"li"},"michivo.github.io")," \xfcbertragen als auch an z.B. ",Object(a.b)("inlineCode",{parentName:"li"},"attacker.github.io"),". Wird kein Wert f\xfcr ",Object(a.b)("inlineCode",{parentName:"li"},"Domain")," bzw. ",Object(a.b)("inlineCode",{parentName:"li"},"Path")," angegeben, verwendet sie der Browser nur bei der Domain bzw. dem Pfad des Requests, in dessen Antwort die Cookies gesetzt wurden. ",Object(a.b)("inlineCode",{parentName:"li"},"Domain")," kann freilich nur Werte beinhalten, die die gleiche Top-Level-Domain haben wie die Webseite, zu der ein Cookie geh\xf6rt. Die Webseite ",Object(a.b)("inlineCode",{parentName:"li"},"campus02.at")," kann also keine Cookies f\xfcr die Domain ",Object(a.b)("inlineCode",{parentName:"li"},"fh-joanneum.at")," setzen."),Object(a.b)("li",{parentName:"ul"},"Mit dem ",Object(a.b)("inlineCode",{parentName:"li"},"SameSite"),"-Attribut kann angegeben werden, ob ein Cookie nur als First-Party-Cookie oder auch als Third-Party-Cookie genutzt werden darf. Dieses Attribut kann drei Werte haben: ",Object(a.b)("inlineCode",{parentName:"li"},"SameSite=None")," erlaubt die Verwendung als Third-Party-Cookie, ",Object(a.b)("inlineCode",{parentName:"li"},"SameSite=Lax")," verbietet die Verwendung als Third-Party-Cookies beim Laden von Ressourcen (z.B. Bildern, IFrames), erlaubt diese aber beim Klicken auf einen Link, ",Object(a.b)("inlineCode",{parentName:"li"},"SameSite=Strict")," verbietet die Verwendung als Third-Party-Cookie g\xe4nzlich. Cookies mit ",Object(a.b)("inlineCode",{parentName:"li"},"SameSite=None")," m\xfcssen das ",Object(a.b)("inlineCode",{parentName:"li"},"Secure"),"-Attribut gesetzt haben, sonst wird das Cookie vom Browser blockiert.")),Object(a.b)("h2",{id:"first-party-vs-third-party-cookies"},"First-Party vs Third-Party-Cookies"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"First-Party-Cookies")," sind jene Cookies, die von der Webseite gesetzt sind, die ein Benutzer tats\xe4chlich besucht. Hierbei handelt es sich einerseits um Cookies, die technisch notwendig sind (z.B. Session-ID nach dem Login, Inhalt des Einkaufswagens, Einstellungen, ...), oft aber auch um Daten, die von den Webseitenbetreiber","*","innen f\xfcr statistische Auswertungen verwendet werden. ",Object(a.b)("strong",{parentName:"p"},"Third-Party-Cookies")," sind jedoch Cookies, die von anderen Webseiten (z.B. Facebook, Google, Twitter, ... beim Besuch eines Blogs) gesetzt werden. Third-Party-Cookies erlauben es den Unternehmen hinter diesen anderen Webseiten, genauere Benutzer","*","innenprofile zu erstellen, da sie ein Webseiten\xfcbergreifendes Tracking erlauben. "),Object(a.b)("p",null,"Nun wurde oben erw\xe4hnt, dass Cookies nur f\xfcr Domains gesetzt werden k\xf6nnen, die die gleiche Top-Level-Domain wie die besuchte Webseite haben. Die Seite ",Object(a.b)("inlineCode",{parentName:"p"},"www.campus02.at")," kann also selbst keine Google-, Facebook- oder Twitter-Cookies setzen. Findet sich aber auf der Seite ",Object(a.b)("inlineCode",{parentName:"p"},"www.campus02.at")," z.B. ein Facebook-Like-Button, eine Werbeeinschaltung von Google oder ein Share-Link f\xfcr Twitter, so werden f\xfcr diese Elemente in der Regel Inhalte von den jeweiligen Seiten geladen - somit ist es diesen Seiten auch m\xf6glich, Cookies zu setzen und das Surfverhalten zu analysieren. "),Object(a.b)("p",null,"Third-Party-Cookies werden aus datenschutzrechtlicher Sicht als bedenklich eingestuft und sind u.a. Thema bei der DSGVO/GDPR. Seit einigen Jahren ist es daher erforderlich, dass Benutzer*innen aktiv der Verwendung von Cookies, die nicht technisch notwendig sind, ausdr\xfccklich zuzustimmen. Eine tiefergehende Auseinandersetzung mit diesem sicherlich spannenden Thema w\xfcrde den Rahmen dieses Skriptums aber leider sprengen."),Object(a.b)("h2",{id:"links"},"Links"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc6265"}),"Cookie-Spezifikation in RFC-6265"))))}c.isMDXComponent=!0},187:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return p}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=b(t),m=i,p=c["".concat(o,".").concat(m)]||c[m]||u[m]||a;return t?r.a.createElement(p,s(s({ref:n},l),{},{components:t})):r.a.createElement(p,s({ref:n},l))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},188:function(e,n,t){"use strict";var i=t(0),r=t(51);n.a=function(){return Object(i.useContext)(r.a)}},190:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));t(192);var i=t(188);function r(e){var n=(Object(i.a)().siteConfig||{}).baseUrl,t=void 0===n?"/":n;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?t+e.slice(1):t+e}},192:function(e,n,t){"use strict";var i=t(17),r=t(35),a=t(193),o="".startsWith;i(i.P+i.F*t(194)("startsWith"),"String",{startsWith:function(e){var n=a(this,e,"startsWith"),t=r(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),i=String(e);return o?o.call(n,i,t):n.slice(t,t+i.length)===i}})},193:function(e,n,t){var i=t(70),r=t(24);e.exports=function(e,n,t){if(i(n))throw TypeError("String#"+t+" doesn't accept regex!");return String(r(e))}},194:function(e,n,t){var i=t(3)("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[i]=!1,!"/./"[e](n)}catch(r){}}return!0}}}]);