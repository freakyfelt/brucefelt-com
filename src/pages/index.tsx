import * as React from 'react'

import IndexLayout, { Container, Page } from '../core/layouts'
import { RecentPostsWidget } from '../features/blog'

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
