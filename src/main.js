import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/scss/main.scss'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)

  // Add a meta tag
  head.meta.push({
    name: 'keywords',
    content: 'Joseph Pire,Developer,Junior,Web,HTML,CSS,XML,JavaScript,PHP,Apache,Java,Python,Github,Gitlab,Git,SQL,Docker,Front-end,Back-end,Software,Database,Api,Server,Virtualization,Network,Symfony,APIPlatform,Jamstack,Strapi,NetlifyCMS,Gridsome,Nuxt,jQuery,TailwindCSS,Bootsrap,Bulma,Belgium,Brabant-Wallon,Louvain-la-Neuve,'
  })

}
