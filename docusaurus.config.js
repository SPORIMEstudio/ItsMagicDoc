// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ITs Helper',
  tagline: 'Doc and Guide to work with ITs Magic Engine',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Your site URL
  url: 'https://itshelper.vercel.app',
  baseUrl: '/',

  // GitHub repo (not required for Vercel, but good metadata)
  organizationName: 'itsdhanudev',
  projectName: 'itshelper',

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
        docs: {
          sidebarPath: './sidebars.js',

          editUrl: 'https://github.com/itsdhanudev/itshelper/tree/main/',
        },
        blog: {
          showReadingTime: true,

          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          editUrl: 'https://github.com/itsdhanudev/itshelper/tree/main/',

          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // 🔍 Local Search Plugin (NEW SEARCH BAR)
  themes: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        language: "en",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'ITs Helper',
        logo: {
          alt: 'ITs Helper Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },

          // GitHub link
          {
            href: 'https://github.com/itsdhanudev/itshelper',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
              {
                label: 'Contribute to Docs',
                href: 'https://github.com/itsdhanudev/itshelper',
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
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/itsdhanudev/itshelper' },
            ],
          },
        ],
        copyright:
          `Copyright © ${new Date().getFullYear()} ITs Helper. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
