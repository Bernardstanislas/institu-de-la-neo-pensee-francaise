/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Institut de la neo-pensée française'
  },
  plugins: [
      'gatsby-plugin-typescript',
      {
          resolve: `gatsby-plugin-typography`,
          options: {
              pathToConfigModule: `src/utils/typography`,
          },
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              path: `${__dirname}/src/pages`,
              name: 'pages',
          },
      },
      'gatsby-transformer-remark',
      'gatsby-plugin-postcss',
      {
          resolve: 'gatsby-plugin-netlify-cms',
          options: {
              modulePath: `${__dirname}/src/cms/cms.ts`,
              manualInit: true
          },
      }
  ]
};
