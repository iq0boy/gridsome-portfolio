<template>
  <Layout :disableScroll="true">
<!--    <div class="container sm:px-0 mx-auto overflow-x-hidden">-->
    <div class="container sm:px-0 mx-auto overflow-x-hidden">

      <div class=" pt-4 sm:pt-16 pb-4 sm:pb-16 mx-4 sm:-mx-4">

<!--        <div class="sm:mx-16 sm:mb-8">-->
          <h3 class="flex justify-center md:mt-12">
            <span>I like to play with :</span>
          </h3>
<!--        </div>-->
      </div>

        <div class="mb-10">
          <VueSlickCarousel v-bind="techCarouselSettings">
            <div  v-for="(tech, index) in $page.allTech.edges" :key="tech.node.id" :index="index">
              <figure class="flex justify-center mb-10 align">
                <g-image :src="tech.node.logo" :alt="tech.node.title" :title="tech.node.title" immediate="true"/>
              </figure>
            </div>
          </VueSlickCarousel>
        </div>

        <div class="hidden sm:block sm:mx-16 sm:mt-16 sm:pb-4 sm:mb-8">
          <h6 class="text-center">
            Feel free to take a look at my humble work or to leave me a message :)
          </h6>
        </div>

      </div>
  </Layout>
</template>

<page-query>
  query {
    allTech {
      totalCount
      edges {
        node {
          id
          title
          path
          logo(width:64, height:64, fit:contain, background:"rgba(0,0,0,0)", quality:10)
        }
      }
    }

  }
</page-query>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  metaInfo: {
    title: "Home"
  },
  data() {
    return {
      techCarouselSettings: {
        "arrows": false,
        "dots": true,
        "infinite": true,
        "slidesToShow": 5,
        "autoplay": true,
        "speed": 2000,
        "autoplaySpeed": 1000,
        "swipeToSlide": true,
        "responsive": [
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 5,
            }
          },
          {
            "breakpoint": 640,
            "settings": {
              "slidesToShow": 3,
              "dots": false,
            }
          }
        ]
      },
    }
  },
  components: {
    VueSlickCarousel
  }
};
</script>