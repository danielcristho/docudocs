// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require("dotenv").config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: process.env.SITE_TITLE,
  tagline: '',
  favicon: 'img/terminal.png',
  url: process.env.SITE_URL,
  baseUrl: '/',
  projectName: process.env.PROJECT_NAME,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      "./plugins/blog-plugin",
      {
        id: "blog",
        routeBasePath: "blog",
        path: "./blog",
        blogSidebarCount: 0,
        showReadingTime: true,
        editUrl: ({ blogDirPath, blogPath }) => {
          return `https://github.com/${process.env.ORGANIZATION_NAME}/${process.env.REPOSITORY_NAME}/edit/main/${blogDirPath}/${blogPath}`;
        },
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "blog-work",
        routeBasePath: "work",
        path: "./blog-work",
        blogSidebarCount: 0,
        blogTitle: "Featured Work",
        showReadingTime: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: process.env.SITE_TITLE,
        logo: {
          alt: 'My Site Logo',
          src: 'img/terminal.png',
        },
        items: [
          { to: "/about", label: "About", position: "right" },
          { to: "/blog", label: "Blog", position: "right" },
          { to: "/work", label: "Work", position: "right" },
          { to: "/contact", label: "Contact", position: "right" },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;
