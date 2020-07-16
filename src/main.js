import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/scss/main.scss'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}
