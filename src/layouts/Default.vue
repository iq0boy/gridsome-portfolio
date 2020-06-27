<template>
  <div id="app" class="flex flex-col h-full">
    <HeaderPartial v-if="hideHeader!==true" @setTheme="setTheme" :theme="this.theme" ></HeaderPartial>
    <main class="flex-grow">
      <slot />
    </main>
    <NavbarPartial :disableScroll="disableScroll" @setTheme="setTheme" :theme="this.theme" class="flex-1"></NavbarPartial>
    <FooterPartial class="flex-initial"></FooterPartial>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from '~/layouts/partials/HeaderWithNavbar.vue'
import NavbarPartial from '~/layouts/partials/Navbar.vue'
import FooterPartial from '~/layouts/partials/Footer.vue'

export default {
  props: {
    hideHeader: {
      type: Boolean,
      default: false
    },
    disableScroll: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      theme: 'dark'
    };
  },
  methods: {
    setTheme(mode) {
        this.theme = mode
    }
  },
  components: {
    HeaderPartial,
    NavbarPartial,
    FooterPartial
  },
  
  metaInfo: {
    bodyAttrs: {
      class: "m-0"
    }
  }
}
</script>