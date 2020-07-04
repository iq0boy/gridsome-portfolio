<template>
  <Layout :hideHeader="true" :disableScroll="true">

    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24 pb-24">

      <!-- Header -->
      <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 pt-8 px-0 mb-4 border-b pb-10">

        <div >
          <h1 class="pb-0 my-0 text-5xl font-medium">{{ $page.skill.title }}</h1>
        </div>

        <div class="text-2xl pt-4 text-gray-700" v-html="$page.skill.shortDescription"></div>

      </div>

      <!-- Content -->
      <div class="lg:mx-32 md:mx-16 px-4 sm:px-0 mt-6">
        <section class="container mx-auto relative text-gray-700">
          <div class="content-detail text-xl" v-html="$page.skill.content"></div>
        </section>
      </div>

      <!-- Techs -->
      <div v-if="$page.skill.techs.length" class="lg:mx-32 md:mx-16 px-4 sm:px-0 my-8 lg:my-10">
        <section class="flex flex-wrap container mx-auto relative">
          <ul class="list-none m-0 p-0 flex flex-wrap container mx-auto relative">
            <li v-for="tech in $page.skill.techs" :key="tech.id">
              <TechBadge
                  :title="tech.title"
                  :logo="tech.logo"
                  :path="tech.path"
                  :scale=0.6
              />
            </li>
          </ul>
        </section>
      </div>

      <!-- Footer -->
      <div class="lg:mx-32 md:mx-16 px-4 sm:px-0">

        <blockquote  v-if="$page.skill.relatedJobs.edges.length">
          <h6>Related jobs</h6>
          <ul>
            <li v-for="job in $page.skill.relatedJobs.edges" :key="job.node.id">
              <g-link :to="job.node.path" class="hover:text-red-400">{{ job.node.title}}</g-link>
            </li>
          </ul>
        </blockquote>

        <blockquote v-if="$page.skill.relatedProjects.edges.length">
          <h6>Related projects</h6>
          <ul>
            <li v-for="project in $page.skill.relatedProjects.edges" :key="project.node.id">
              <g-link :to="project.node.path" class="hover:text-red-400">{{ project.node.title}}</g-link>
            </li>
          </ul>
        </blockquote>
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

import TechBadge from "~/components/TechBadge";

  export default {
    components: {
      TechBadge
    },
  computed: {
    projectLabel: function() {
      const pluralize = require("pluralize");
      return pluralize("project", this.$page.skill.relatedProjects.totalCount);
    },
    jobLabel: function() {
      const pluralize = require("pluralize");
      return pluralize("job", this.$page.skill.relatedJobs.totalCount);
    }
  },
  metaInfo() {
    return {
      title: this.$context.title
    };
  }
};
</script>