require("dotenv").config({
  path:`./.env`,
})

module.exports = {
  siteMetadata: {
    title: `Microbes in the Kitchen`,
    description: `A recipe blog with a focus on our microscopic helpers`,
    author: `@coleenhuang`,
  },
  plugins: [
    {
    resolve: 'gatsby-source-prismic-graphql',
    options: {
      repositoryName: "microbes-in-the-kitchen", // required
      defaultLang: 'en-us',
      langs: ['en-us', 'zh-tw'],
      shortenUrlLangs: true,
      accessToken: process.env.API_KEY,
      previews: false,
      pages: [
      {
        type: 'Post',
        match: '/:lang?/post/:uid',
        path: '/post-preview',
        component: require.resolve('./src/templates/post.js'),
        langs: ['en-us', 'zh-tw'],
      },
      {
          type: 'Homepage',
          match: '/:lang?',
          path: '/',
          component: require.resolve('./src/templates/homepage.js'),
          langs: ['en-us', 'zh-tw'],
      },
      {
          type: 'Bookshelf',
          match: '/:lang?/bookshelf',
          path:'/bookshelf-preview',
          component: require.resolve('./src/templates/bookshelf.js'),
          langs: ['en-us', 'zh-tw']
      },
      {
        type: 'About',
        match: '/:lang?/about',
        path:'/about-preview',
        component: require.resolve('./src/templates/about.js'),
        langs: ['en-us', 'zh-tw']
      },
      {
        type: 'Group',
        match: '/:lang?/group/:uid',
        path: '/group-preview',
        component: require.resolve('./src/templates/group.js'),
        langs: ['en-us', 'zh-tw'],
      },
      {
        type: 'Tag',
        match: '/:lang?/tag/:uid',
        path: '/tag-preview',
        component: require.resolve('./src/templates/tag.js'),
        langs: ['en-us', 'zh-tw'],
      }]
    }
  },
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
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
