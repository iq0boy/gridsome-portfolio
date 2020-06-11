<template>
    <Layout :hideHeader="true" :disableScroll="true">

        <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24 pb-12">

            <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 pt-8">

                <section class="post-header container mx-auto px-0 mb-4 border-b">
                    <!--          <span class="text-blue-500 font-medium uppercase tracking-wide text-sm">-->
                    <!--            <g-link-->
                    <!--              :to="$page.blog.category.path"-->
                    <!--              class="hover:underline"-->
                    <!--            >{{ $page.blog.category.title }}</g-link>-->
                    <!--          </span>-->
                    <h1 class="text-5xl font-medium leading-none mt-0">{{ $page.job.title}}</h1>
                    <ul class="flex flex-wrap mb-5">
                        <li  class=" uppercase font-medium text-xs text-blue-700 mt-3" v-for="(skill, index) in $page.job.skills">
                            <g-link :to="skill.path">
                                <span class="">{{ skill.title }}</span><span class="ml-2 mr-2" v-if="index+1 < $page.job.skills.length">-</span>
                            </g-link>
                        </li>
                    </ul>
                    <div class="text-2xl pt-4 pb-10 text-gray-700 font-serif" v-html="$page.job.shortDescription"></div>
                </section>

                <!--        <section class="post-author-list mb-10 mx-0">-->
                <!--          <div class="flex items-center">-->
                <!--            <div class="flex justify-between items-center">-->
                <!--              <ul class="list-none flex author-list">-->
                <!--                <li v-for="author in $page.blog.author" :key="author.id" class="author-list-item">-->
                <!--                  <g-link :to="author.path" v-tooltip="author.name">-->
                <!--                    <g-image-->
                <!--                      :src="author.image"-->
                <!--                      :alt="author.name"-->
                <!--                      class="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-200 border-2 border-white"-->
                <!--                    />-->
                <!--                  </g-link>-->
                <!--                </li>-->
                <!--              </ul>-->
                <!--            </div>-->
                <!--            <div class="pl-3 flex flex-col text-xs leading-none uppercase">-->
                <!--              <p>-->
                <!--                <span v-for="(author, index) in $page.blog.author" :key="author.id">-->
                <!--                  <g-link-->
                <!--                    :to="author.path"-->
                <!--                    v-tooltip="author.name"-->
                <!--                    class="hover:underline"-->
                <!--                  >{{ author.name }}</g-link>-->
                <!--                  <span v-if="index < $page.blog.author.length-1">,</span>-->
                <!--                </span>-->
                <!--              </p>-->
                <!--              <p class="text-gray-700">-->
                <!--                <time :datetime="$page.blog.datetime">{{ $page.blog.humanTime }}</time>-->
                <!--                &nbsp;&middot;&nbsp; {{ $page.blog.timeToRead }} min read-->
                <!--              </p>-->
                <!--            </div>-->
                <!--          </div>-->
                <!--        </section>-->

            </div>

            <!--      <section class="post-image mx-auto w-full">-->
            <!--        <g-image :src="$page.blog.image"></g-image>-->
            <!--      </section>-->

            <div class="lg:mx-32 md:mx-16 px-4 sm:px-0">
                <section class="post-content container mx-auto relative font-serif text-gray-700">
                    <div class="post-content-text text-xl" v-html="$page.job.description"></div>
                </section>
            </div>

            <div class="lg:mx-32 md:mx-16 px-4 sm:px-0 mt-10">
                <blockquote>
<!--                    <p class="font-bold">Status : {{$page.project.status.charAt(0).toUpperCase() + $page.project.status.slice(1)}}</p>-->
                    <p>Started : {{ $page.job.startedAt}}</p>
                    <p>Ended : {{ $page.job.endedAt}}</p>
                </blockquote>
            </div>

            <div class="lg:mx-32 md:mx-16 px-4 sm:px-0">
                <section class="flex flex-wrap container mx-auto relative py-10">
                    <g-link
                            v-for="tech in $page.job.techs"
                            :key="tech.id"
                            :to="tech.path"
                            class="flex items-center py-4 px-4 mr-2 mt-2 border hover:border-blue-500 border-gray-600 rounded-full hover:bg-black bg-white"
                    >
                        <div >
                            <g-image class="tech-tile" :src="tech.logo" :alt="tech.title" :title="tech.title"/>
                        </div>

                    </g-link>
                </section>
            </div>

        </div>

       <!-- <section class="post-related bg-black text-gray-200 pt-10 border-b border-b-gray-900">
            <div class="container mx-auto">
                <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4">
                    <ProjectListItem v-if="$page.previous" :record="$page.previous" :border=false></ProjectListItem>
                    <ProjectListItem v-if="$page.next" :record="$page.next" :border=false></ProjectListItem>
                </div>
            </div>
        </section>-->

    </Layout>
</template>

<page-query>
 query($id: ID!, $previousElement: ID!, $nextElement: ID!) {
    job(id: $id) {
      title
      description
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
      description
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

    next: job(id: $nextElement) {
      title
      description
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

  }
</page-query>

<script>
import ProjectListItem from "../components/ProjectListItem";

export default {
  components: {
    ProjectListItem
  },
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