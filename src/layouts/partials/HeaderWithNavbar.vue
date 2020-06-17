<template>
  <header class="bg-black relative z-1000 bg-radial-t-gray-to-black" id="header">

    <nav class="container h-20 sm:h-16  mx-auto px-4 sm:px-0 py-4">
      <div class="flex flex-col sm:flex-row flex-grow space-between items-center w-auto height-30px">

        <div class="hidden md:flex items-center flex-shrink-0 text-white mr-6">
          <!--          <span class="font-semibold text-xl tracking-tight">{{ $static.metadata.siteAuthor }}</span>-->
          <g-image src="~/favicon.png" width="25" height="25" fit="contain"></g-image>
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
        
        <div class="w-full sm:w-auto text-gray-400">
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
        </div>

      </div>
    </nav>

    <div class="pt-2 md:pt-16  text-center">

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
          <figure class="w-full md:w-4/5 z-50" >
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
    }
  }
}
</static-query>

<script>

import ThemeSwitcher from '~/components/ThemeSwitcher'
import HeroLogo from '~/assets/svg/undraw_source_code_xx2e.svg?inline'

export default {
  props: {
    theme: {
      type: String,
    }
  },
  components : {
    ThemeSwitcher,
    HeroLogo
  }
};
</script>

<style scoped>

  #hero-svg {
    width: 100%;
  }

  body[data-theme="dark"] #header {
    background: linear-gradient(90deg,black 60%, #742a2a 250%);
  }

  body[data-theme="light"] #header {
    background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  }



</style>