// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Buchhaltung",
  url: "https://buchhaltung.github.io",
  baseUrl: "/Buchhaltung/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Liskari", // Usually your GitHub org/user name.
  projectName: "Buchhaltung", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Liskari/Buchhaltung",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/Liskari/Buchhaltung",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Buchhaltung",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Erklärung",
          },
          { to: "/blog", label: "Übungen", position: "left" },
          {
            href: "https://github.com/Liskari",
            label: "Mein GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Doku",
            items: [
              {
                label: "Buchhaltung Erklärung",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Mehr",
            items: [
              {
                label: "Übungen",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/Liskari",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Buchhaltung by Lisa Rothe, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
