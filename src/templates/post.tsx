import * as React from 'react'
import { graphql } from 'gatsby'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { BlogPost } from '../components/blog/types'
import { postsUrl } from '../components/core/routes'

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      tags
      publishDate
      body {
        json
      }
    }
  }
`

interface PageTemplateProps {
  data: {
    contentfulBlogPost: BlogPost
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => (
  <IndexLayout title={data.contentfulBlogPost.title} breadcrumbs={[['/', 'Home'], [postsUrl, 'Blog'], [data.contentfulBlogPost.title]]}>
    <Page>
      <Container>
        <h1>{data.contentfulBlogPost.title}</h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div>{documentToReactComponents(data.contentfulBlogPost.body.json)}</div>
      </Container>
    </Page>
  </IndexLayout>
)

export default PageTemplate
