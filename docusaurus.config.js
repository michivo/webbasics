module.exports = {
  title: 'Web Basics',
  tagline: 'Unterrichtsmaterial für die Lehrveranstaltung',
  url: 'https://michivo.github.io/webbasics',
  baseUrl: '/webbasics/',
  favicon: 'img/favicon.ico',
  organizationName: 'michivo', // Usually your GitHub org/user name.
  projectName: 'webbasics', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Web Basics',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Skriptum',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/michivo/webbasics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      /*links: [
        {
          title: 'Docsasdsad',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/michivo/webbasics',
            },
          ],
        },
      ],*/
      copyright: `Copyright © ${new Date().getFullYear()} Michael Faschinger, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'intro-onesecond',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/michivo/webbasics/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/michivo/webbasics/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
