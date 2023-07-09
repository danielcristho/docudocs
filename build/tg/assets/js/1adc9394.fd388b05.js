"use strict";(self.webpackChunkdanielcristho=self.webpackChunkdanielcristho||[]).push([[5015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=s,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?o.createElement(g,r(r({ref:t},c),{},{components:n})):o.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,r[1]=i;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(7462),s=(n(7294),n(3905));const a={slug:"how-to-add-giscus-to-docusaurus",title:"How to add Giscus comments to Docusaurus",authors:"danielcristho",tags:["docusaurus","giscus","commenting-system","how-to"],enableComments:!0,countApiKey:"d6943a35-55d6-495e-8f03-92600d04b1f1"},r=void 0,i={permalink:"/tg/blog/how-to-add-giscus-to-docusaurus",editUrl:"https://github.com/m19v/m19v.github.io/blob/main/blog/2022-09-05-how-to-add-giscuss-to-docusaurus.md",source:"@site/blog/2022-09-05-how-to-add-giscuss-to-docusaurus.md",title:"How to add Giscus comments to Docusaurus",description:"Goal",date:"2022-09-05T00:00:00.000Z",formattedDate:"5 \u0421\u0435\u043d\u0442\u044f\u0431\u0440 2022",tags:[{label:"docusaurus",permalink:"/tg/blog/tags/docusaurus"},{label:"giscus",permalink:"/tg/blog/tags/giscus"},{label:"commenting-system",permalink:"/tg/blog/tags/commenting-system"},{label:"how-to",permalink:"/tg/blog/tags/how-to"}],readingTime:3.03,hasTruncateMarker:!0,authors:[{name:"Daniel Pepuho",title:"System Administrator",url:"https://github.com/danielcristho",imageURL:"https://github.com/danielcristho.png",key:"danielcristho"}],frontMatter:{slug:"how-to-add-giscus-to-docusaurus",title:"How to add Giscus comments to Docusaurus",authors:"danielcristho",tags:["docusaurus","giscus","commenting-system","how-to"],enableComments:!0,countApiKey:"d6943a35-55d6-495e-8f03-92600d04b1f1"},prevItem:{title:"How to bind SonarLint with SonarQube in IntelliJ IDE",permalink:"/tg/blog/how-to-bind-sonarlint-with-sonarqube-in-intellij-ide"}},l={authorsImageUrls:[void 0]},u=[{value:"Goal",id:"goal",level:2},{value:"Setup Giscus",id:"setup-giscus",level:2},{value:"Enable GitHub discussion",id:"enable-github-discussion",level:3},{value:"Enable Giscus",id:"enable-giscus",level:3},{value:"Get repository API key",id:"get-repository-api-key",level:3},{value:"Create Giscus component",id:"create-giscus-component",level:2},{value:"Create BlogPostItem component",id:"create-blogpostitem-component",level:2},{value:"References",id:"references",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"goal"},"Goal"),(0,s.kt)("p",null,"This post is a step-by-step description of how to add ",(0,s.kt)("a",{parentName:"p",href:"https://giscus.app/"},"Giscus"),", a commenting system powered by GitHub Discussions, to a static website generated by Docusaurus."),(0,s.kt)("h2",{id:"setup-giscus"},"Setup Giscus"),(0,s.kt)("p",null,"Follow the steps in the sections of the current chapter to set up Giscus and connect it to the GitHub discussions."),(0,s.kt)("h3",{id:"enable-github-discussion"},"Enable GitHub discussion"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create Github repository in your Github account where comments are stored in Discussion section."),(0,s.kt)("li",{parentName:"ul"},"In the main page of created repository go to Settings."),(0,s.kt)("li",{parentName:"ul"},'Under "Features" section, click "Set up discussions".'),(0,s.kt)("li",{parentName:"ul"},'Edit the template in "Start a new discussion" and click "Start discussion".')),(0,s.kt)("h3",{id:"enable-giscus"},"Enable Giscus"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apps/giscus"},"Configure")," giscus in your GitHub account."),(0,s.kt)("li",{parentName:"ul"},'In Section "Repository access" add ',(0,s.kt)("strong",{parentName:"li"},"only"),' created repository from previous step to be accessed by giscus and click "Save".')),(0,s.kt)("h3",{id:"get-repository-api-key"},"Get repository API key"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Login with GitHub account in ",(0,s.kt)("a",{parentName:"li",href:"https://docs.github.com/en/graphql/overview/explorer"},"GraphQL API Explorer"),"."),(0,s.kt)("li",{parentName:"ul"},"Use following query to fetch the id of created repository, discussion categories with its details (e.g. id and name). ",(0,s.kt)("strong",{parentName:"li"},"Note!")," Replace ",(0,s.kt)("inlineCode",{parentName:"li"},"owner")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"name")," with your GitHub account name and name of repository you created.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'query {\n  repository(owner: "nameOfYourGitHubAccount", name:"nameOfCreatedRepository"){\n    id\n    discussionCategories(first:10) {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n')),(0,s.kt)("p",null,"The result json object will be similar to:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "repository": {\n      "id": "R_kgDOIVqhTg",\n      "discussionCategories": {\n        "edges": [\n          {\n            "node": {\n              "id": "DIC_kwDOIVqhTs4CSSES",\n              "name": "Announcements"\n            }\n          },\n          {\n            "node": {\n              "id": "DIC_kwDOIVqhTs4CSSET",\n              "name": "General"\n            }\n          },\n          {\n            "node": {\n              "id": "DIC_kwDOIVqhTs4CSSEV",\n              "name": "Ideas"\n            }\n          },\n          {\n            "node": {\n              "id": "DIC_kwDOIVqhTs4CSSEX",\n              "name": "Polls"\n            }\n          },\n          {\n            "node": {\n              "id": "DIC_kwDOIVqhTs4CSSEU",\n              "name": "Q&A"\n            }\n          },\n          {\n            "node": {\n              "id": "DIC_kwDOIVqhTs4CSSEW",\n              "name": "Show and tell"\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,s.kt)("h2",{id:"create-giscus-component"},"Create Giscus component"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Install @giscus/react package")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @giscus/react\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create Giscus Component, e.g. under ",(0,s.kt)("inlineCode",{parentName:"li"},"/src/components/GiscusComponent")," as follows:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import React from \'react\';\nimport Giscus from "@giscus/react";\nimport { useColorMode } from \'@docusaurus/theme-common\';\n\nexport default function GiscusComponent() {\n  const { colorMode } = useColorMode();\n\n  return (\n    <Giscus\n      repo="nameOfYourGitHubAccount/nameOfCreatedRepository"\n      repoId="idOfCreatedRepo"\n      category="General"\n      categoryId="IdOfDiscussionCategory"  // E.g. id of "General"\n      mapping="url"                        // Important! To map comments to URL\n      term="Welcome to @giscus/react component!"\n      strict="0"\n      reactionsEnabled="1"\n      emitMetadata="1"\n      inputPosition="top"\n      theme={colorMode}\n      lang="en"\n      loading="lazy"\n      crossorigin="anonymous"\n      async\n    />\n  );\n}\n')),(0,s.kt)("h2",{id:"create-blogpostitem-component"},"Create BlogPostItem component"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create BlogPostItem component to wrap blog posts with Giscus commenting system as follows:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle [theme name] [component name] -- --wrap\n\n# Example:\nnpm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap\n")),(0,s.kt)("p",null,"This will create a BlogPostItem component under ",(0,s.kt)("inlineCode",{parentName:"p"},"src/theme"),". Edit ",(0,s.kt)("inlineCode",{parentName:"p"},"index.js")," as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { useBlogPost } from '@docusaurus/theme-common/internal'\nimport BlogPostItem from '@theme-original/BlogPostItem';\nimport GiscusComponent from '@site/src/components/GiscusComponent';\nimport useIsBrowser from '@docusaurus/useIsBrowser';\n\nexport default function BlogPostItemWrapper(props) {\n  const { metadata, isBlogPostPage } = useBlogPost()\n  const isBrowser = useIsBrowser();\n\n  const { frontMatter, slug, title } = metadata\n  const { enableComments } = frontMatter\n\n  return (\n    <>\n      <BlogPostItem {...props} />\n      {(enableComments && isBlogPostPage) && (\n        <GiscusComponent />\n      )}\n    </>\n  );\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note")," that the ",(0,s.kt)("inlineCode",{parentName:"p"},"useBlogPost()")," Hook is used in BlogPostItem component to make activation of comments per blog post configurable. The key value ",(0,s.kt)("inlineCode",{parentName:"p"},"enableComments: true"),"  must be added to your blog post ",(0,s.kt)("inlineCode",{parentName:"p"},"md")," file in order to activate commenting for it. E.g.:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"---\ntitle: Title of blog post\nauthors: author\ntags: [keywordOne, keywordTwo]\nenableComments: true # for Gisqus\n---\n")),(0,s.kt)("p",null,'I have enabled the comment function in the current post, which can be used as a demo. Feel free to hit the "Like" button if you found this post helpful, or post your question in the comment if you have one.'),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://giscus.app/"},"giscus.app"),"\n",(0,s.kt)("a",{parentName:"p",href:"https://graphql.org/"},"graphql.org"),"\n",(0,s.kt)("a",{parentName:"p",href:"https://dev.to/melvnl/add-comment-system-to-your-static-site-with-giscus-482o"},"Add comment system to your static site with Giscus")))}m.isMDXComponent=!0}}]);