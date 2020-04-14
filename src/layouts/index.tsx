import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/layout/Header'
import LayoutRoot from '../components/layout/LayoutRoot'
import LayoutMain from '../components/layout/LayoutMain'
import Footer from '../components/layout/Footer'
import Banner from '../components/Banner'
import Breadcrumb, { Crumb } from '../components/layout/Breadcrumb'

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
  breadcrumbs?: Crumb[]
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

const IndexLayout: React.FC<Props> = ({ children, breadcrumbs, title }) => (
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
        <Banner>
          <p>Welcome! Still getting things set up after swapping from Wordpress</p>
        </Banner>
        {breadcrumbs && <Breadcrumb crumbs={breadcrumbs} />}
        <LayoutMain>{children}</LayoutMain>
        <Footer />
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
