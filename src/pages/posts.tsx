import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { BlogPost } from '../components/blog/types'
import FormattedDate from '../components/core/FormattedDate'
import TagList from '../components/blog/TagList'
import { postUrl } from '../components/core/routes'
import { colors } from '../styles/variables'
import Breadcrumb from '../components/layout/Breadcrumb'

const StyledEntry = styled.div``
const MetadataRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${colors.text.light};
`

const query = graphql`
  query PostsList {
    allContentfulBlogPost(limit: 20, sort: { fields: publishDate, order: DESC }) {
      nodes {
        id
        slug
        tags
        title
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

interface QueryData {
  allContentfulBlogPost: {
    nodes: BlogPost[]
  }
}

const PostEntry: React.FC<{ post: BlogPost }> = ({ post }) => (
  <StyledEntry>
    <h4>
      <Link to={postUrl(post)}>{post.title}</Link>
    </h4>
    <MetadataRow>
      <span>
        Published on <FormattedDate iso={post.publishDate} />
      </span>
    </MetadataRow>
    {/* eslint-disable-next-line react/no-danger */}
    <blockquote dangerouslySetInnerHTML={{ __html: post.description.childMarkdownRemark.html }} />
    <MetadataRow>
      <TagList tags={post.tags} />
    </MetadataRow>
  </StyledEntry>
)

const PostsIndex: React.FC = () => {
  const data: QueryData = useStaticQuery(query)

  return (
    <IndexLayout title="Blog" breadcrumbs={[['/', 'Home'], ['Blog']]}>
      <Page>
        <Container>
          <h1>Blog Posts</h1>

          {data.allContentfulBlogPost.nodes.map(post => (
            <PostEntry key={post.slug} post={post} />
          ))}
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default PostsIndex
