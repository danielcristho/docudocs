"use strict";(self.webpackChunkdanielcristho=self.webpackChunkdanielcristho||[]).push([[5055],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(4137));const a={title:"Linux Networking"},c=void 0,i={unversionedId:"references/cheat-sheet/network/linux-networking",id:"references/cheat-sheet/network/linux-networking",title:"Linux Networking",description:"NetCat",source:"@site/docs/references/cheat-sheet/network/linux-networking.md",sourceDirName:"references/cheat-sheet/network",slug:"/references/cheat-sheet/network/linux-networking",permalink:"/docs/references/cheat-sheet/network/linux-networking",draft:!1,editUrl:"https://github.com/danielcristho/docudocs/blob/main/docs/references/cheat-sheet/network/linux-networking.md",tags:[],version:"current",lastUpdatedBy:"danielcristho",lastUpdatedAt:1688478173,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{title:"Linux Networking"},sidebar:"tutorialSidebar",previous:{title:"Iptables",permalink:"/docs/references/cheat-sheet/network/iptables"},next:{title:"SSH",permalink:"/docs/references/cheat-sheet/network/ssh"}},l={},s=[{value:"NetCat",id:"netcat",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"netcat"},"NetCat"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nc -llvp 1234                  # Listen on 0.0.0.0 of port 1234\nnc <ip> 1234                   # Connect to <ip> with port 1234\n")))}f.isMDXComponent=!0}}]);