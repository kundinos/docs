// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "@kundinos",
  tagline: "Projects by Yury Kundin",
  url: "http://www.kundinos.ru",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "kundinos",
  projectName: "docs",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
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
        title: "@kundinos",
        logo: {
          alt: "@kundinos logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "/docs/react-hooks/motivation",
            label: "react-hooks",
            position: "left",
          },
          {
            href: "/docs/mock-media-queries/motivation",
            label: "mock-media-queries",
            position: "left",
          },
          {
            href: "/docs/telegram-bot-api/motivation",
            label: "telegram-bot-api",
            position: "left",
          },
          {
            href: "https://github.com/kundinos",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Projects",
            items: [
              {
                label: "react-hooks",
                to: "/docs/react-hooks/motivation",
              },
              {
                label: "mock-media-queries",
                to: "/docs/mock-media-queries/motivation",
              },
              {
                label: "telegram-bot-api",
                to: "/docs/telegram-bot-api/motivation",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/kundinos",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} @kundinos. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
