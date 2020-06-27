<template>
  <a role="button" @click.prevent="toggleTheme()"  
      :aria-label="'Toggle ' + nextTheme" 
      :title="'Toggle ' + nextTheme"
    >
    <sunLogo id="sun" class="mr-3" v-if="theme === 'dark'"></sunLogo>
    <moon-logo id="moon" class="mr-3" v-if="theme === 'light'"></moon-logo>

  </a>
</template>

<script>
import sunLogo from '~/assets/icons/sun.svg?inline'
import moonLogo from '~/assets/icons/moon.svg?inline'
let themes = ['light', 'dark']

export default {
  components: {
    sunLogo,
    moonLogo
  },
  props: {
    theme: {
      type: String,
    },
  },

  computed: {
    nextTheme() {
      const currentIndex = themes.indexOf(this.theme)
      const nextIndex = (currentIndex + 1) % themes.length
      return themes[nextIndex]
    }
  },
  methods: {
    toggleTheme() {
      const currentIndex = themes.indexOf(this.theme);
      const nextIndex = (currentIndex + 1) % themes.length;
      window.__setPreferredTheme(themes[nextIndex])

      this.$emit('setTheme', themes[nextIndex])
    }
  },
  async mounted() {
    // set default
    if (typeof window.__theme !== 'undefined') this.$emit('setTheme', window.__theme)
  }
}
</script>

<style lang="scss" scoped>

  body {

    svg {
      width: 16px;
      height: 16px;
    }

    #header {
      svg#moon {
        fill: white;
      }
      a:hover svg#moon {
        fill: black;
      }
    }
    nav{
      svg#moon {
        fill: #555555;
      }
      a:hover svg#moon {
        fill: black;
      }
    }

    [data-theme="dark"] #header, [data-theme="dark"] nav {
       svg {
        fill: none;
        circle, line {
          stroke: white;
        }
      }

      a:hover svg {
        fill: none;
        circle, line {
          fill: black;
          stroke: #555555;
        }
      }
    }
  }

</style>