require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Lucas Lombardo`,
    description: `Web developer and JavaScript enthusiast based in Boston.`,
    author: `Lucas Lombardo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'https://blog.qzcn.co',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: ['home'],
        auth: {
          htaccess_user: process.env.WORDPRESS_USER,
          htaccess_pass: process.env.WORDPRESS_PASSWORD,
          htaccess_sendImmediately: false,
        },
        // for debugging
        verboseOutput: false,
        // how many pages retrieved per API request
        perPage: 100,
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          '**/*/*/categories',
          '**/*/*/posts',
          '**/*/*/pages',
          '**/*/*/media',
          '**/*/*/tags',
          '**/*/*/taxonomies',
          '**/*/*/users',
        ],
        // Blacklisted routes using glob patterns
        excludedRoutes: ['**/*/*/posts/1456'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lucas-lombardo`,
        short_name: `lucas-lombardo`,
        start_url: `/`,
        background_color: `#326eac`,
        theme_color: `#326eac`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-netlify`, //must be last in array
  ],
}
