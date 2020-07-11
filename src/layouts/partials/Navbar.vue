<template>
  <div id="nav-container" class="fixed inset-0 h-20 sm:h-16 shadow-md"
    v-bind:class="{
    'first-plan opacity-100' : navBarShow,
    'opacity-0' : !navBarShow
  }"
  >
    <nav 
    class="mx-4 sm:px-0 py-4 transition-all transition-500">
      <div class="flex flex-col sm:flex-row flex-grow items-center w-auto">

        <!--logo-->
        <div class="logo hidden md:flex items-center flex-shrink-0  mr-6">
          <faviconLogo  width="25" height="25"/>
        </div>

        <!--links navigation-->
        <div class="text-sm pb-2 sm:py-0 w-full sm:w-auto flex-grow uppercase">
          <ul 
          class="list-none m-0 flex justify-center sm:justify-start uppercase transition-all transition-500">
            <li class="mr-4">
              <g-link :to="'/'" class="animated-link" :active-class="'home-active'">Home</g-link>
            </li>
            <li
              :key="element.name"
              v-for="(element,index) in $static.metadata.navigation"
              v-bind:class="{'mr-4' : index != Object.keys($static.metadata.navigation).length - 1}"
            >
              <a
                :href="element.link"
                v-if="element.external"
                target="_blank"
                rel="noopener noreferrer"
                class="animated-link"
              >{{ element.name }}</a>
              <g-link v-else :to="element.link" class="animated-link">{{element.name}}</g-link>
            </li>
          </ul>
        </div>

        <!--icons navigations-->
        <div>
          <ul class="list-none m-0 flex justify-center md:justify-end">

            <!--theme switcher-->
            <li class="mr-3">
              <theme-switcher v-on="$listeners" :theme="theme"/>
            </li>

            <!--github-->
            <li class="mr-6">
              <span class="text-sm">
                <a :href="githubLink" target="_blank" rel="noopener noreferrer">
                  <githubLogo></githubLogo>
                </a>
              </span>
            </li>

            <!--linkedin-->
            <li class="mr-6">
              <span class="text-sm">
                <a :href="linkedInLink" target="_blank" rel="noopener noreferrer">
                  <linked-in-logo></linked-in-logo>
                </a>
              </span>
            </li>

            <!--contact-->
            <li>
              <g-link to="/contact">
                <mailLogo></mailLogo>
              </g-link>
            </li>

          </ul>
        </div>

      </div>

    </nav>
  </div>
</template>

<script>

import ThemeSwitcher from '~/components/ThemeSwitcher'
import githubLogo from '~/assets/icons/github.svg?inline'
import linkedInLogo from '~/assets/icons/linkedin.svg?inline'
import mailLogo from '~/assets/icons/mail.svg?inline'
import faviconLogo from '~/faviconBW.svg'

export default {
  components : {
    ThemeSwitcher,
    githubLogo,
    linkedInLogo,
    mailLogo,
    faviconLogo
  },
  props: {
    theme: {
      type: String
    },
    alwaysShown: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      scrollPosition: null,
      headerHeight: 0,
      navBarInitiated: false, // to avoid display navBar on load ^u^
    };
  },
  computed: {
    navBarShow: function () {
      return this.alwaysShown || (this.navBarInitiated && this.headerHeight===0 || (this.scrollPosition > this.headerHeight))
    },
    githubLink: function () {
      return this.$static.metadata.social.filter((e) => e.title ==="github").pop().link
    },
    linkedInLink: function () {
      return this.$static.metadata.social.filter((e) => e.title ==="linkedin").pop().link
    }
  },

  methods: {
    updateScroll() {
      this.navBarInitiated = true;
      this.scrollPosition = window.scrollY;
    },
    updateHeaderSize() {
      let computedHeight = 0;
      if (null !== document.getElementById("header")) {
        computedHeight = document.getElementById("header").clientHeight;
      }
      this.headerHeight = computedHeight;
    },
    setHeaderHeight(height) {
      this.headerHeight = height;
    },
  },

  mounted() {
    if(null !== document.getElementById("header")) {
      let height = document.getElementById("header").clientHeight;
      this.setHeaderHeight(height);
      window.addEventListener("scroll", this.updateScroll);
      window.addEventListener("resize", this.updateHeaderSize);
    }
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
    siteAuthor
    navigation : headerNavigation {
      name
      link
      external
    }
    social {
      title
      link
    }
  }
}
</static-query>

<style lang="scss" scoped>
  .first-plan {
    z-index: 2000;
  }

  body[data-theme="light"] {
    #nav-container{
      background-color: #fefefefe;
      color: #555555;
      .logo {
        filter: invert(100%);
      }
      a:hover {
        color: black;
        svg {
          fill: black;
        }
      }
      a svg {
        fill: #555555;
        width: 16px;
        height: 16px;
      }
    }

  }

  body[data-theme="dark"] {
    #nav-container{
      background-color: black;
      color: white;
      a:hover {
        color: #555555;
        svg {
          fill: #555555;
        }
      }
      a svg {
        fill: white;
        width: 16px;
        height: 16px;
      }
    }
  }


</style>
