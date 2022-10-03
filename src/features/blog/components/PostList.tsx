import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from '@emotion/styled'

import { Link } from 'gatsby'
import React from 'react'

import FormattedDate from '../../../core/components/FormattedDate'
import { colors } from '../../../core/styles/variables'
import { postUrl } from '../../../core/routes'
import TagList from './TagList'
import { BlogPost } from './types'

const StyledEntry = styled.div``
const MetadataRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${colors.text.light};
`

const PostListItem: React.FC<{ post: BlogPost; header?: React.ElementType }> = ({ post, header: Header = 'h2' }) => (
  <StyledEntry>
    <Header>
      <Link to={postUrl(post)}>{post.title}</Link>
    </Header>
    <MetadataRow>
      <span>
        Published on <FormattedDate iso={post.publishDate} />
      </span>
    </MetadataRow>
    <div>{documentToReactComponents(post.body.json)}</div>
    <MetadataRow>
      <TagList tags={post.tags} />
    </MetadataRow>
  </StyledEntry>
)

type Props = {
  posts: BlogPost[]
  header?: React.ElementType
}

const PostList: React.FC<Props> = ({ posts, header }) => {
  const entries = posts.map(post => <PostListItem key={post.slug} post={post} header={header} />)

  return <div>{entries}</div>
}

export default PostList
