<template>
  <Layout :hideHeader="true" :disableScroll="true">

    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24 pb-12">

      <!-- Header -->
      <div class="px-4 pt-8">
        <section class="border-b">
          <div class="flex flex-col md:flex-row justify-between items-center md:items-start">
            <h1 class="font-medium leading-none mt-0 mb-4 md:mb-8 flex flex-col md:flex-row items-baseline w-full">
            <span class="text-sm mb-4 md:mb-0">
              <g-link class="nav-link uppercase" :to="'/services'">
                services
              </g-link>
              <LevelUpIcon class="inline-block icon-back mx-2"/>
              <g-link class="nav-link uppercase" :to="'/services#techs'">
                techs
              </g-link>
              <LevelUpIcon class="inline-block icon-back mx-2"/>
            </span>
              <span>
              {{ $page.tech.title }}
            </span>
            </h1>
            <g-image class="tech-logo "  :src="$page.tech.logo" :alt="$page.tech.title" :title="$page.tech.title" immediate="true"/>
          </div>

          <div class="text-2xl pt-4 pb-6 text-gray-700" v-html="$page.tech.shortDescription"></div>

          <a v-if="$page.tech.url" :href="$page.tech.url" class="font-bold hover:text-red-400  inline-block mb-10 ">Visit Official website</a>

        </section>
      </div>

      <!-- Content -->
      <div class="lg:mx-16 md:mx-8 sm:mx-4 mx-2 lg:my-16 my-8 px-4">
        <section class="container mx-auto text-gray-700">
          <div class="content-detail text-xl" v-html="$page.tech.content"></div>
        </section>
      </div>

      <!-- Footer -->
      <div class="px-4 sm:px-0 mt-10">
          <blockquote  v-if="$page.tech.relatedJobs.edges.length">
            <h6>Related jobs</h6>
            <ul>
              <li v-for="job in $page.tech.relatedJobs.edges" :key="job.node.id">
                <g-link :to="job.node.path" class="hover:text-red-400">{{ job.node.title}}</g-link>
              </li>
            </ul>
          </blockquote>

          <blockquote v-if="$page.tech.relatedProjects.edges.length">
            <h6>Related projects</h6>
            <ul>
              <li v-for="project in $page.tech.relatedProjects.edges" :key="project.node.id">
                <g-link :to="project.node.path" class="hover:text-red-400">{{ project.node.title}}</g-link>
              </li>
            </ul>
          </blockquote>
      </div>

      <div class="mb-12 relative text-xl h-12">
        <div class="absolute left-0">
          <g-link :to="'/services#techs'" class="cursor-pointer nav-link">
            <LevelUpIcon class="inline-block mr-2 icon-back"/><span>Techs</span>
          </g-link>
        </div>
      </div>

    </div>

  </Layout>
</template>

<page-query>
query ($id: ID!) {
  tech (id: $id){
    id
    title
    shortDescription
    content
    url
    path
    logo(width:64, height:64, fit:contain, background:"rgba(0,0,0,0)")
    relatedJobs: belongsTo(filter:{ typeName: {eq: Job}}){
      totalCount
      edges {
        node {
          ... on Job {
            id
            path
            title
          }
        }
      }
    },
     relatedProjects: belongsTo(filter:{ typeName: {eq: Project}}){
      totalCount
      edges {
        node {
          ... on Project {
            id
            path
            title
          }
        }
      }
    },
  }
}
</page-query>

<script>

import ChevronRightIcon from '~/assets/icons/chevron-right.svg?inline'
import LevelUpIcon from '~/assets/icons/level-up.svg?inline';

export default {
  components: {
    ChevronRightIcon,
    LevelUpIcon,
  },
  computed: {
    projectLabel: function() {
      const pluralize = require("pluralize");
      return pluralize("project", this.$page.tech.relatedProjects.totalCount);
    },
    jobLabel: function() {
      const pluralize = require("pluralize");
      return pluralize("job", this.$page.tech.relatedJobs.totalCount);
    }
  },
  metaInfo() {
    return {
      title: this.$context.title
    };
  }
};
</script>

<style scoped>
  .tech-logo{
    width: 75px;
  }
  svg{
    width: 2em;
    height: 2em;
    color: #f56565;
  }
  svg.icon-back {
    width: 1.2em;
    height: 1.2em;
  }
</style>
