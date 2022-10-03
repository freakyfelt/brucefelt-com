const path = require('path')

const createBlogPostPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve('./src/features/blog/templates/post.tsx')

  const allBlogPosts = await graphql(`
    {
      allContentfulBlogPost(limit: 1000) {
        nodes {
          slug
        }
      }
    }
  `)

  if (allBlogPosts.errors) {
    console.error(allBlogPosts.errors)
    throw new Error(allBlogPosts.errors)
  }

  allBlogPosts.data.allContentfulBlogPost.nodes.forEach(({ slug }) => {
    createPage({
      path: `/posts/${slug}`,
      component: blogPost,
      context: {
        slug
      }
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([createBlogPostPages({ graphql, actions })])
}
