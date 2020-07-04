<template>
    <Layout :hideHeader="true">
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
                    <li class="inline-flex justify-center" v-for="tech in $page.allTech.edges" :key="tech.node.id">
                        <TechBadge
                            :title="tech.node.title"
                            :label="tech.node.title"
                            :logo="tech.node.logo"
                            :path="tech.node.path"
                        />
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
                    <li class="inline-flex justify-center" v-for="skill in $page.allSkill.edges" :key="skill.node.id">
                        <SkillBadge
                            :path="skill.node.path"
                            :title="skill.node.shortName"
                        />
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
import ServiceLogo from '~/assets/svg/undraw_heavy_box_agqi.svg?inline';
import ServiceSection from "~/components/Sections/ServiceSection";
import TechBadge from "~/components/TechBadge";
import SkillBadge from "~/components/SkillBadge";

export default {
    components: {
        PageTitle,
        ServiceLogo,
        ServiceSection,
        TechBadge,
        SkillBadge
    },
    metaInfo: {
    title: "Services"
  }
};
</script>