"use strict";(self.webpackChunkweb_basics=self.webpackChunkweb_basics||[]).push([[8209],{6669:(e,t,a)=>{a.d(t,{A:()=>h});var l=a(8587),r=a(6540),n=a(53),s=a(9408),i=a(4581),c=a(5489),m=a(1312);const o={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function u(e){let{sidebar:t}=e;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,n.A)(o.sidebar,"thin-scrollbar"),"aria-label":(0,m.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.A)(o.sidebarItemTitle,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,n.A)(o.sidebarItemList,"clean-list")},t.items.map((e=>r.createElement("li",{key:e.permalink,className:o.sidebarItem},r.createElement(c.A,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},e.title)))))))}var b=a(5600);function g(e){let{sidebar:t}=e;return r.createElement("ul",{className:"menu__list"},t.items.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(c.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function d(e){return r.createElement(b.GX,{component:g,props:e})}function E(e){let{sidebar:t}=e;const a=(0,i.l)();return null!=t&&t.items.length?"mobile"===a?r.createElement(d,{sidebar:t}):r.createElement(u,{sidebar:t}):null}const p=["sidebar","toc","children"];function h(e){const{sidebar:t,toc:a,children:i}=e,c=(0,l.A)(e,p),m=t&&t.items.length>0;return r.createElement(s.A,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(E,{sidebar:t}),r.createElement("main",{className:(0,n.A)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&r.createElement("div",{className:"col col--2"},a))))}},9158:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(6540),r=a(53),n=a(1312);const s=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=a(1003),c=a(7559),m=a(6669),o=a(6133);const u={tag:"tag_Nnez"};function b(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:u.tag},l.createElement(o.A,e))))),l.createElement("hr",null))}function g(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(b,{key:e.letter,letterEntry:e}))))}var d=a(1463);function E(e){let{tags:t,sidebar:a}=e;const n=s();return l.createElement(i.e3,{className:(0,r.A)(c.G.wrapper.blogPages,c.G.page.blogTagsListPage)},l.createElement(i.be,{title:n}),l.createElement(d.A,{tag:"blog_tags_list"}),l.createElement(m.A,{sidebar:a},l.createElement("h1",null,n),l.createElement(g,{tags:t})))}},6133:(e,t,a)=>{a.d(t,{A:()=>i});var l=a(6540),r=a(53),n=a(5489);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(n.A,{href:t,className:(0,r.A)(s.tag,i?s.tagWithCount:s.tagRegular)},a,i&&l.createElement("span",null,i))}}}]);