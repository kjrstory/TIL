var CONST = require("./const");

module.exports = {
  title: `김종록 Today I Learned`,
  description: `Jong Rok's Personal Wiki (Today I Learned)`,
  base: "/TIL/",
  dest: 'build',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
    ['meta', { name: 'google-site-verification', content: 'lvS87f9v0gVkvEVoDZfidOIiyW7LsT1MBLvQyf7SNHY' }],
  ],
  plugins: [["sitemap", { hostname: "https://kjrstory.github.io/TIL/" }]],
  themeConfig: {
    sidebar: [
      {
        title: 'Algorithm',
        children: CONST.AlgorithmList
      },
      {
        title: 'Algorithm(Old)',
        children: CONST.AlgorithmOldList
      },
      {
        title: 'Fast Campus',
        children: CONST.FastCampusList
      },
    ],
    nav: [{
        text: 'GitHub',
        link: 'https://github.com/kjrstory/'
      },
      {
        text: 'LinkedIn',
        link: 'https://www.linkedin.com/in/kjrstory/'
      },
      {
        text: 'Tech. Blog',
        link: 'https://kjrstory.netlify.app/'
      }
    ]
  },
}
