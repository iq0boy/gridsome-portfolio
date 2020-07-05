<template>
    <Layout :hideHeader="true">
        <div id="cursus-content" class="pt-24 pb-16 px-2 container mx-auto relative overflow-x-hidden">

            <PageTitle :title="'Cursus'">
                <CursusLogo></CursusLogo>
            </PageTitle>

            <!--Jobs-->
            <CursusSection
                :title="'Jobs'"
                :section-id="'jobs'"
                :next-section-id="'#education'"
                :ltr="true"
            >
                <template v-slot:logo>
                </template>
                <template v-slot:cards>
                    <li class="flex items-center justify-start" v-for="job in $page.allJob.edges" :key="job.node.id" >
                        <CursusCard
                            :title=job.node.title
                            :content=job.node.shortDescription
                            :from=job.node.startedAt
                            :to=job.node.endedAt
                            :path=job.node.path
                            :bigImgSrc=job.node.bigEmployerLogo
                            :smallImgSrc=job.node.shortEmployerLogo
                            :ltr="true"
                        ></CursusCard>
                    </li>
                </template>
            </CursusSection>

            <!--Education-->
            <CursusSection
                    :title="'Education'"
                    :section-id="'education'"
                    :previous-section-id="'#jobs'"
                    :next-section-id="'#certification'"
                    :ltr="false"
            >
                <template v-slot:logo>
                </template>
                <template v-slot:cards>
                    <li class="flex items-center justify-end"  v-for="diploma in $page.allDiploma.edges" :key="diploma.node.id">
                        <CursusCard
                                :title=diploma.node.title
                                :content=diploma.node.shortDescription
                                :from=diploma.node.acquiredAt
                                :bigImgSrc=diploma.node.bigProviderLogo
                                :smallImgSrc=diploma.node.shortProviderLogo
                                :ltr=false
                        ></CursusCard>
                    </li>
                </template>
            </CursusSection>

            <!--Certifications-->
            <CursusSection
                    :title="'Certifications'"
                    :section-id="'certification'"
                    :previous-section-id="'#education'"
                    :ltr="true"
            >
                <template v-slot:logo>
                </template>
                <template v-slot:cards>
                    <li class="flex items-center justify-start"  v-for="certification in $page.allCertification.edges" :key="certification.node.id">
                        <CursusCard
                                :title=certification.node.title
                                :content=certification.node.shortDescription
                                :from=certification.node.acquiredAt
                                :bigImgSrc=certification.node.bigProviderLogo
                                :smallImgSrc=certification.node.shortProviderLogo
                                :ltr=true
                        ></CursusCard>
                    </li>
                </template>
            </CursusSection>



        </div>
    </Layout>
</template>

<page-query>
query {
  allJob(sortBy:"endedAt", order: DESC) {
    edges {
      node {
        id
        title
        shortDescription
        employer
        startedAt(format:"MMM YY")
        endedAt(format:"MMM YY")
        bigEmployerLogo : employerLogo(width: 250, fit:inside, background:"rgba(0,0,0,0)")
        shortEmployerLogo: employerLogo(width: 100, fit:inside, background:"rgba(0,0,0,0)")
        path
      }
    }
  }
  allDiploma(sortBy:"acquiredAt", order:DESC) {
    edges {
      node {
        title
        provider
        shortDescription
        bigProviderLogo : providerLogo(width: 250, fit:inside, background:"rgba(0,0,0,0)")
        shortProviderLogo: providerLogo(width: 100, fit:inside, background:"rgba(0,0,0,0)")
        acquiredAt(format:"MMM YY")
      }
    }
  },
  allCertification(sortBy:"acquiredAt", order:DESC) {
    edges {
      node {
        title
        provider
        shortDescription
        bigProviderLogo : providerLogo(width: 250, fit:inside, background:"rgba(0,0,0,0)")
        shortProviderLogo: providerLogo(width: 100, fit:inside, background:"rgba(0,0,0,0)")
        acquiredAt(format:"MMM YY")
      }
    }
  }
}
</page-query>

<script>

import PageTitle from "~/layouts/partials/PageTitle";
import CursusLogo from '~/assets/svg/undraw_certificate_343v.svg?inline'
import CursusSection from "~/components/Sections/CursusSection";
import CursusCard from "~/components/CursusCard";


export default {
    components: {
        CursusCard,
        PageTitle,
        CursusLogo,
        CursusSection
    },
    metaInfo: {
    title: "Cursus"
  }
};
</script>

<style lang="scss" scoped>

</style>
