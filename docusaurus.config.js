// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require("dotenv").config();

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: process.env.SITE_TITLE,
  tagline: "",
  url: process.env.SITE_URL,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: process.env.ORGANIZATION_NAME,
  projectName: process.env.REPOSITORY_NAME,
  customFields: {
    giscusDiscussionCategory: process.env.GISCUS_DISCUSSION_CATEGORY,
    giscusDiscussionCategoryId: process.env.GISCUS_DISCUSSION_CATEGORY_ID,
    giscusProjectId: process.env.GISCUS_PROJECT_ID,
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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
          alt: "Daniel Logo",
          src: "img/docusaurus.png",
        },
        items: [
          { to: "/about", label: "About", position: "right" },
          { to: "/blog", label: "Blog", position: "right" },
          { to: "/work", label: "Work", position: "right" },
          { to: "/contact", label: "Contact", position: "right" },
        ],
      },
      footer: {
        style: "light",
        logo: {
          alt: "Daniel Logo",
          href: "/",
          src: "img/docusaurus.png",
          height: 50,
          width: 50,
        },
        links: [
          {
            label: "GitHub",
            href: "https://github.com/danielcristho",
          },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/daniel-pepuho",
          },
          {
            label: "Twitter",
            href: "https://www.twitter.com/chrstdan",
          },
          {
            label: "Dev To",
            href: "https://dev.to/danielcristho",
          },
          {
            label: "Ops Io",
            href: "https://dev.to/danielcristho",
          },
        ],
        copyright: `&copy; ${new Date().getFullYear()} Daniel Pepuho Tech Docs made with Docusaurus`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      sidebar: {
        hideable: false,
      },
    }),
};

module.exports = config;
