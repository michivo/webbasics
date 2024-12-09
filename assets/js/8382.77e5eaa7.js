"use strict";(self.webpackChunkweb_basics=self.webpackChunkweb_basics||[]).push([[8382],{6669:(e,t,a)=>{a.d(t,{A:()=>E});var l=a(8587),r=a(6540),n=a(53),o=a(9408),s=a(4581),i=a(5489),m=a(1312);const c={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function u(e){let{sidebar:t}=e;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,n.A)(c.sidebar,"thin-scrollbar"),"aria-label":(0,m.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.A)(c.sidebarItemTitle,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,n.A)(c.sidebarItemList,"clean-list")},t.items.map((e=>r.createElement("li",{key:e.permalink,className:c.sidebarItem},r.createElement(i.A,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var d=a(5600);function g(e){let{sidebar:t}=e;return r.createElement("ul",{className:"menu__list"},t.items.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function p(e){return r.createElement(d.GX,{component:g,props:e})}function h(e){let{sidebar:t}=e;const a=(0,s.l)();return null!=t&&t.items.length?"mobile"===a?r.createElement(p,{sidebar:t}):r.createElement(u,{sidebar:t}):null}const b=["sidebar","toc","children"];function E(e){const{sidebar:t,toc:a,children:s}=e,i=(0,l.A)(e,b),m=t&&t.items.length>0;return r.createElement(o.A,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(h,{sidebar:t}),r.createElement("main",{className:(0,n.A)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},a))))}},8258:(e,t,a)=>{a.d(t,{A:()=>O});var l=a(6540),r=a(53),n=a(7131),o=a(6025);function s(e){var t,a;let{children:r,className:s}=e;const{frontMatter:i,assets:m,metadata:{description:c}}=(0,n.e)(),{withBaseUrl:u}=(0,o.h)(),d=null!=(t=m.image)?t:i.image,g=null!=(a=i.keywords)?a:[];return l.createElement("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&l.createElement("meta",{itemProp:"description",content:c}),d&&l.createElement("link",{itemProp:"image",href:u(d,{absolute:!0})}),g.length>0&&l.createElement("meta",{itemProp:"keywords",content:g.join(",")}),r)}var i=a(5489);const m={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,n.e)(),{permalink:s,title:c}=a,u=o?"h1":"h2";return l.createElement(u,{className:(0,r.A)(m.title,t),itemProp:"headline"},o?c:l.createElement(i.A,{itemProp:"url",to:s},c))}var u=a(1312),d=a(5846);const g={container:"container_mt6G"};function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.W)();return t=>{const a=Math.ceil(t);return e(a,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function b(){return l.createElement(l.Fragment,null," \xb7 ")}function E(e){let{className:t}=e;const{metadata:a}=(0,n.e)(),{date:o,formattedDate:s,readingTime:i}=a;return l.createElement("div",{className:(0,r.A)(g.container,"margin-vert--md",t)},l.createElement(h,{date:o,formattedDate:s}),void 0!==i&&l.createElement(l.Fragment,null,l.createElement(b,null),l.createElement(p,{readingTime:i})))}function f(e){return e.href?l.createElement(i.A,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:n,title:o,url:s,imageURL:i,email:m}=t,c=s||m&&"mailto:"+m||void 0;return l.createElement("div",{className:(0,r.A)("avatar margin-bottom--sm",a)},i&&l.createElement(f,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:i,alt:n,itemProp:"image"})),n&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(f,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},n))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const P={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,n.e)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",s?P.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>{var a;return l.createElement("div",{className:(0,r.A)(!s&&"col col--6",s?P.imageOnlyAuthorCol:P.authorCol),key:t},l.createElement(v,{author:Object.assign({},e,{imageURL:null!=(a=o.authorsImageUrls[t])?a:e.imageURL})}))})))}function N(){return l.createElement("header",null,l.createElement(c,null),l.createElement(E,null),l.createElement(A,null))}var _=a(440),k=a(5212);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,n.e)();return l.createElement("div",{id:o?_.blogPostContainerID:void 0,className:(0,r.A)("markdown",a),itemProp:"articleBody"},l.createElement(k.A,null,t))}var T=a(1943),I=a(2053),y=a(8168),F=a(8587);const L=["blogPostTitle"];function B(){return l.createElement("b",null,l.createElement(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function C(e){const{blogPostTitle:t}=e,a=(0,F.A)(e,L);return l.createElement(i.A,(0,y.A)({"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(B,null))}const M={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function R(){const{metadata:e,isBlogPostPage:t}=(0,n.e)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:i}=e,m=!t&&i,c=a.length>0;return c||m||s?l.createElement("footer",{className:(0,r.A)("row docusaurus-mt-lg",t&&M.blogPostFooterDetailsFull)},c&&l.createElement("div",{className:(0,r.A)("col",{"col--9":m})},l.createElement(I.A,{tags:a})),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(T.A,{editUrl:s})),m&&l.createElement("div",{className:(0,r.A)("col text--right",{"col--3":c})},l.createElement(C,{blogPostTitle:o,to:e.permalink}))):null}function O(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,n.e)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s,{className:(0,r.A)(o,a)},l.createElement(N,null),l.createElement(w,null,t),l.createElement(R,null))}},7131:(e,t,a)=>{a.d(t,{e:()=>s,i:()=>o});var l=a(6540),r=a(9532);const n=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:r=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:r});return l.createElement(n.Provider,{value:o},t)}function s(){const e=(0,l.useContext)(n);if(null===e)throw new r.dV("BlogPostProvider");return e}},5846:(e,t,a)=>{a.d(t,{W:()=>m});var l=a(6540),r=a(4586);const n=["zero","one","two","few","many","other"];function o(e){return n.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),s}}),[e])}function m(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+l.length+": "+e);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);