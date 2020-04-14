import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { BlogPost } from './types'
import PostList from './PostList'

const query = graphql`
  query RecentPostsWidget {
    allContentfulBlogPost(limit: 5, sort: { fields: publishDate, order: DESC }) {
      nodes {
        id
        title
        slug
        tags
        publishDate
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

interface Data {
  allContentfulBlogPost: {
    nodes: BlogPost[]
  }
}

const RecentPostsWidget: React.FC = () => {
  const data: Data = useStaticQuery(query)

  return <PostList posts={data.allContentfulBlogPost.nodes} />
}

export default RecentPostsWidget
