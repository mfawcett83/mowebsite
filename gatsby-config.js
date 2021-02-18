/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'My New Blog',
    description: 'This is my awesome blog I made from scratch!'  
  },
  plugins: [`gatsby-plugin-sass`],
  plugins: [`gatsby-plugin-emotion`],
  plugins: [
    {
      plugins: [`gatsby-plugin-sharp`, `gatsby-transformer-sharp`],
    },
  ],
plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `content`,
      path: `${__dirname}/src/content`,
      name: `images`,
      path: `${__dirname}/src/images/`,
      name: `blog`,
      path: `${__dirname}/src/blog/`,
    },
    
  },
  `gatsby-transformer-remark`,
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/
      },
    },
    
  },
],
}