<template>
  <header class="bg-black relative z-1000 bg-radial-t-gray-to-black" id="header">

    <nav class="container h-20 sm:h-16  mx-auto px-4 sm:px-0 py-4">
      <div class="flex flex-col sm:flex-row flex-grow space-between items-center w-auto height-30px">

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
        
        <div class=" w-full sm:w-auto text-gray-400">
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

    <div class="logo pt-0 pb-8 sm:pb-16 md:pb-32 md:pt-16 container mx-auto text-center text-white">
      <h2 class="m-0">

        <span class="text-5xl text-white">
          <span>Hi i am {{ $static.metadata.siteAuthor }}</span>
        </span>

      </h2>
      <div class="text-gray-400 font-thin text-xl">{{ $static.metadata.siteDescription }} in<!-- who does--></div>
      <div>
        <VueSlickCarousel v-bind="skillCarouselSettings">
          <div v-for="(skill, index) in $static.allSkill.edges" :key="skill.node.id" :index="index" >
            <div class="flex justify-center align">
              {{skill.node.title}}
            </div>
          </div>
        </VueSlickCarousel>
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
  allSkill {
    totalCount
    edges {
      node {
        id
        title
        description
        shortName
      }
    }
  }
}
</static-query>

<script>

import ThemeSwitcher from '~/components/ThemeSwitcher'
import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  props: {
    theme: {
      type: String,
    },
  },
  data() {
    return {
      skillCarouselSettings: {
        "arrows": false,
        "dots": false,
        "autoplay": true,
        "autoplaySpeed": 2000,
        "fade": true,
        "infinite": true,
        "speed": 1000,
        "slidesToShow": 1,
        "slidesToScroll": 1,
      }

    }
  },
  components : {
    ThemeSwitcher,
    VueSlickCarousel
  }
};
</script>