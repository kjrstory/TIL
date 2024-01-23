var CONST = require("./const");

module.exports = {
  title: `김종록 Today I Learned`,
  description: `Jong Rok's Personal Wiki (Today I Learned)`,
  base: "/TIL/",
  dest: 'build',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
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
      }
    ]
  },
}


