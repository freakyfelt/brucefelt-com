import { Document } from '@contentful/rich-text-types'

import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlogPost on ContentfulBlogPost {
    id
    title
    slug
    body {
      json
    }
    tags
    publishDate
  }
`

export interface BlogPost {
  title: string
  slug: string
  tags: string[]
  publishDate: string
  body: {
    json: Document
  }
}
