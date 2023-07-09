"use strict";(self.webpackChunkdanielcristho=self.webpackChunkdanielcristho||[]).push([[8619],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||c;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<c;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const c={title:"Docker Compose"},a=void 0,s={unversionedId:"references/cheat-sheet/container/docker-compose",id:"references/cheat-sheet/container/docker-compose",title:"Docker Compose",description:"Commands",source:"@site/docs/references/cheat-sheet/container/docker-compose.md",sourceDirName:"references/cheat-sheet/container",slug:"/references/cheat-sheet/container/docker-compose",permalink:"/docs/references/cheat-sheet/container/docker-compose",draft:!1,editUrl:"https://github.com/m19v/m19v.github.io/blob/main/docs/references/cheat-sheet/container/docker-compose.md",tags:[],version:"current",lastUpdatedBy:"danielcristho",lastUpdatedAt:1688478173,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{title:"Docker Compose"},sidebar:"tutorialSidebar",previous:{title:"Container",permalink:"/docs/category/container"},next:{title:"Docker",permalink:"/docs/references/cheat-sheet/container/docker"}},i={},p=[{value:"Commands",id:"commands",level:2},{value:"Compose CLI environment variables",id:"compose-cli-environment-variables",level:2}],l={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose start                             # Start services, can't create new containers\ndocker-compose stop                              # Stop services\n\n\ndocker-compose pause\ndocker-compose unpause\n\n\ndocker-compose ps\n\n\ndocker-compose up -d                              # Build, (re)create, and start containers\ndocker-compose -p <project-name> up -d            # Sets the project name on running up command\n\n\ndocker-compose down                               # Stop and remove containers and networks (optionally images and volumes as well)\ndocker-compose down --rmi <all|local>             # Down and remove images\ndocker-compose -p <project-name> down             # Sets the project name of compose resources to be down\n")),(0,o.kt)("h2",{id:"compose-cli-environment-variables"},"Compose CLI environment variables"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"COMPOSE_PROJECT_NAME                              # Sets the project name, can be set e.g. in .env file. This value is prepended along with the resource (e.g. service, volume etc) name to the container\u2019s name on startup.\n")))}d.isMDXComponent=!0}}]);