"use strict";(self.webpackChunkweb_basics=self.webpackChunkweb_basics||[]).push([[8401],{5022:(e,t,n)=>{n.r(t),n.d(t,{default:()=>me});var a=n(6540),l=n(1003),o=n(9532);const r=a.createContext(null);function s(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(r);if(null===e)throw new o.dV("DocProvider");return e}function i(){var e;const{metadata:t,frontMatter:n,assets:o}=c();return a.createElement(l.be,{title:t.title,description:t.description,keywords:n.keywords,image:null!=(e=o.image)?e:n.image})}var d=n(53),m=n(4581),u=n(8168),v=n(1312),b=n(9022);function p(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&a.createElement(b.A,(0,u.A)({},t,{subLabel:a.createElement(v.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(b.A,(0,u.A)({},n,{subLabel:a.createElement(v.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function h(){const{metadata:e}=c();return a.createElement(p,{previous:e.previous,next:e.next})}var f=n(4586),E=n(5489),g=n(4070),A=n(7559),L=n(5597),C=n(2252);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function _(e){const t=N[e.versionMetadata.banner];return a.createElement(t,e)}function x(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(v.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(E.A,{to:n,onClick:l},a.createElement(v.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function T(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,f.A)(),{pluginId:o}=(0,g.vT)({failfast:!0}),{savePreferredVersionName:r}=(0,L.g1)(o),{latestDocSuggestion:s,latestVersionSuggestion:c}=(0,g.HW)(o),i=null!=s?s:(m=c).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.A)(t,A.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(_,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(x,{versionLabel:c.label,to:i.path,onClick:()=>r(c.name)})))}function k(e){let{className:t}=e;const n=(0,C.r)();return n.banner?a.createElement(T,{className:t,versionMetadata:n}):null}function H(e){let{className:t}=e;const n=(0,C.r)();return n.badge?a.createElement("span",{className:(0,d.A)(t,A.G.docs.docVersionBadge,"badge badge--secondary")},a.createElement(v.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(v.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function w(e){let{lastUpdatedBy:t}=e;return a.createElement(v.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:A.G.common.lastUpdated},a.createElement(v.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(U,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(w,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var M=n(1943),I=n(2053);const B={lastUpdated:"lastUpdated_vwxv"};function O(e){return a.createElement("div",{className:(0,d.A)(A.G.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(I.A,e)))}function V(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,d.A)(A.G.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(M.A,{editUrl:t})),a.createElement("div",{className:(0,d.A)("col",B.lastUpdated)},(n||l)&&a.createElement(y,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function P(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:o,tags:r}=e,s=r.length>0,i=!!(t||n||o);return s||i?a.createElement("footer",{className:(0,d.A)(A.G.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(O,{tags:r}),i&&a.createElement(V,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:l})):null}var S=n(1422),D=n(5195),G=n(8587);const R={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"},F=["collapsed"];function j(e){let{collapsed:t}=e,n=(0,G.A)(e,F);return a.createElement("button",(0,u.A)({type:"button"},n,{className:(0,d.A)("clean-btn",R.tocCollapsibleButton,!t&&R.tocCollapsibleButtonExpanded,n.className)}),a.createElement(v.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const z={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function q(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:o}=e;const{collapsed:r,toggleCollapsed:s}=(0,S.u)({initialState:!0});return a.createElement("div",{className:(0,d.A)(z.tocCollapsible,!r&&z.tocCollapsibleExpanded,n)},a.createElement(j,{collapsed:r,onClick:s}),a.createElement(S.N,{lazy:!0,className:z.tocCollapsibleContent,collapsed:r},a.createElement(D.A,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}const W={tocMobile:"tocMobile_ITEo"};function Y(){const{toc:e,frontMatter:t}=c();return a.createElement(q,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.A)(A.G.docs.docTocMobile,W.tocMobile)})}var Z=n(7763);function J(){const{toc:e,frontMatter:t}=c();return a.createElement(Z.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:A.G.docs.docTocDesktop})}var K=n(1107),Q=n(5212);function X(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.A)(A.G.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(K.A,{as:"h1"},n)),a.createElement(Q.A,null,t))}var $=n(1754),ee=n(9169),te=n(6025);function ne(e){return a.createElement("svg",(0,u.A)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ae={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function le(){const e=(0,te.A)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(E.A,{"aria-label":(0,v.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(ne,{className:ae.breadcrumbHomeIcon})))}const oe={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function re(e){let{children:t,href:n,isLast:l}=e;const o="breadcrumbs__link";return l?a.createElement("span",{className:o,itemProp:"name"},t):n?a.createElement(E.A,{className:o,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:o},t)}function se(e){let{children:t,active:n,index:l,addMicrodata:o}=e;return a.createElement("li",(0,u.A)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.A)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ce(){const e=(0,$.OF)(),t=(0,ee.Dt)();return e?a.createElement("nav",{className:(0,d.A)(A.G.docs.docBreadcrumbs,oe.breadcrumbsContainer),"aria-label":(0,v.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(le,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(se,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(re,{href:t.href,isLast:l},t.label))})))):null}const ie={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function de(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),l=e.hide_table_of_contents,o=!l&&t.length>0;return{hidden:l,mobile:o?a.createElement(Y,null):void 0,desktop:!o||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(J,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.A)("col",!n.hidden&&ie.docItemCol)},a.createElement(k,null),a.createElement("div",{className:ie.docItemContainer},a.createElement("article",null,a.createElement(ce,null),a.createElement(H,null),n.mobile,a.createElement(X,null,t),a.createElement(P,null)),a.createElement(h,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function me(e){const t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(s,{content:e.content},a.createElement(l.e3,{className:t},a.createElement(i,null),a.createElement(de,null,a.createElement(n,null))))}},7763:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(8168),l=n(8587),o=n(6540),r=n(53),s=n(5195);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},i=["className"],d="table-of-contents__link toc-highlight",m="table-of-contents__link--active";function u(e){let{className:t}=e,n=(0,l.A)(e,i);return o.createElement("div",{className:(0,r.A)(c.tableOfContents,"thin-scrollbar",t)},o.createElement(s.A,(0,a.A)({},n,{linkClassName:d,linkActiveClassName:m})))}},5195:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(8168),l=n(8587),o=n(6540),r=n(6342);const s=["parentIndex"];function c(e){const t=e.map((e=>Object.assign({},e,{parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n}=e,o=(0,l.A)(e,s);n>=0?t[n].children.push(o):a.push(o)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){const t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>d(e).top>=a));if(l){var o;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(o=e[e.indexOf(l)-1])?o:null}return null!=(n=e[e.length-1])?n:null}function u(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){const t=(0,o.useRef)(void 0),n=u();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=m(s,{anchorTopOffset:n.current}),i=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===i)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function b(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?o.createElement("ul",{className:l?void 0:n},t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(b,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const p=o.memo(b),h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:d,minHeadingLevel:m,maxHeadingLevel:u}=e,b=(0,l.A)(e,h);const f=(0,r.p)(),E=null!=m?m:f.tableOfContents.minHeadingLevel,g=null!=u?u:f.tableOfContents.maxHeadingLevel,A=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>i({toc:c(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:E,maxHeadingLevel:g});return v((0,o.useMemo)((()=>{if(s&&d)return{linkClassName:s,linkActiveClassName:d,minHeadingLevel:E,maxHeadingLevel:g}}),[s,d,E,g])),o.createElement(p,(0,a.A)({toc:A,className:n,linkClassName:s},b))}},2252:(e,t,n)=>{n.d(t,{n:()=>r,r:()=>s});var a=n(6540),l=n(9532);const o=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(o.Provider,{value:n},t)}function s(){const e=(0,a.useContext)(o);if(null===e)throw new l.dV("DocsVersionProvider");return e}}}]);