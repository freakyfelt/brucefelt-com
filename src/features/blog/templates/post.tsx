import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { graphql } from 'gatsby'
import * as React from 'react'

import IndexLayout, { Container, Page } from '../../../core/layouts'
import { postsUrl } from '../../../core/routes'
import { BlogPost } from '../components/types'

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      ...BlogPost
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
        <div>{documentToReactComponents(data.contentfulBlogPost.body.json)}</div>
      </Container>
    </Page>
  </IndexLayout>
)

export default PageTemplate
