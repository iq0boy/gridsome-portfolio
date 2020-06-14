<template>
    <Layout :hideHeader="true" :disableScroll="true">
        <div class="container mx-auto pt-24 pb-16 px-4 sm:px-0">
            <div class="lg:mx-32 md:mx-16 sm:mx-8">

                <header class="mb-10">
                    <h1 class="pb-8 text-6xl font-medium">Cursus</h1>
                </header>


                <Accordion title="Jobs">
                    <ul class="list-none m-0 p-0 mt-10">
                        <li class="mb-4 flex-post p-2 cursor-pointer" v-for="job in $page.allJob.edges" :key="job.node.id">
                            <g-link :to="job.node.path">
                                <div class="flex items-center">
                                    <div class="flex-1 ml-4 font-medium">
                                        <span class="text-gray-600">{{job.node.startedAt }} to {{ job.node.endedAt}}</span>
                                        - {{ job.node.employer}}
                                    </div>
                                </div>
                                <div class="ml-12">
                                    <blockquote>
                                        <h6 class="mb-0">{{ job.node.title}}</h6>
                                        <p class="text-gray-600">More info</p>
                                    </blockquote>
                                </div>
                            </g-link>
                        </li>
                    </ul>
                </Accordion>

                <Accordion title="Scholarship">
                    <ul class="list-none m-0 p-0 mt-10">
                        <li class="mb-4 flex-post p-2" v-for="diploma in $page.allDiploma.edges" :key="diploma.node.id">
                            <div class="flex items-center">
                                <div class="flex-1 ml-4 font-medium">
                                    <span class="text-gray-600">{{diploma.node.acquiredAt }} </span>
                                    - {{ diploma.node.provider}}
                                </div>
                            </div>
                            <div class="ml-12">
                                <blockquote>
                                    <h6 class="mb-0">{{ diploma.node.title}}</h6>
                           <!--         <figure class="flex justify-left mb-10 align">
                                        <g-image :src="diploma.node.providerLogo" :alt="diploma.node.provider" :title="diploma.node.provider" />
                                    </figure>-->
                                </blockquote>
                            </div>
                        </li>
                    </ul>
                </Accordion>

                <Accordion title="Certifications">
                    <ul class="list-none m-0 p-0 mt-10">
                        <li class="mb-4 flex-post p-2" v-for="certification in $page.allCertification.edges" :key="certification.node.id">
                            <div class="flex items-center">
                                <div class="flex-1 ml-4 font-medium">
                                    <span class="text-gray-600">{{certification.node.acquiredAt }} </span>
                                    - {{ certification.node.provider}}
                                </div>
                            </div>
                            <div class="ml-12">
                                <blockquote>
                                    <h6 class="mb-0">{{ certification.node.title}}</h6>
                                </blockquote>
                            </div>
                        </li>
                    </ul>
                </Accordion>



            </div>
        </div>
    </Layout>
</template>

<page-query>
query {
  allJob(sortBy:"endedAt", order: DESC) {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        content
        startedAt(format:"MMM YYYY")
        endedAt(format:"MMM YYYY")
        employer
        path
        techs {
          title
          path
          color
          logo (width: 100, height: 50, fit:contain)
        }
        skills {
          title
          description
          shortName
          path
        }
      }
    }
  }
  allDiploma(sortBy:"acquiredAt", order:DESC)
  {
    edges {
      node {
        title
        provider
        providerLogo(width: 100, height: 50, background:"rgba(0,0,0,0)", quality: 100, fit: inside)
        acquiredAt(format:"MMM YYYY")
      }
    }
  },
  allCertification(sortBy:"acquiredAt", order:DESC)
  {
    totalCount
    edges {
      node {
        title
        provider
        acquiredAt(format:"MMM YYYY")
      }
    }
  }
}
</page-query>

<script>

import Accordion from "../components/Accordion";

export default {
    components: {Accordion},
    metaInfo: {
    title: "Cursus"
  }
};
</script>
