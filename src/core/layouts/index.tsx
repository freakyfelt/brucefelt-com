import { graphql, useStaticQuery } from 'gatsby'
import 'modern-normalize'
import * as React from 'react'
import Helmet from 'react-helmet'

import '../styles/normalize'

import Header from './components/Header'
import LayoutRoot from './components/LayoutRoot'
import LayoutMain from './components/LayoutMain'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Breadcrumb, { Crumb } from './components/Breadcrumb'

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

const IndexLayout: React.FC<Props> = ({ children, breadcrumbs, title }) => {
  const data = useStaticQuery<StaticQueryProps>(query)

  return (
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
  )
}

export { Container } from './components/Container'
export { Page } from './components/Page'

export default IndexLayout
