import React from 'react'
import { Link } from 'gatsby'
import DateTime from '../core/FormattedDate'
import TagList from './TagList'
import { postUrl } from '../core/routes'
import { BlogPost } from './types'

const PostListItem: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div>
    <h4>
      <Link to={postUrl(post)}>{post.title}</Link>
    </h4>
    <DateTime iso={post.publishDate} />
    {/* eslint-disable-next-line react/no-danger */}
    <blockquote dangerouslySetInnerHTML={{ __html: post.description.childMarkdownRemark.html }} />
    <TagList tags={post.tags} />
  </div>
)

const PostList: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  const entries = posts.map(post => <PostListItem key={post.slug} post={post} />)

  return <div>{entries}</div>
}

export default PostList
