import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'

import IndexLayout, { Container, Page } from '../core/layouts'
import { BlogPost } from '../features/blog/components/types'
import PostList from '../features/blog/components/PostList'

const query = graphql`
  query PostsList {
    allContentfulBlogPost(limit: 20, sort: { fields: publishDate, order: DESC }) {
      nodes {
        ...BlogPost
      }
    }
  }
`

interface QueryData {
  allContentfulBlogPost: {
    nodes: BlogPost[]
  }
}

const PostsIndex: React.FC = () => {
  const data: QueryData = useStaticQuery(query)

  return (
    <IndexLayout title="Blog" breadcrumbs={[['/', 'Home'], ['Blog']]}>
      <Page>
        <Container>
          <h1>Blog Posts</h1>

          <PostList posts={data.allContentfulBlogPost.nodes} />
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default PostsIndex
