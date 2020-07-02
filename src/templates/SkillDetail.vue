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
      <div v-if="$page.skill.techs.length" class="lg:mx-32 md:mx-16 px-4 sm:px-0 mt-4">
        <section class="flex flex-wrap container mx-auto relative py-10">
          <g-link
                  v-for="tech in $page.skill.techs"
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

      <!-- Footer -->
      <div class="lg:mx-32 md:mx-16 px-4 sm:px-0 mt-10">

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
      logo(width:64, height:64, fit:contain, background:"rgba(0,0,0,0)", quality:10)
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

export default {
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