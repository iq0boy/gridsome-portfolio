// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allProject {
        edges {
          previous {
            id
          }
          next {
            id
          }
          node {
            title
            id
            path
          }

        }
      }
    }`);

    data.allProject.edges.forEach(function (element) {
      createPage({
        path: element.node.path,
        component: './src/templates/ProjectDetail.vue',
        context: {
          previousElement: (element.previous) ? element.previous.id : '##empty##',
          nextElement: (element.next) ? element.next.id : '##empty##',
          id: element.node.id,
          title: element.node.title
        }
      })
    })
  });



  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allJob(sortBy:"endedAt", order: DESC) {
        edges {
          previous {
            id
          }
          next {
            id
          }
          node {
            title
            id
            path
          }
        }
      }
    }`);

    data.allJob.edges.forEach(function (element) {
      createPage({
        path: element.node.path,
        component: './src/templates/JobDetail.vue',
        context: {
          previousElement: (element.previous) ? element.previous.id : '##empty##',
          nextElement: (element.next) ? element.next.id : '##empty##',
          id: element.node.id,
          title: element.node.title
        }
      })
    })
  });



  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allTech{
        edges {
          node {
            id
            title
            path
            description
            logo
            url
            color
          }
        }
      }
    }`);

    data.allTech.edges.forEach(function (element) {
      createPage({
        path: element.node.path,
        component: './src/templates/TechDetail.vue',
        context: {
          previousElement: (element.previous) ? element.previous.id : '##empty##',
          nextElement: (element.next) ? element.next.id : '##empty##',
          id: element.node.id,
          title: element.node.title
        }
      })
    });
  });



  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
       allSkill{
        edges {
          node {
            id
            title
            path
            description
          }
        }
      }
    }`);

    data.allSkill.edges.forEach(function (element) {
      createPage({
        path: element.node.path,
        component: './src/templates/SkillDetail.vue',
        context: {
          previousElement: (element.previous) ? element.previous.id : '##empty##',
          nextElement: (element.next) ? element.next.id : '##empty##',
          id: element.node.id,
          title: element.node.title
        }
      })
    });
  });


}