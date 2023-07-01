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
        items: [
          { to: "/about", label: "About", position: "right" },
          { to: "/blog", label: "Blog", position: "right" },
          { to: "/contact", label: "Connect", position: "right" },
        ],
      },
      footer: {
        style: "light",
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
        ],
        copyright: `&copy; ${new Date().getFullYear()} Daniel Pepuho. Build using Docusaurus.`,
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