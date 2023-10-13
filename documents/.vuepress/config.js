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


module.exports = {
  configureWebpack: {
    externals: {
      d3: 'https://d3js.org/d3.v7.min.js', // d3.js를 외부 스크립트로 로드
    },
  },
  chainWebpack: (config) => {
    config
      .entry('app')
      .add('https://unpkg.com/cal-heatmap/dist/cal-heatmap.css') // cal-heatmap 스타일을 추가
      .add('https://unpkg.com/cal-heatmap/dist/cal-heatmap.min.js'); // cal-heatmap 스크립트를 추가
  },
};

