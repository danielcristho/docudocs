import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tg/about',
    component: ComponentCreator('/tg/about', '9a8'),
    exact: true
  },
  {
    path: '/tg/blog',
    component: ComponentCreator('/tg/blog', 'bae'),
    exact: true
  },
  {
    path: '/tg/blog/archive',
    component: ComponentCreator('/tg/blog/archive', '807'),
    exact: true
  },
  {
    path: '/tg/blog/how-to-add-giscus-to-docusaurus',
    component: ComponentCreator('/tg/blog/how-to-add-giscus-to-docusaurus', '5b3'),
    exact: true
  },
  {
    path: '/tg/blog/how-to-bind-sonarlint-with-sonarqube-in-intellij-ide',
    component: ComponentCreator('/tg/blog/how-to-bind-sonarlint-with-sonarqube-in-intellij-ide', 'bb1'),
    exact: true
  },
  {
    path: '/tg/blog/tags',
    component: ComponentCreator('/tg/blog/tags', 'ab5'),
    exact: true
  },
  {
    path: '/tg/blog/tags/commenting-system',
    component: ComponentCreator('/tg/blog/tags/commenting-system', '1ee'),
    exact: true
  },
  {
    path: '/tg/blog/tags/docusaurus',
    component: ComponentCreator('/tg/blog/tags/docusaurus', '4d8'),
    exact: true
  },
  {
    path: '/tg/blog/tags/giscus',
    component: ComponentCreator('/tg/blog/tags/giscus', '6e2'),
    exact: true
  },
  {
    path: '/tg/blog/tags/how-to',
    component: ComponentCreator('/tg/blog/tags/how-to', '12b'),
    exact: true
  },
  {
    path: '/tg/blog/tags/intellij',
    component: ComponentCreator('/tg/blog/tags/intellij', '316'),
    exact: true
  },
  {
    path: '/tg/blog/tags/sonarlint',
    component: ComponentCreator('/tg/blog/tags/sonarlint', '49e'),
    exact: true
  },
  {
    path: '/tg/blog/tags/sonarqube',
    component: ComponentCreator('/tg/blog/tags/sonarqube', '74a'),
    exact: true
  },
  {
    path: '/tg/docs/tags',
    component: ComponentCreator('/tg/docs/tags', 'f64'),
    exact: true
  },
  {
    path: '/tg/docs/tags/english',
    component: ComponentCreator('/tg/docs/tags/english', 'df7'),
    exact: true
  },
  {
    path: '/tg/docs/tags/literature',
    component: ComponentCreator('/tg/docs/tags/literature', '779'),
    exact: true
  },
  {
    path: '/tg/docs/tags/poetry',
    component: ComponentCreator('/tg/docs/tags/poetry', '5bb'),
    exact: true
  },
  {
    path: '/tg/docs/tags/prose',
    component: ComponentCreator('/tg/docs/tags/prose', '215'),
    exact: true
  },
  {
    path: '/tg/docs/tags/proverb',
    component: ComponentCreator('/tg/docs/tags/proverb', '472'),
    exact: true
  },
  {
    path: '/tg/docs/tags/quotes',
    component: ComponentCreator('/tg/docs/tags/quotes', '195'),
    exact: true
  },
  {
    path: '/tg/docs/tags/tajik',
    component: ComponentCreator('/tg/docs/tags/tajik', '49d'),
    exact: true
  },
  {
    path: '/tg/docs',
    component: ComponentCreator('/tg/docs', '252'),
    routes: [
      {
        path: '/tg/docs',
        component: ComponentCreator('/tg/docs', '15e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/book-summaries/a-brief-history-of-time',
        component: ComponentCreator('/tg/docs/book-summaries/a-brief-history-of-time', '701'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/book-summaries/atomic-habits',
        component: ComponentCreator('/tg/docs/book-summaries/atomic-habits', 'd76'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/book-summaries/clean-code',
        component: ComponentCreator('/tg/docs/book-summaries/clean-code', '03e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/book-summaries/effective-java',
        component: ComponentCreator('/tg/docs/book-summaries/effective-java', '5f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/automation',
        component: ComponentCreator('/tg/docs/category/automation', '11f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/book-summaries',
        component: ComponentCreator('/tg/docs/category/book-summaries', '258'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/cheat-sheet',
        component: ComponentCreator('/tg/docs/category/cheat-sheet', 'd42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/cicd',
        component: ComponentCreator('/tg/docs/category/cicd', '85c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/computer-science-glossary',
        component: ComponentCreator('/tg/docs/category/computer-science-glossary', 'd73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/container',
        component: ComponentCreator('/tg/docs/category/container', '86a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/design-patterns',
        component: ComponentCreator('/tg/docs/category/design-patterns', 'c98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/engineering-mathematics',
        component: ComponentCreator('/tg/docs/category/engineering-mathematics', '7c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/internet-of-things',
        component: ComponentCreator('/tg/docs/category/internet-of-things', 'd54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/kubernetes',
        component: ComponentCreator('/tg/docs/category/kubernetes', 'ae9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/linux',
        component: ComponentCreator('/tg/docs/category/linux', 'adc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/literature',
        component: ComponentCreator('/tg/docs/category/literature', 'c4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/network',
        component: ComponentCreator('/tg/docs/category/network', 'f5e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/programming-languages',
        component: ComponentCreator('/tg/docs/category/programming-languages', '6c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/references',
        component: ComponentCreator('/tg/docs/category/references', '22c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/scripting',
        component: ComponentCreator('/tg/docs/category/scripting', 'adf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/security',
        component: ComponentCreator('/tg/docs/category/security', 'cd6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/tutorials',
        component: ComponentCreator('/tg/docs/category/tutorials', 'b19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/category/windows',
        component: ComponentCreator('/tg/docs/category/windows', '59c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/literature/nasr',
        component: ComponentCreator('/tg/docs/literature/nasr', '57a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/literature/nazm',
        component: ComponentCreator('/tg/docs/literature/nazm', '6b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/literature/proverbs-and-quotes',
        component: ComponentCreator('/tg/docs/literature/proverbs-and-quotes', '585'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/reading-list',
        component: ComponentCreator('/tg/docs/reading-list', '799'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/awesome',
        component: ComponentCreator('/tg/docs/references/awesome', 'df0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/automation/ansible-cheatsheet',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/automation/ansible-cheatsheet', '7ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/cicd/git',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/cicd/git', '044'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/cicd/jenkins',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/cicd/jenkins', '76f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/cicd/maven',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/cicd/maven', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/container/docker',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/container/docker', '6d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/container/docker-compose',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/container/docker-compose', 'cb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/container/dockerfile',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/container/dockerfile', '597'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/k8s/helm',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/k8s/helm', '147'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/k8s/kubectl',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/k8s/kubectl', 'e49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/k8s/minikube',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/k8s/minikube', '2fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/linux/systemd',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/linux/systemd', 'fc2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/network/curl',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/network/curl', '63a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/network/iptables',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/network/iptables', 'a9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/network/linux-networking',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/network/linux-networking', '70d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/network/ssh',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/network/ssh', 'df9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/scripting/bash',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/scripting/bash', 'b41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/scripting/python',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/scripting/python', '70a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/security/https',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/security/https', '76b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/security/openssl',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/security/openssl', 'c83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/security/ssl-certificate',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/security/ssl-certificate', 'ac9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/windows/netsh',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/windows/netsh', 'f57'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/windows/wmic',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/windows/wmic', '2af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/cheat-sheet/windows/wsl',
        component: ComponentCreator('/tg/docs/references/cheat-sheet/windows/wsl', '90b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/computer-science-glossary/computer-science-glossary-tj',
        component: ComponentCreator('/tg/docs/references/computer-science-glossary/computer-science-glossary-tj', '757'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/computer-science-glossary/programming-glossary',
        component: ComponentCreator('/tg/docs/references/computer-science-glossary/programming-glossary', 'dd4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/references/design-patterns',
        component: ComponentCreator('/tg/docs/references/design-patterns', '777'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/tools',
        component: ComponentCreator('/tg/docs/tools', 'b6c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/tutorials/engineering-mathematics/numerical-analysis',
        component: ComponentCreator('/tg/docs/tutorials/engineering-mathematics/numerical-analysis', '284'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/tutorials/iot/home-automation',
        component: ComponentCreator('/tg/docs/tutorials/iot/home-automation', '345'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/tutorials/iot/raspberry-pi',
        component: ComponentCreator('/tg/docs/tutorials/iot/raspberry-pi', '5c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/tutorials/programming-languages/bash',
        component: ComponentCreator('/tg/docs/tutorials/programming-languages/bash', 'daa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/tutorials/programming-languages/java',
        component: ComponentCreator('/tg/docs/tutorials/programming-languages/java', '5b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tg/docs/tutorials/programming-languages/python',
        component: ComponentCreator('/tg/docs/tutorials/programming-languages/python', '6b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/tg/',
    component: ComponentCreator('/tg/', 'fc0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
