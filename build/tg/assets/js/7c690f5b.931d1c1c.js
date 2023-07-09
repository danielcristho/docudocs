"use strict";(self.webpackChunkdanielcristho=self.webpackChunkdanielcristho||[]).push([[850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={title:"Bash"},o=void 0,c={unversionedId:"references/cheat-sheet/scripting/bash",id:"references/cheat-sheet/scripting/bash",title:"Bash",description:"Introduction",source:"@site/docs/references/cheat-sheet/scripting/bash.md",sourceDirName:"references/cheat-sheet/scripting",slug:"/references/cheat-sheet/scripting/bash",permalink:"/tg/docs/references/cheat-sheet/scripting/bash",draft:!1,editUrl:"https://github.com/m19v/m19v.github.io/blob/main/docs/references/cheat-sheet/scripting/bash.md",tags:[],version:"current",lastUpdatedBy:"danielcristho",lastUpdatedAt:1688478173,formattedLastUpdatedAt:"4 \u0418\u044e\u043b, 2023",frontMatter:{title:"Bash"},sidebar:"tutorialSidebar",previous:{title:"Scripting",permalink:"/tg/docs/category/scripting"},next:{title:"Python",permalink:"/tg/docs/references/cheat-sheet/scripting/python"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Parameter expansions",id:"parameter-expansions",level:2},{value:"Basics",id:"basics",level:3}],p={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This is a quick reference to getting started with Bash scripting."),(0,i.kt)("h2",{id:"parameter-expansions"},"Parameter expansions"),(0,i.kt)("h3",{id:"basics"},"Basics"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'{3-4,7} showLineNumbers title="Basics"',"{3-4,7}":!0,showLineNumbers:!0,title:'"Basics"'},'name="John"\necho ${name}\necho ${name/J/j}    #=> "john" (substitution)\necho ${name:0:2}    #=> "Jo" (slicing)\necho ${name::2}     #=> "Jo" (slicing)\necho ${name::-1}    #=> "Joh" (slicing)\necho ${name:(-1)}   #=> "n" (slicing from right)\necho ${name:(-2):1} #=> "h" (slicing from right)\necho ${food:-Cake}  #=> $food or "Cake"\nlength=2\necho ${name:0:length}  #=> "Jo"\n')))}h.isMDXComponent=!0}}]);