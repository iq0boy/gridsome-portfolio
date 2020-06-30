<template>
    <Layout :hideHeader="true" :disableScroll="true">
        <div class="pt-24 pb-16 relative container mx-auto overflow-x-hidden relative">

            <PageTitle :title="'Services'">
                <ServiceLogo></ServiceLogo>
            </PageTitle>


            <!--Techs-->
            <ServiceSection
                    :title="'Techs'"
                    :section-id="'techs'"
                    :next-section-id="'#skills'"
                    :ltr="true"
            >
                <template v-slot:logo>
                </template>
                <template v-slot:cards>
                    <li class="mb-4 p-2 cursor-pointer inline-flex flex-row justify-center " v-for="tech in $page.allTech.edges" :key="tech.node.id">
                        <g-link
                                :to="tech.node.path"
                        >
                            <div class="badge flex items-center justify-center mr-2 mt-2 border hover:border-red-400 border-gray-600 rounded-full hover:bg-black bg-white shadow-lg">
                                <g-image :src="tech.node.logo" :alt="tech.node.title" :title="tech.node.title"/>
                            </div>
                            <p class="text-center ">
                                {{tech.node.title}}
                            </p>
                        </g-link>
                    </li>
                </template>
            </ServiceSection>




            <!--Skills-->
            <ServiceSection
                    :title="'Skills'"
                    :section-id="'skills'"
                    :previous-section-id="'#techs'"
                    :ltr="false"
            >
                <template v-slot:logo>
                </template>
                <template v-slot:cards>
                    <li class="mb-4 p-2 cursor-pointer inline-flex flex-row justify-center " v-for="skill in $page.allSkill.edges" :key="skill.node.id">
                        <g-link
                                :to="skill.node.path"
                        >
                            <div class="badge flex items-center  justify-center border hover:border-red-300 border-gray-400 rounded-full hover:text-white hover:bg-black bg-white shadow-lg font-bold">
                                {{ skill.node.shortName}}
                            </div>

                        </g-link>
                    </li>
                </template>
            </ServiceSection>



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
  allSkill {
    totalCount
    edges {
      node {
        id
        title
        path
        shortName
      }
    }
  }
}
</page-query>


<script>

import PageTitle from "~/layouts/partials/PageTitle";
import ServiceLogo from '~/assets/svg/undraw_heavy_box_agqi.svg?inline'
import ServiceSection from "~/components/ServiceSection";


export default {
    components: {
        PageTitle,
        ServiceLogo,
        ServiceSection
    },
    metaInfo: {
    title: "Services"
  }
};
</script>