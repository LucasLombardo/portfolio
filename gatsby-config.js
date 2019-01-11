require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Headless Wordpress Blog`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        baseUrl: 'http://blog.qzcn.co',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: false,
        acfOptionPageIds: [],
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
