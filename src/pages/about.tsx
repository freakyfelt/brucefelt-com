import * as React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import SocialLink from '../components/SocialLink'
import { ExternalLink } from '../components/core/Links'
import { dimensions } from '../styles/variables'

const AsideRight = styled.aside`
  float: right;
  margin: ${dimensions.padding.mdY}rem ${dimensions.padding.mdX}rem;
`

export const query = graphql`
  query AboutPage {
    contentfulAsset(title: { eq: "Self" }) {
      resize(width: 400) {
        src
      }
    }
  }
`

interface QueryData {
  contentfulAsset: {
    resize: {
      src: string
    }
  }
}

const IndexPage: React.FC<{ data: QueryData }> = ({ data }) => (
  <IndexLayout title="About" breadcrumbs={[['/', 'Home'], ['About']]}>
    <Page>
      <Container>
        <h1>Who am I?</h1>

        <AsideRight>
          <img src={data.contentfulAsset.resize.src} width="200" alt="Bruce circa 2018" />
        </AsideRight>

        <p>
          I’m Bruce, a software engineer currently based out of Berlin, Germany. I grew up in Nebraska and moved to Seattle in 2012 for
          Amazon (2012-2018). From there I did a year in London, UK, and have been in Berlin since the start of 2020.
        </p>

        <p>
          In my career I’ve worked for four Fortune 500 companies, a small start up, and now a medium-sized tech startup and have learned
          how to (and how not to) architect, write, and support software in various environments (cloud, on premise, air gapped) in a way
          that helps other people get their job done faster while attempting to balance right versus right now.
        </p>

        <p>
          My day to day these days is primarily in TypeScript and NodeJS, though I still enjoy dabbling in Ruby from time to time. You can
          see a few open source projects I've written (including this website) on my <SocialLink to="github" /> account.
        </p>

        <h2>Job Opportunities</h2>

        <p>
          Right now I'm not actively looking as I'm happy with my current gig at{' '}
          <ExternalLink href="https://contentful.com">Contentful</ExternalLink>, but I'm always keeping an eye out for interesting
          challenges. I've worked in companies of all sizes and have been able to make a positive impact on their processes and ways of
          working, so it comes down to looking at what your current needs are, if I'm looking to change things up, and if we match.
        </p>

        <p>
          Reach out to me on <SocialLink to="linkedIn" display="text" /> with your sales pitch and let's talk.
        </p>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
