import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import Footer from '../components/Footer'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

interface Props {
  title?: string
}

const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const IndexLayout: React.FC<Props> = ({ children, title }) => (
  <StaticQuery
    query={query}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={title}
          titleTemplate={`%s - ${data.site.siteMetadata.title} `}
          defaultTitle={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { name: 'og:description', content: data.site.siteMetadata.description },
            { name: 'twitter:description', content: data.site.siteMetadata.description }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
        <Footer />
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
