(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{170:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(2),i=t(9),a=(t(0),t(179)),o={id:"css-box-model",title:"Das CSS Box-Model",sidebar_label:"CSS Box-Model"},l={id:"css-box-model",title:"Das CSS Box-Model",description:"Wenn ein Browser ein HTML-Dokument rendert, muss er klarerweise wissen, wie gro\xdf jedes einzelne Element sein muss.",source:"@site/docs/css_box_model.mdx",permalink:"/webbasics/docs/css-box-model",editUrl:"https://github.com/michivo/webbasics/edit/master/website/docs/css_box_model.mdx",sidebar_label:"CSS Box-Model",sidebar:"someSidebar",previous:{title:"Die Syntax von CSS",permalink:"/webbasics/docs/css-syntax"}},s=[],c={rightToc:s};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Wenn ein Browser ein HTML-Dokument rendert, muss er klarerweise wissen, ",Object(a.b)("em",{parentName:"p"},"wie gro\xdf")," jedes einzelne Element sein muss.\nIm Browser werden alle Elemente mit Hilfe des ",Object(a.b)("strong",{parentName:"p"},"Box Models"),' modelliert. Alle HTML-Elemente k\xf6nnen sozusagen als\n"Boxen" betrachtet werden, die vom Browser gezeichnet werden. Jede dieser Boxen hat:'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"eine H\xf6he und Breite (",Object(a.b)("inlineCode",{parentName:"li"},"height")," und ",Object(a.b)("inlineCode",{parentName:"li"},"width"),"), die die Abmessungen des Inhalts beschreiben"),Object(a.b)("li",{parentName:"ul"},"den Innenabstand (",Object(a.b)("inlineCode",{parentName:"li"},"padding"),") zwischen dem Inhalt und dem Rahmen"),Object(a.b)("li",{parentName:"ul"},"einem optionalen Rahmen (",Object(a.b)("inlineCode",{parentName:"li"},"border"),"), der die Box umgibt"),Object(a.b)("li",{parentName:"ul"},"einem Au\xdfenabstand (",Object(a.b)("inlineCode",{parentName:"li"},"margin"),"), der den Abstand au\xdferhalb des Rahmens festlegt")),Object(a.b)("p",null,"F\xfcr all diese Teile der Box gibt es entsprechende CSS-Eigenschaften.\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Boxmodell-detail.png",alt:"Box-Model"}))),Object(a.b)("p",null,"Hier ist ein Beispiel, in dem Sie mit dem Box Model herumspielen k\xf6nnen. Die ",Object(a.b)("inlineCode",{parentName:"p"},"inner"),"-div hat\neinen roten Margin und ein gr\xfcnes Padding, die Hintergrundfarbe des Inhalts ist magenta. Durch\ndie blaue Hintergrundfarbe des ",Object(a.b)("inlineCode",{parentName:"p"},"outer"),"-div wird auch der Margin des ",Object(a.b)("inlineCode",{parentName:"p"},"inner"),"-divs klar erkennbar:"),Object(a.b)("iframe",{width:"100%",height:"400",src:"//jsfiddle.net/michivo/qb2rezkf/35/embedded/result,html,css/dark/",allowfullscreen:"allowfullscreen",frameborder:"0"}))}d.isMDXComponent=!0},179:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return p}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),d=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=d(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=d(t),u=r,p=b["".concat(o,".").concat(u)]||b[u]||m[u]||a;return t?i.a.createElement(p,l(l({ref:n},c),{},{components:t})):i.a.createElement(p,l({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);