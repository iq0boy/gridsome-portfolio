<template>
  <Layout :hideHeader="true">
    <div
      class="pt-24 pb-16 px-2 relative container mx-auto overflow-x-hidden relative"
    >
      <PageTitle :title="'Services'">
        <ServiceLogo class="transition duration-1000 ease-in-out"></ServiceLogo>
      </PageTitle>

      <serviceCard
        v-for="(skill, index) in sortedSkills"
        :key="index"
        :title="skill.node.title"
        :previousTitle="getPreviousTitle(index)"
        :nextTitle="getNextTitle(index)"
        :shortDescription="skill.node.shortDescription"
        :path="skill.node.path"
        :ltr="index % 2 === 0"
      >
        <slot>
          <li v-for="tech in skill.node.techs" :key="tech.id">
            <TechBadge
              :title="tech.title"
              :logo="tech.logo"
              :path="tech.path"
              :scale="0.5"
              :grayScale="true"
            />
          </li>
        </slot>
      </serviceCard>
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
        logo(background:"rgba(0,0,0,0)", quality:100)
      }
    }
  }
  allSkill {
    edges {
      node {
        id
        path
        shortName
        title
        shortDescription
        techs {
          id
          title
          path
          logo(width:24, height:24, fit:contain, background:"rgba(0,0,0,0)", quality:10)
        }
      }
    }
  }
}
</page-query>

<script>
import PageTitle from '~/layouts/partials/PageTitle'
import ServiceLogo from '~/assets/svg/undraw_heavy_box_agqi.svg?inline'
import ServiceCard from '../components/ServiceCard'
import TechBadge from '~/components/TechBadge'

export default {
  metaInfo: {
    title: 'Services',
  },
  components: {
    PageTitle,
    ServiceLogo,
    TechBadge,
    ServiceCard,
  },
  computed: {
    sortedSkills: function () {
      let pageQueryCopy = JSON.parse(JSON.stringify(this.$page.allSkill.edges))
      return pageQueryCopy.sort(function (e1, e2) {
        const skillA = e1.node
        const skillB = e2.node
        let decision = 0
        if (skillA.techs.length < skillB.techs.length) {
          decision = 1
        } else if (skillA.techs.length > skillB.techs.length) {
          decision = -1
        }
        return decision
      })
    },
  },
  methods: {
    getPreviousTitle(index) {
      return this.sortedSkills[index - 1]?.node?.title
    },
    getNextTitle(index) {
      return this.sortedSkills[index + 1]?.node?.title
    },
  },
}
</script>
