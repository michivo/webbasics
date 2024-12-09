"use strict";(self.webpackChunkweb_basics=self.webpackChunkweb_basics||[]).push([[9778],{5680:(e,n,i)=>{i.d(n,{xA:()=>u,yg:()=>p});var t=i(6540);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=t.createContext({}),l=function(e){var n=t.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},u=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(i),c=r,p=m["".concat(d,".").concat(c)]||m[c]||g[c]||a;return i?t.createElement(p,o(o({ref:n},u),{},{components:i})):t.createElement(p,o({ref:n},u))}));function p(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=c;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}c.displayName="MDXCreateElement"},9781:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var t=i(8168),r=i(8587),a=(i(6540),i(5680)),o=i(6025);const s=["components"],d={id:"storage-cookies",title:"Cookies",sidebar_label:"Cookies"},l=void 0,u={unversionedId:"storage-cookies",id:"storage-cookies",title:"Cookies",description:"Den meisten Nutzer*innen sind Cookies vor allem deswegen ein Begriff, weil man bei den meisten Seiten dem Einsatz eben dieser Cookies zustimmen muss.",source:"@site/docs/storage_cookies.mdx",sourceDirName:".",slug:"/storage-cookies",permalink:"/webbasics/docs/storage-cookies",draft:!1,editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/storage_cookies.mdx",tags:[],version:"current",frontMatter:{id:"storage-cookies",title:"Cookies",sidebar_label:"Cookies"},sidebar:"someSidebar",previous:{title:"Einf\xfchrung",permalink:"/webbasics/docs/storage-intro"},next:{title:"Gefahren",permalink:"/webbasics/docs/storage-threats"}},m={},g=[{value:"Implementierung",id:"implementierung",level:2},{value:"Attribute",id:"attribute",level:2},{value:"First-Party vs Third-Party-Cookies",id:"first-party-vs-third-party-cookies",level:2},{value:"Links",id:"links",level:2}],c={toc:g},p="wrapper";function b(e){let{components:n}=e,i=(0,r.A)(e,s);return(0,a.yg)(p,(0,t.A)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Den meisten Nutzer",(0,a.yg)("em",{parentName:"p"},"innen sind Cookies vor allem deswegen ein Begriff, weil man bei den meisten Seiten dem Einsatz eben dieser Cookies zustimmen muss.\nWas aber sind "),"Cookies* genau?"),(0,a.yg)("img",{alt:"Delicious Cookie",src:(0,o.A)("img/cookie.svg"),height:"300"}),(0,a.yg)("p",null,"Cookies sind Daten, die vom Client (also dem Browser) beim Besuch einer Webseite gespeichert werden. HTTP an sich ist ja ein ",(0,a.yg)("em",{parentName:"p"},"zustandsloses")," Protokoll,\nauf HTTP-Ebene ist somit jede Anfrage unabh\xe4ngig von jenen davor und danach zu betrachten. Um trotzdem Webanwendungen mit Zustandsinformationen umsetzen\nzu k\xf6nnen, braucht es eine L\xf6sung, wie dieser Zustand abgebildet werden. Dieser Zustand kann z.B. aus dem Einkaufswagen eines Online-Shops, Login-Daten,\nTrackingdaten, Einstellungen oder anderen Daten bestehen. Die L\xf6sung daf\xfcr sind ",(0,a.yg)("em",{parentName:"p"},"Cookies"),". Ein Cookie besteht aus"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"einem Namen"),(0,a.yg)("li",{parentName:"ul"},"einem Wert (L\xe4nge: Maximal 4kB)"),(0,a.yg)("li",{parentName:"ul"},"Attributen, wie z.B. dem Ablaufdatum, der Dom\xe4ne, sowie Flags (",(0,a.yg)("inlineCode",{parentName:"li"},"HttpOnly"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Secure"),", ...)")),(0,a.yg)("h2",{id:"implementierung"},"Implementierung"),(0,a.yg)("p",null,"Cookies werden, wie bereits bei den Kapiteln zu HTTP beschrieben, in HTTP-Headern \xfcbertragen. Der Server weist mit dem ",(0,a.yg)("inlineCode",{parentName:"p"},"Set-Cookie"),"-Header den Client an, ein oder mehrere Cookies zu speichern. Hier ist der Anfang einer Beispielantwort eines Servers, mit der zwei Cookies gesetzt werden:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"HTTP/1.0 200 OK\nContent-type: text/html\nSet-Cookie: theme=midnight\nSet-Cookie: sessionToken=4079935355c44e3ea04eccfb924fd6ab; Expires=Wed, 01 Feb 2021 12:34:56 GMT; Secure; HttpOnly\n")),(0,a.yg)("p",null,"Der Server setzt hier ein Cookie mit dem Namen ",(0,a.yg)("inlineCode",{parentName:"p"},"theme")," und dem Wert ",(0,a.yg)("inlineCode",{parentName:"p"},"midnight"),", sowie ein weiteres Cookie mit dem Namen ",(0,a.yg)("inlineCode",{parentName:"p"},"sessionCookie")," und dem Wert ",(0,a.yg)("inlineCode",{parentName:"p"},"4079935355c44e3ea04eccfb924fd6ab")," sowie den Attributen ",(0,a.yg)("inlineCode",{parentName:"p"},"Expires")," (Ablaufdatum), ",(0,a.yg)("inlineCode",{parentName:"p"},"Secure")," und ",(0,a.yg)("inlineCode",{parentName:"p"},"HttpOnly"),". Der Browser/Client speichert diese Cookies und\n\xfcbertr\xe4gt sie bei nachfolgenden Anfragen an den Server wieder im HTTP-Header ",(0,a.yg)("inlineCode",{parentName:"p"},"Cookie"),". Um ein Cookie wieder zu l\xf6schen, wird in der Regel vom Server ein ",(0,a.yg)("inlineCode",{parentName:"p"},"Set-Cookie"),"-Header mit leerem Wert (optional) und standardgem\xe4\xdf einem Ablaufdatum in der Vergangenheit geschickt, also z.B.: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"HTTP/1.0 200 OK\nContent-type: text/html\nSet-Cookie: sessionToken=; Expires=Wed, 01 Feb 2020 12:34:56 GMT\n")),(0,a.yg)("h2",{id:"attribute"},"Attribute"),(0,a.yg)("p",null,"Wie im obigen Beispiel gesehen, kann ein Cookie mehrere Attribute haben. Die wichtigsten sind:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Expires"),": Der Wert dieses Attributs gibt an, bis zu welchem Zeitpunkt ein Cookie vom Client verwendet werden soll. Alternativ kann auch das Attribut ",(0,a.yg)("inlineCode",{parentName:"li"},"max-age")," verwendet werden, das das maximale Alter in Sekunden enth\xe4lt. Ist keines der Attribute vorhanden, wird das Cookie vom Browser nicht persistiert, es wird also mit dem Ende der aktuellen Browser-Session gel\xf6scht."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"HTTPOnly"),": Wenn dieses Attribut (das keinen Wert hat) vorhanden ist, bedeutet das, dass Skripte im Client nicht berechtigt sind, auf das jeweilige Cookie zuzugreifen. Das wird vor allem aus Sicherheitsgr\xfcnden bei Cookies gemacht, die z.B. Zugriff auf sensible Daten erlauben w\xfcrden. Angriffe, bei denen externer JavaScript-Code auf solche Cookies zuzugreifen versucht, werden als XSS (Cross Site Scripting bezeichnet) und durch Verwendung dieses Attributs deutlich erschwert."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Secure"),": Cookies, die dieses Attribut haben, d\xfcrfen vom Client nur \xfcber verschl\xfcsselte Verbindungen (also \xfcber HTTPS) \xfcbertragen werden, wenn sie auch vom Server \xfcber eine solche Verbindung gesetzt wurden. Damit wird es deutlich erschwert, solche Cookies zu ",(0,a.yg)("em",{parentName:"li"},"sniffen"),", also ihren Inhalt durch die Analyse nicht-verschl\xfcsselter Datenkan\xe4le abzugreifen."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Partitioned"),": Cookies mit diesem Attribut werden verwendet, um bei eingebetteten Inhalten von Drittanbietern (wie z.B. ",(0,a.yg)("inlineCode",{parentName:"li"},"iframe"),"s) Cookies auch dann unterst\xfctzen zu k\xf6nnen, wenn 3rd-Party-Cookies eigentlich blockiert werden. Wird z.B. ein solches Cookie f\xfcr in die Seite example.com eingebettete Inhalte der Domain external.com gesetzt, dann wird es auch nur beim Laden von Inhalten von external.com \xfcbertragen, wenn diese Inhalte in eine Seite von example.com eingebettet sind. Sind die Inhalte von external.com in die Seite alternative.com eingebettet, werden diese Cookies ",(0,a.yg)("em",{parentName:"li"},"nicht")," an external.com \xfcbertragen. Somit wird Tracking verunm\xf6glicht, Authentifzierung beim Laden externer Inhalte aber erm\xf6glicht."),(0,a.yg)("li",{parentName:"ul"},"Die Attribute ",(0,a.yg)("inlineCode",{parentName:"li"},"Domain")," und ",(0,a.yg)("inlineCode",{parentName:"li"},"Path")," geben an, f\xfcr welche Domain bzw. welchen Pfad ein Cookie g\xfcltig sind. Sie sind vor allem dann wichtig, wo mehrere Anwendungen unter einer Domain erreichbar sind. Hat bei einem Cookie das ",(0,a.yg)("inlineCode",{parentName:"li"},"Domain"),"-Attribut den Wert ",(0,a.yg)("inlineCode",{parentName:"li"},"github.io"),", dann w\xfcrde der Browser dieses Cookie sowohl an ",(0,a.yg)("inlineCode",{parentName:"li"},"michivo.github.io")," \xfcbertragen als auch an z.B. ",(0,a.yg)("inlineCode",{parentName:"li"},"attacker.github.io"),". Wird kein Wert f\xfcr ",(0,a.yg)("inlineCode",{parentName:"li"},"Domain")," bzw. ",(0,a.yg)("inlineCode",{parentName:"li"},"Path")," angegeben, verwendet sie der Browser nur bei der Domain bzw. dem Pfad des Requests, in dessen Antwort die Cookies gesetzt wurden. ",(0,a.yg)("inlineCode",{parentName:"li"},"Domain")," kann freilich nur Werte beinhalten, die die gleiche Top-Level-Domain haben wie die Webseite, zu der ein Cookie geh\xf6rt. Die Webseite ",(0,a.yg)("inlineCode",{parentName:"li"},"campus02.at")," kann also keine Cookies f\xfcr die Domain ",(0,a.yg)("inlineCode",{parentName:"li"},"fh-joanneum.at")," setzen."),(0,a.yg)("li",{parentName:"ul"},"Mit dem ",(0,a.yg)("inlineCode",{parentName:"li"},"SameSite"),"-Attribut kann angegeben werden, ob ein Cookie nur als First-Party-Cookie oder auch als Third-Party-Cookie genutzt werden darf. Dieses Attribut kann drei Werte haben: ",(0,a.yg)("inlineCode",{parentName:"li"},"SameSite=None")," erlaubt die Verwendung als Third-Party-Cookie, ",(0,a.yg)("inlineCode",{parentName:"li"},"SameSite=Lax")," verbietet die Verwendung als Third-Party-Cookies beim Laden von Ressourcen (z.B. Bildern, IFrames), erlaubt diese aber beim Klicken auf einen Link, ",(0,a.yg)("inlineCode",{parentName:"li"},"SameSite=Strict")," verbietet die Verwendung als Third-Party-Cookie g\xe4nzlich. Cookies mit ",(0,a.yg)("inlineCode",{parentName:"li"},"SameSite=None")," m\xfcssen das ",(0,a.yg)("inlineCode",{parentName:"li"},"Secure"),"-Attribut gesetzt haben, sonst wird das Cookie vom Browser blockiert.")),(0,a.yg)("h2",{id:"first-party-vs-third-party-cookies"},"First-Party vs Third-Party-Cookies"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"First-Party-Cookies")," sind jene Cookies, die von der Webseite gesetzt sind, die ein Benutzer tats\xe4chlich besucht. Hierbei handelt es sich einerseits um Cookies, die technisch notwendig sind (z.B. Session-ID nach dem Login, Inhalt des Einkaufswagens, Einstellungen, ...), oft aber auch um Daten, die von den Webseitenbetreiber","*","innen f\xfcr statistische Auswertungen verwendet werden. ",(0,a.yg)("strong",{parentName:"p"},"Third-Party-Cookies")," sind jedoch Cookies, die von anderen Webseiten (z.B. Facebook, Google, Twitter, ... beim Besuch eines Blogs) gesetzt werden. Third-Party-Cookies erlauben es den Unternehmen hinter diesen anderen Webseiten, genauere Benutzer","*","innenprofile zu erstellen, da sie ein Webseiten\xfcbergreifendes Tracking erlauben. "),(0,a.yg)("p",null,"Nun wurde oben erw\xe4hnt, dass Cookies nur f\xfcr Domains gesetzt werden k\xf6nnen, die die gleiche Top-Level-Domain wie die besuchte Webseite haben. Die Seite ",(0,a.yg)("inlineCode",{parentName:"p"},"www.campus02.at")," kann also selbst keine Google-, Facebook- oder Twitter-Cookies setzen. Findet sich aber auf der Seite ",(0,a.yg)("inlineCode",{parentName:"p"},"www.campus02.at")," z.B. ein Facebook-Like-Button, eine Werbeeinschaltung von Google oder ein Share-Link f\xfcr Twitter, so werden f\xfcr diese Elemente in der Regel Inhalte von den jeweiligen Seiten geladen - somit ist es diesen Seiten auch m\xf6glich, Cookies zu setzen und das Surfverhalten zu analysieren. "),(0,a.yg)("p",null,"Third-Party-Cookies werden aus datenschutzrechtlicher Sicht als bedenklich eingestuft und sind u.a. Thema bei der DSGVO/GDPR. Seit einigen Jahren ist es daher erforderlich, dass Benutzer*innen aktiv der Verwendung von Cookies, die nicht technisch notwendig sind, ausdr\xfccklich zuzustimmen. Eine tiefergehende Auseinandersetzung mit diesem sicherlich spannenden Thema w\xfcrde den Rahmen dieses Skriptums aber leider sprengen."),(0,a.yg)("h2",{id:"links"},"Links"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc6265"},"Cookie-Spezifikation in RFC-6265"))))}b.isMDXComponent=!0}}]);