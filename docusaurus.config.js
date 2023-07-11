const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Daniel Pepuho',
  url: 'https://www.danielcristho.site',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'danielcristho',
  projectName: 'docudocs',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
  },

  plugins: [
    // ... plugins lainnya
    [
      '@cmfcmf/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        language: "en",
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/danielcristho/docudocs/blob/main/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/danielcristho/docudocs/blob/main/',
          blogTitle: 'Blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // gtag: {
        //   trackingID: '',
        //   anonymizeIP: true,
        // },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
    },
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
      type: 'text/css',
    },
  ],

  scripts: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js',
      type: 'text/javascript',
    },
  ],
  themeConfig: {
    navbar: {
      title: 'Home',
      hideOnScroll: true,
      items: [
        {
          type: 'doc',
          docId: 'welcome',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/danielcristho',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `© ${new Date().getFullYear()} - Daniel Pepuho. Build using  <a href="https://docusaurus.io/">Docusaurus</a>.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // ...
  },
};

module.exports = config;
