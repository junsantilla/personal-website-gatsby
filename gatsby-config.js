/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Jun Santilla',
    description: 'Don' + "'" + 't worry, I' + "'" + 'm from the internet!',
  },
  plugins: [
    
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'https://ncovph.digitaldeskph.com/api/total-confirmed',
          'https://ncovph.digitaldeskph.com/api/cases-by-residence'
        ],
      },
    }
  ]
}
