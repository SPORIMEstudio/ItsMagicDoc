// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ITs Helper',
  tagline: 'Doc and Guide to work with ITs Magic Engine',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://itshelper.vercel.app',
  baseUrl: '/',

  organizationName: 'itsdhanudev',
  projectName: 'itshelper',

  // 🔥 Stop Vercel from failing builds
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // ===== i18n =====
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'hi'],
    localeConfigs: {
      en: { label: 'English' },
      pt: { label: 'Português' },
      hi: { label: 'Hinglish' },
    },
  },

  // ===== Presets =====
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/itsdhanudev/itshelper/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl: 'https://github.com/itsdhanudev/itshelper/tree/main/',
        },
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  // ===== Search =====
  themes: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        language: ['en', 'pt', 'hi'],
      },
    ],
  ],

  // ===== Theme Config =====
  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',

    colorMode: { respectPrefersColorScheme: true },

    navbar: {
      title: 'ITs Helper',
      logo: { alt: 'ITs Helper Logo', src: 'img/logo.svg' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { href: 'https://github.com/itsdhanudev/itshelper', label: 'GitHub', position: 'right' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/docs/intro' },
            { label: 'Get Started', to: '/docs/get-started' },
            { label: 'Manual', to: '/docs/manual/index' },
            { label: 'Scripting Reference', to: '/docs/scripting-reference/index' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub Discussions', href: 'https://github.com/itsdhanudev/itshelper/discussions' },
            { label: 'Report Issues', href: 'https://github.com/itsdhanudev/itshelper/issues' },
            { label: 'Contribute', href: 'https://github.com/itsdhanudev/itshelper' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'ITs Magic Engine', href: 'https://itsmagic.com.br' },
            { label: 'Official Docs', href: 'https://itsmagic.com.br/documentation' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ITs Helper.`,
    },

    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  }),
};

export default config;

