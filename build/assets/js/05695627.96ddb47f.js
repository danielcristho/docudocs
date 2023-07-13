"use strict";(self.webpackChunkdanielcristho=self.webpackChunkdanielcristho||[]).push([[1854],{1554:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"how-to-bind-sonarlint-with-sonarqube-in-intellij-ide","metadata":{"permalink":"/docudocs/blog/how-to-bind-sonarlint-with-sonarqube-in-intellij-ide","editUrl":"https://github.com/danielcristho/docudocs/blob/main/blog/2023-04-13-how-to-bind-sonarlint-with-sonarqube-in-intellij-ide.md","source":"@site/blog/2023-04-13-how-to-bind-sonarlint-with-sonarqube-in-intellij-ide.md","title":"How to bind SonarLint with SonarQube in IntelliJ IDE","description":"Introduction","date":"2023-04-13T00:00:00.000Z","formattedDate":"April 13, 2023","tags":[{"label":"sonarlint","permalink":"/docudocs/blog/tags/sonarlint"},{"label":"sonarqube","permalink":"/docudocs/blog/tags/sonarqube"},{"label":"intellij","permalink":"/docudocs/blog/tags/intellij"},{"label":"how-to","permalink":"/docudocs/blog/tags/how-to"}],"readingTime":4.02,"hasTruncateMarker":true,"authors":[{"name":"Daniel Pepuho","url":"https://github.com/danielcristho","imageURL":"https://github.com/danielcristho.png","key":"danielcristho"}],"frontMatter":{"slug":"how-to-bind-sonarlint-with-sonarqube-in-intellij-ide","title":"How to bind SonarLint with SonarQube in IntelliJ IDE","authors":"danielcristho","tags":["sonarlint","sonarqube","intellij","how-to"],"enableComments":true,"countApiKey":"cabc9090-1feb-4974-8c8f-bc1d3d039dd3"},"nextItem":{"title":"How to add Giscus comments to Docusaurus","permalink":"/docudocs/blog/how-to-add-giscus-to-docusaurus"}},"content":"## Introduction\\n\\nIn this post, we are going to discuss the process of installing, configuring, and connecting SonarLint in IntelliJ IDE with the SonarQube server. Please note that this post does not cover the installation and configuration of SonarQube server.\\n\\n### Brief explanation of SonarLint and SonarQube\\n\\n***SonarLint*** is an IDE extension that helps developers identify and resolve quality issues while writing code. It analyzes code for a variety of issues such as bugs, vulnerabilities, code smells and provides suggestions to fix them. It allows developers to resolve code quality issues early on in the development process and reduce the cost of maintenance.\\n\\n***SonarQube*** is an open-source tool which can be integrated with build tools, such as Jenkins, for continuous inspection and automatic static analysis of code quality to detect vulnerabilities, bugs and code smells in build process.\\n\\n\x3c!--truncate--\x3e\\n### Why it\'s important to bind them in IntelliJ IDE\\n\\nBoth SonarLint and SonarQube are technologies that perform code inspection and analysis to detect and resolve code quality issues. Nevertheless, they have different functionality scopes. SonarLint analyzes code while writing it in the IDE, providing instant feedback, while SonarQube is used in the build phase to continuously inspect and analyze the codebase.\\n\\nIt is recommended to use both SonarLint and SonarQube tools together, where the SonarLint plugin installed in the IDE is connected to the SonarQube server, especially if multiple developers are involved in the development process. In addition to the benefits mentioned earlier, such as improving code quality and reducing maintenance costs, integrating SonarLint with SonarQube in the IDE also ensures compliance with coding standards and best practices within the development team. Moreover, it facilitates collaboration by providing a common platform for developers to maintain, collaborate and share settings on server side such as quality profiles, analysis settings and quality gates. Additionally optional notifications from SonarQube keep team informed of any quality gate status change.\\n\\n## Installing SonarLint plugin in IntelliJ IDE\\n\\n- Go to the menu File \u2192 Settings \u2192 Plugins \u2192 Type \u201cSonarLint\u201d \u2192 Install and Restart IDE\\n\\n![1](./img/how-to-bind-sonarlint-with-sonarqube-in-intellij-ide/1.png)\\n\\nAfter this step we can already use the SonarLint with default local rules. But we are going discuss how to bind SonarLint to SonarQube server in the next chapter.\\n\\n## Setting up SonarQube server\\n\\nIn this step we are going to generate a SonarQube authentication token for SonarLint plugin in IntelliJ IDE\\n\\n- Go to SonarQube \u2192 Open your Account/Profile Page \u2192 select Security tab\\n- Enter or select Name, Type (e.g. User token) and duration of the Expiry\\n- Generate and Copy authentication token\\n\\n![2](./img/how-to-bind-sonarlint-with-sonarqube-in-intellij-ide/2.png)\\n\\n## Binding SonarLint with SonarQube\\n\\n### Add new SonarQube Connection\\n\\n- In IntelliJ go to the menu File \u2192 Settings \u2192 Tools \u2192 SonarLint\\n- Select Settings tab \u2192 click on \u201c+\u201d sign to create new SonarQube connection\\n- In opened window give a Connection Name, Choose a Connection Type (e.g. SonarQube) and enter SonarQube URL\\n- Enable or disable proxy as you need and click Next\\n\\n![3](./img/how-to-bind-sonarlint-with-sonarqube-in-intellij-ide/3.png)\\n\\n- In opened window select Authentication type (e.g. Token) and paste your SonarQube authentication token from previous chapter in field Token and click Next\\n- In the next step check \u201cReceive notification from SonarQube\u201d if you wish to receive notification about Quality Gate status and click Next\\n- If everything was correct, you will see \\"Connection successfully created\\" in the next window and click Finish to save connection settings.\\n\\n![4](./img/how-to-bind-sonarlint-with-sonarqube-in-intellij-ide/4.png)\\n\\nSo far we have managed to create a SonarQube connection in SonarLint plugin settings and successfully connect to SonarQube server.\\n\\n\\n### Configure SonarLint Project Settings\\n\\nIn this step we are going to add SonarQube Connection created in previous step and select specific SonarQube project, since SonarQube may have many projects.\\n\\n- In IntelliJ go to the menu File \u2192 Settings \u2192 Tools \u2192 SonarLint \u2192 Project Settings\\n- Select \u201cBind project to SonarQube\u201d\\n- Select newly create SonarQube Connection in field Connection\\n- Search and select your project using \u201cSearch in list\u2026\u201d button (hint: to fetch project list from SonarQube server may take several seconds)\\n- Finally click \u201cUpdate local storage\u201d to download the settings and rules from SonarQube server\\n- You can track the progress of the update process in IntelliJ/SonarLint logs\\n\\n![5](./img/how-to-bind-sonarlint-with-sonarqube-in-intellij-ide/5.png)\\n\\nCongratulations, you have successfully bound the SonarLint plugin in IntelliJ IDE to the SonarQube server. You can now use the SonarLint plugin with SonarQube in IntelliJ IDE by e.g. simply opening a Java class and selecting \\"Analyze with SonarLint\\" from the context menu of editor.\\n\\n## Conclusion\\n\\nIn this article, we learned how to install, configure and connect SonarLint plugin in IntelliJ IDE with the SonarQube server. By using SonarLint and SonarQube tools together developers can take the benefits of both to perform code inspection and analysis to detect and resolve code quality issues and reduce maintenance costs.\\n\\n## References\\n\\n1. [Wikipedia]([https://www.wikipedia.org/](https://www.wikipedia.org/))\\n2. [SonarSource Community]([https://community.sonarsource.com/](https://community.sonarsource.com/))"},{"id":"how-to-add-giscus-to-docusaurus","metadata":{"permalink":"/docudocs/blog/how-to-add-giscus-to-docusaurus","editUrl":"https://github.com/danielcristho/docudocs/blob/main/blog/2022-09-05-how-to-add-giscuss-to-docusaurus.md","source":"@site/blog/2022-09-05-how-to-add-giscuss-to-docusaurus.md","title":"How to add Giscus comments to Docusaurus","description":"Goal","date":"2022-09-05T00:00:00.000Z","formattedDate":"September 5, 2022","tags":[{"label":"docusaurus","permalink":"/docudocs/blog/tags/docusaurus"},{"label":"giscus","permalink":"/docudocs/blog/tags/giscus"},{"label":"commenting-system","permalink":"/docudocs/blog/tags/commenting-system"},{"label":"how-to","permalink":"/docudocs/blog/tags/how-to"}],"readingTime":3.03,"hasTruncateMarker":true,"authors":[{"name":"Daniel Pepuho","url":"https://github.com/danielcristho","imageURL":"https://github.com/danielcristho.png","key":"danielcristho"}],"frontMatter":{"slug":"how-to-add-giscus-to-docusaurus","title":"How to add Giscus comments to Docusaurus","authors":"danielcristho","tags":["docusaurus","giscus","commenting-system","how-to"],"enableComments":true,"countApiKey":"d6943a35-55d6-495e-8f03-92600d04b1f1"},"prevItem":{"title":"How to bind SonarLint with SonarQube in IntelliJ IDE","permalink":"/docudocs/blog/how-to-bind-sonarlint-with-sonarqube-in-intellij-ide"}},"content":"## Goal\\n\\nThis post is a step-by-step description of how to add [Giscus](https://giscus.app/), a commenting system powered by GitHub Discussions, to a static website generated by Docusaurus.\\n\\n## Setup Giscus\\n\\nFollow the steps in the sections of the current chapter to set up Giscus and connect it to the GitHub discussions.\\n\\n### Enable GitHub discussion\\n\\n- Create Github repository in your Github account where comments are stored in Discussion section.\\n- In the main page of created repository go to Settings.\\n- Under \\"Features\\" section, click \\"Set up discussions\\".\\n- Edit the template in \\"Start a new discussion\\" and click \\"Start discussion\\".\\n\\n\x3c!--truncate--\x3e\\n### Enable Giscus\\n\\n- [Configure](https://github.com/apps/giscus) giscus in your GitHub account.\\n- In Section \\"Repository access\\" add **only** created repository from previous step to be accessed by giscus and click \\"Save\\".\\n\\n### Get repository API key\\n\\n- Login with GitHub account in [GraphQL API Explorer](https://docs.github.com/en/graphql/overview/explorer).\\n- Use following query to fetch the id of created repository, discussion categories with its details (e.g. id and name). **Note!** Replace ```owner``` and ```name``` with your GitHub account name and name of repository you created.\\n```json\\nquery {\\n  repository(owner: \\"nameOfYourGitHubAccount\\", name:\\"nameOfCreatedRepository\\"){\\n    id\\n    discussionCategories(first:10) {\\n      edges {\\n        node {\\n          id\\n          name\\n        }\\n      }\\n    }\\n  }\\n}\\n```\\nThe result json object will be similar to:\\n```json\\n{\\n  \\"data\\": {\\n    \\"repository\\": {\\n      \\"id\\": \\"R_kgDOIVqhTg\\",\\n      \\"discussionCategories\\": {\\n        \\"edges\\": [\\n          {\\n            \\"node\\": {\\n              \\"id\\": \\"DIC_kwDOIVqhTs4CSSES\\",\\n              \\"name\\": \\"Announcements\\"\\n            }\\n          },\\n          {\\n            \\"node\\": {\\n              \\"id\\": \\"DIC_kwDOIVqhTs4CSSET\\",\\n              \\"name\\": \\"General\\"\\n            }\\n          },\\n          {\\n            \\"node\\": {\\n              \\"id\\": \\"DIC_kwDOIVqhTs4CSSEV\\",\\n              \\"name\\": \\"Ideas\\"\\n            }\\n          },\\n          {\\n            \\"node\\": {\\n              \\"id\\": \\"DIC_kwDOIVqhTs4CSSEX\\",\\n              \\"name\\": \\"Polls\\"\\n            }\\n          },\\n          {\\n            \\"node\\": {\\n              \\"id\\": \\"DIC_kwDOIVqhTs4CSSEU\\",\\n              \\"name\\": \\"Q&A\\"\\n            }\\n          },\\n          {\\n            \\"node\\": {\\n              \\"id\\": \\"DIC_kwDOIVqhTs4CSSEW\\",\\n              \\"name\\": \\"Show and tell\\"\\n            }\\n          }\\n        ]\\n      }\\n    }\\n  }\\n}\\n```\\n\\n## Create Giscus component\\n- Install @giscus/react package\\n```bash\\nnpm i @giscus/react\\n```\\n- Create Giscus Component, e.g. under ```/src/components/GiscusComponent``` as follows:\\n```js\\nimport React from \'react\';\\nimport Giscus from \\"@giscus/react\\";\\nimport { useColorMode } from \'@docusaurus/theme-common\';\\n\\nexport default function GiscusComponent() {\\n  const { colorMode } = useColorMode();\\n\\n  return (\\n    <Giscus\\n      repo=\\"nameOfYourGitHubAccount/nameOfCreatedRepository\\"\\n      repoId=\\"idOfCreatedRepo\\"\\n      category=\\"General\\"\\n      categoryId=\\"IdOfDiscussionCategory\\"  // E.g. id of \\"General\\"\\n      mapping=\\"url\\"                        // Important! To map comments to URL\\n      term=\\"Welcome to @giscus/react component!\\"\\n      strict=\\"0\\"\\n      reactionsEnabled=\\"1\\"\\n      emitMetadata=\\"1\\"\\n      inputPosition=\\"top\\"\\n      theme={colorMode}\\n      lang=\\"en\\"\\n      loading=\\"lazy\\"\\n      crossorigin=\\"anonymous\\"\\n      async\\n    />\\n  );\\n}\\n```\\n\\n## Create BlogPostItem component\\n\\n- Create BlogPostItem component to wrap blog posts with Giscus commenting system as follows:\\n```bash\\nnpm run swizzle [theme name] [component name] -- --wrap\\n\\n# Example:\\nnpm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap\\n```\\nThis will create a BlogPostItem component under ```src/theme```. Edit ```index.js``` as follows:\\n```js\\nimport React from \'react\';\\nimport { useBlogPost } from \'@docusaurus/theme-common/internal\'\\nimport BlogPostItem from \'@theme-original/BlogPostItem\';\\nimport GiscusComponent from \'@site/src/components/GiscusComponent\';\\nimport useIsBrowser from \'@docusaurus/useIsBrowser\';\\n\\nexport default function BlogPostItemWrapper(props) {\\n  const { metadata, isBlogPostPage } = useBlogPost()\\n  const isBrowser = useIsBrowser();\\n\\n  const { frontMatter, slug, title } = metadata\\n  const { enableComments } = frontMatter\\n\\n  return (\\n    <>\\n      <BlogPostItem {...props} />\\n      {(enableComments && isBlogPostPage) && (\\n        <GiscusComponent />\\n      )}\\n    </>\\n  );\\n}\\n```\\n\\n**Note** that the ```useBlogPost()``` Hook is used in BlogPostItem component to make activation of comments per blog post configurable. The key value ```enableComments: true```  must be added to your blog post ```md``` file in order to activate commenting for it. E.g.:\\n\\n```bash\\n---\\ntitle: Title of blog post\\nauthors: author\\ntags: [keywordOne, keywordTwo]\\nenableComments: true # for Gisqus\\n---\\n```\\n\\nI have enabled the comment function in the current post, which can be used as a demo. Feel free to hit the \\"Like\\" button if you found this post helpful, or post your question in the comment if you have one.\\n\\n## References\\n\\n[giscus.app](https://giscus.app/)\\n[graphql.org](https://graphql.org/)\\n[Add comment system to your static site with Giscus](https://dev.to/melvnl/add-comment-system-to-your-static-site-with-giscus-482o)"}]}')}}]);