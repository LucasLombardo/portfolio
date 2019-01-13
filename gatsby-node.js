const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Create pages for Wordpress pages (route : /{slug})
// Create pages for Wordpress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // ==== PAGES (WORDPRESS NATIVE) ====
    // graphql(
    //   `
    //     {
    //       allWordpressPage {
    //         edges {
    //           node {
    //             id
    //             slug
    //             status
    //             template
    //           }
    //         }
    //       }
    //     }
    //   `
    // )
    //   .then(result => {
    //     if (result.errors) {
    //       console.log(result.errors)
    //       reject(result.errors)
    //     }

    //     // Create Page pages.
    //     const pageTemplate = path.resolve(`./src/templates/page.js`)
    //     _.each(result.data.allWordpressPage.edges, edge => {
    //       // ignore home page, it's content will be pulled into index.js
    //       if (edge.node.slug !== 'home') {
    //         createPage({
    //           path: `/${edge.node.slug}/`,
    //           // uses page template to construct the page
    //           component: slash(pageTemplate),
    //           // context gives the page the ability to do page queries
    //           context: {
    //             id: edge.node.id,
    //           },
    //         })
    //       }
    //     })
    //   })
    // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
    //   .then(() => {
    graphql(
      `
        {
          allWordpressPost {
            edges {
              node {
                id
                slug
                status
                template
                format
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      const postTemplate = path.resolve(`./src/templates/post.js`)
      _.each(result.data.allWordpressPost.edges, edge => {
        if (edge.node.format !== 'aside') {
          // Asides will be used for projects
          createPage({
            path: edge.node.slug,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
          })
        }
      })
      resolve()
    })
    //   })
  })
}
