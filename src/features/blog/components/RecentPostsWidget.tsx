import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { BlogPost } from './types'
import PostList from './PostList'

const query = graphql`
  query RecentPostsWidget {
    allContentfulBlogPost(limit: 5, sort: { fields: publishDate, order: DESC }) {
      nodes {
        ...BlogPost
      }
    }
  }
`

interface Query {
  allContentfulBlogPost: {
    nodes: BlogPost[]
  }
}

export const RecentPostsWidget: React.FC = () => {
  const data = useStaticQuery<Query>(query)

  return <PostList posts={data.allContentfulBlogPost.nodes} header='h3' />
}
