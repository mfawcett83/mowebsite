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
  plugins: [`gatsby-plugin-netlify-cms`],
  plugins: [`gatsby-plugin-sass`],
  plugins: [`gatsby-plugin-netlify-cms`],
  plugins: [`gatsby-plugin-emotion`],
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}