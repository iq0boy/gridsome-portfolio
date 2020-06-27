<template>
    <Layout :hideHeader="true" :disableScroll="true">

        <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24 pb-12">

            <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 px-4 pt-8">
                <section class="post-header container mx-auto px-0 mb-4 border-b">
                    <h1 class="text-5xl font-medium leading-none mt-0">{{ $page.job.title}}</h1>
                    <ul class="flex flex-wrap mb-5">
                        <li  class=" uppercase font-medium text-xs text-red-500 mt-3" v-for="(skill, index) in $page.job.skills">
                            <g-link :to="skill.path">
                                <span class="">{{ skill.title }}</span><span class="ml-2 mr-2" v-if="index+1 < $page.job.skills.length">-</span>
                            </g-link>
                        </li>
                    </ul>
                    <div class="text-2xl pt-4 pb-10 text-gray-700 font-serif" v-html="$page.job.shortDescription"></div>
                </section>
            </div>

            <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 px-4">
                <section class="container mx-auto relative font-serif text-gray-700">
                    <div class="content-detail text-xl" v-html="$page.job.content"></div>
                </section>
            </div>

            <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 px-4 mt-10">
                <blockquote>
                    <p>Started : {{ $page.job.startedAt}}</p>
                    <p>Ended : {{ $page.job.endedAt}}</p>
                </blockquote>
            </div>

            <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 px-4">
                <section class="flex flex-wrap container mx-auto relative py-10">
                    <g-link
                            v-for="tech in $page.job.techs"
                            :key="tech.id"
                            :to="tech.path"
                            class="flex items-center py-4 px-4 mr-2 mt-2 border hover:border-red-400 border-gray-600 rounded-full hover:bg-black bg-white"
                    >
                        <div >
                            <g-image class="tech-tile" :src="tech.logo" :alt="tech.title" :title="tech.title"/>
                        </div>

                    </g-link>
                </section>
            </div>

        </div>

    </Layout>
</template>

<page-query>
 query($id: ID!, $previousElement: ID!, $nextElement: ID!) {
    job(id: $id) {
      title
      content
      shortDescription
      startedAt(format:"MMM YYYY")
      endedAt(format:"MMM YYYY")
      employer
      path
      techs {
        title
        path
        logo(width:64, height:64, fit:contain, background:"rgba(0,0,0,0)", quality:10)

    }
      skills {
        title
        shortName
        path
      }
    }

    previous: job(id: $previousElement) {
      title
      employer
      path
    }

    next: job(id: $nextElement) {
    title
    employer
    path
    }

  }
</page-query>

<script>

export default {
  metaInfo() {
    return {
      title: this.$context.title
    };
  }

};
</script>

<style>
    .tech-tile {
        width: 64px!important;
        height: 64px!important;
    }
</style>