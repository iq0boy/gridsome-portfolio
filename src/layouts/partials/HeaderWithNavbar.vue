<template>
  <header class="bg-black relative z-1000" id="header">

    <!-- NavBar -->
    <nav class="px-12 h-20 sm:h-16 mx-auto py-4">
      <div class="flex flex-col sm:flex-row flex-grow space-between items-center w-auto height-30px">

        <div class="hidden md:flex items-center flex-shrink-0 text-white mr-6">
          <!--          <span class="font-semibold text-xl tracking-tight">{{ $static.metadata.siteAuthor }}</span>-->
          <g-image class="logo" src="~/favicon.png" width="25" height="25" fit="contain"></g-image>
          <!--          <font-awesome :icon="['fas', 'code']" class="ml-3"></font-awesome>-->
        </div>

        <div class="text-sm flex-grow uppercase pb-2 sm:py-0">
          <ul class="list-none m-0 flex justify-center sm:justify-start text-gray-300 uppercase">
            <li
              :key="element.name"
              v-for="(element,index) in $static.metadata.navigation"
              class="hover:text-white"
              v-bind:class="{'mr-4' : index !== Object.keys($static.metadata.navigation).length - 1}"
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

<!--        <div class="w-full sm:w-auto text-gray-400">
          <ul class="list-none m-0 flex justify-center md:justify-end">
            <li class="mr-3 self-start">
              <theme-switcher v-on="$listeners" :theme="theme"/>
            </li>
            <li
              :key="element.name"
              v-for="(element,index) in $static.metadata.social"
              class="hover:text-white mr-6"
            >
              <span class="text-sm">
                <a :href="element.link" target="_blank" rel="noopener noreferrer">
                  <font-awesome :icon="['fab', element.icon]" />
                </a>
              </span>
            </li>
            <li class="hover:text-white">
              <g-link to="/contact">
                <font-awesome :icon="['fas', 'envelope']" />
              </g-link>
            </li>
          </ul>
        </div>-->
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

    <div class="pt-8  md:pt-16 lg:pt-32 lg:pb-56 text-center">

      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center text-white">
        <!--Left Col-->
        <div class="flex flex-col w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left">
          <p class="tracking-loose w-full">{{ $static.metadata.siteDescription }}</p>
          <h1 class="my-4 text-5xl font-bold leading-tight">I am {{ $static.metadata.siteAuthor }}</h1>
          <p class="leading-normal text-2xl mb-8">And this is my portfolio</p>
          <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Check my CV</button>

        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 md:py-6 text-center">
          <figure class="w-full" >
            <HeroLogo id="hero-svg" />
          </figure>
        </div>
      </div>

    </div>


  </header>
</template>

<static-query>
query {
  metadata {
    siteName
    siteAuthor
    siteDescription
    navigation : headerNavigation {
      name
      link
      external
    }
    social {
      icon
      link
      title
    }
  }
}
</static-query>

<script>

import ThemeSwitcher from '~/components/ThemeSwitcher'
import githubLogo from '~/assets/icons/github.svg?inline'
import linkedInLogo from '~/assets/icons/linkedin.svg?inline'
import mailLogo from '~/assets/icons/mail.svg?inline'
import HeroLogo from '~/assets/svg/undraw_source_code_xx2e.svg?inline'

export default {
  props: {
    theme: {
      type: String,
    }
  },
  computed: {
    githubLink: function () {
      return this.$static.metadata.social.filter((e)=>e.title="github").pop().link
    },
    linkedInLink: function () {
      return this.$static.metadata.social.filter((e)=>e.title="linkedin").pop().link
    }
  },
  components : {
    ThemeSwitcher,
    githubLogo,
    linkedInLogo,
    mailLogo,
    HeroLogo
  }
};
</script>

<style lang="scss" scoped>

  #hero-svg {
    width: 100%;
    height: auto;
  }

  body[data-theme="dark"] #header {
    background: linear-gradient(90deg,black 60%, #742a2a 250%);
  }

  body[data-theme="light"] #header {
    background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  }

  body[data-theme="light"] {
    header{
      color: white;
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
        fill: white;
        width: 16px;
        height: 16px;
      }
    }

  }

  body[data-theme="dark"] {
    header{
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