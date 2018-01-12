const currentYear = new Date().getFullYear();

const siteConfig = {
  projectName: 'fsts-js',
  title: 'From Station to Station',
  tagline: 'JavaScript toolkits library accumulated from working from project to project.',
  copyright: 'Copyright © ' + currentYear + ' Richard Zhang',

  rootUrl: 'https://richardzcode.github.io',
  baseUrl: '/fsts-js',

  icon: 'img/fsts.png',
  favicon: 'img/favicon.ico',

  headerLinks: [
    {doc: 'installation', label: 'Docs'},
    {doc: 'guide_logger', label: 'Guide'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ]
};

module.exports = siteConfig;
