var CONST = require("./const");

module.exports = {
  title: `김종록 Today I Learned`,
  description: `Jong Rok's Personal Wiki (Today I Learned)`,
  base: "/TIL/",
  dest: 'build',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'google-site-verification', content: 'lvS87f9v0gVkvEVoDZfidOIiyW7LsT1MBLvQyf7SNHY' }],
    ['script', { src: 'https://d3js.org/d3.v7.min.js' }],
    ['script', { src: 'https://unpkg.com/cal-heatmap/dist/cal-heatmap.min.js' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/cal-heatmap/dist/cal-heatmap.css' }],
  ],
  plugins: [["sitemap", { hostname: "https://kjrstory.github.io/TIL/" }]],
  themeConfig: {
    sidebar: [
      {
        title: 'Algorithm(New)',
        children: CONST.AlgorithmNewList
      },
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
