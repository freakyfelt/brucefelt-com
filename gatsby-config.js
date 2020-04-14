require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

function getString(key, opts = {}) {
  const val = process.env[key]
  if (typeof val === 'string') {
    return val
  }

  if (typeof opts.default !== 'undefined') {
    return opts.default
  }

  throw new TypeError(`Expected env to have key ${key}`)
}

const SITE_URL = getString('SITE_URL', {
  default: 'http://localhost'
})

module.exports = {
  siteMetadata: {
    title: 'The Felt Facade',
    description: 'Base site for Bruce Felt, a software engineer based in Berlin, Germany',
    keywords: 'gatsbyjs, gatsby, javascript, typescript, ruby, aws, contentful',
    siteUrl: SITE_URL,
    author: {
      name: 'Bruce Felt',
      url: SITE_URL,
      github: 'freakyfelt',
      twitter: 'freakyfelt',
      linkedIn: 'brucefelt'
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: SITE_URL
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
