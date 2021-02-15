/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Title from siteMetadata`,
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
    },
  },
  `gatsby-transformer-remark`,
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/
      }
    }
  }
],
}