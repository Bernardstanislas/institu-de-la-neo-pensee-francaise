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
          // keep as first gatsby-source-filesystem plugin for gatsby image support
          resolve: 'gatsby-source-filesystem',
          options: {
              path: `${__dirname}/static/img`,
              name: 'uploads',
          },
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              path: `${__dirname}/src/pages`,
              name: 'pages',
          },
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
          resolve: 'gatsby-transformer-remark',
          options: {
              plugins: [
                  {
                      resolve: 'gatsby-remark-relative-images',
                      options: {
                          name: 'uploads',
                      },
                  },
                  {
                      resolve: 'gatsby-remark-images',
                      options: {
                          // It's important to specify the maxWidth (in pixels) of
                          // the content container as this plugin uses this as the
                          // base for generating different widths of each image.
                          maxWidth: 2048,
                      },
                  }
              ],
          },
      },
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
