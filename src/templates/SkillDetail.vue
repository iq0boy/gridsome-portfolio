<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24 pb-12">
      <!-- Header -->
      <div class="px-4 pt-8">
        <section class="border-b">
          <h1
            class="font-medium leading-none mt-0 mb-4 md:mb-8 flex flex-col md:flex-row items-baseline w-full"
          >
            <span class="text-sm mb-4 md:mb-0">
              <g-link class="nav-link capitalize" :to="'/services'">
                services
              </g-link>
              <LevelUpIcon class="inline-block icon-back mx-2" />
            </span>
            <span>
              {{ $page.skill.title }}
            </span>
          </h1>

          <div
            class="text-2xl pt-4 text-gray-700 mb-10"
            v-html="$page.skill.shortDescription"
          ></div>
        </section>
      </div>

      <!-- Content -->
      <div class="lg:mx-16 md:mx-8 sm:mx-4 mx-2 lg:my-16 my-8 px-4">
        <section class="container mx-auto text-gray-700">
          <div
            class="content-detail text-xl"
            v-html="$page.skill.content"
          ></div>
        </section>
      </div>

      <!-- Techs -->
      <div v-if="$page.skill.techs.length" class="px-4 sm:px-0 my-8 lg:my-10">
        <section class="flex flex-wrap container mx-auto relative">
          <ul
            class="list-none m-0 p-0 flex flex-wrap container mx-auto relative"
          >
            <li v-for="tech in $page.skill.techs" :key="tech.id">
              <TechBadge
                :title="tech.title"
                :logo="tech.logo"
                :path="tech.path"
                :scale="0.6"
              />
            </li>
          </ul>
        </section>
      </div>

      <!-- Footer -->
      <div class="px-4 sm:px-0">
        <blockquote v-if="$page.skill.relatedJobs.edges.length">
          <h6>Related jobs</h6>
          <ul>
            <li v-for="job in $page.skill.relatedJobs.edges" :key="job.node.id">
              <g-link :to="job.node.path" class="hover:text-red-400">{{
                job.node.title
              }}</g-link>
            </li>
          </ul>
        </blockquote>

        <blockquote v-if="$page.skill.relatedProjects.edges.length">
          <h6>Related projects</h6>
          <ul>
            <li
              v-for="project in $page.skill.relatedProjects.edges"
              :key="project.node.id"
            >
              <g-link :to="project.node.path" class="hover:text-red-400">{{
                project.node.title
              }}</g-link>
            </li>
          </ul>
        </blockquote>
      </div>

      <div class="mb-12 relative text-xl h-12">
        <div class="ml-4 sm:ml-0 absolute left-0">
          <g-link :to="'/services'" class="cursor-pointer nav-link">
            <LevelUpIcon class="inline-block mr-2 icon-back" /><span
              >Services</span
            >
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  skill (id: $id){
    id
    title
    shortDescription
    content
    path
    techs {
      title
      path
      logo(width:42, height:42, fit:contain, background:"rgba(0,0,0,0)")
    }
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
import TechBadge from '~/components/TechBadge'
import LevelUpIcon from '~/assets/icons/level-up.svg?inline'

export default {
  components: {
    LevelUpIcon,
    TechBadge,
  },
  computed: {
    projectLabel: function () {
      const pluralize = require('pluralize')
      return pluralize('project', this.$page.skill.relatedProjects.totalCount)
    },
    jobLabel: function () {
      const pluralize = require('pluralize')
      return pluralize('job', this.$page.skill.relatedJobs.totalCount)
    },
  },
  metaInfo() {
    return {
      title: this.$context.title,
    }
  },
}
</script>

<style lang="scss" scoped>
svg {
  width: 2em;
  height: 2em;
  color: #f56565;
}
svg.icon-back {
  width: 1.2em;
  height: 1.2em;
}
</style>
