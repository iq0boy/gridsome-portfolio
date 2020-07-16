<template>
  <Layout :hideHeader="true">
    <div
      class="pt-24 pb-16 px-2 relative container mx-auto overflow-x-hidden relative"
    >
      <PageTitle :title="'Projects'">
        <ProjectsLogo
          class="transition duration-1000 ease-in-out"
        ></ProjectsLogo>
      </PageTitle>

      <div
        id="projects-container"
        class="pt-24 sm:pt-32 md:pt-40 lg:pt-32 sm:px-0 flex flex-col"
      >
        <ProjectCard
          v-for="project in $page.allProject.edges"
          :key="project.node.id"
          :project="project.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>

query{
  allProject(sortBy: "createdAt", order: DESC){
    edges {
      node {
       id
        title
        shortDescription
        path
      }
    }
  }
}

</page-query>

<script>
import ProjectsLogo from '~/assets/svg/undraw_forming_ideas_0pav.svg?inline'
import ProjectCard from '~/components/ProjectCard'
import PageTitle from '~/layouts/partials/PageTitle'

export default {
  metaInfo: {
    title: 'Projects',
  },
  components: {
    ProjectCard,
    ProjectsLogo,
    PageTitle,
  },
}
</script>

<style lang="scss" scoped>
#projects-container {
  @media (min-width: 1024px) {
    .project-card:nth-child(odd) {
      align-self: flex-start;
    }
    .project-card:nth-child(even) {
      align-self: flex-end;
    }
  }
}
</style>
