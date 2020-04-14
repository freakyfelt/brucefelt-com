import * as React from 'react'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import RecentPostsWidget from '../components/blog/RecentPostsWidget'

const IndexPage: React.FC = () => (
  <IndexLayout title="Home">
    <Page>
      <Container>
        <h2>What is this?</h2>

        <p>
          This site is my (Bruce) beacon on the internet where I hope to write a bit about my experiences as a developer, my travels, and
          occasionally comments/posts on other topics.
        </p>

        <h2>Recent Posts</h2>
        <RecentPostsWidget />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
