import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Icon } from '@iconify/react'
import githubIcon from '@iconify/icons-ant-design/github'
import twitterIcon from '@iconify/icons-ant-design/twitter'
import linkedInIcon from '@iconify/icons-ant-design/linkedin'
import { ExternalLink } from './Links'

const githubUrl = (user: string): string => `https://github.com/${user}`
const linkedInUrl = (user: string): string => `https://linkedin.com/in/${user}`
const twitterUrl = (user: string): string => `https://twitter.com/${user}`

interface StaticQueryProps {
  site: {
    siteMetadata: {
      author: {
        name: string
        github: string
        linkedIn: string
        twitter: string
      }
    }
  }
}

const configs = {
  github: (data: StaticQueryProps) => {
    const username = data.site.siteMetadata.author.github

    return {
      title: `GitHub (@${username})`,
      displayTitle: 'GitHub',
      url: githubUrl(username),
      icon: githubIcon
    }
  },
  linkedIn: (data: StaticQueryProps) => {
    const username = data.site.siteMetadata.author.linkedIn

    return {
      title: 'LinkedIn',
      displayTitle: 'LinkedIn',
      url: linkedInUrl(username),
      icon: linkedInIcon
    }
  },
  twitter: (data: StaticQueryProps) => {
    const username = data.site.siteMetadata.author.twitter

    return {
      title: `Twitter (@${username})`,
      displayTitle: 'Twitter',
      url: twitterUrl(username),
      icon: twitterIcon
    }
  }
}

interface Props {
  to: keyof typeof configs
  display?: 'icon' | 'text' | 'full'
  /**
   * Whether to set target to a new window.
   *
   * @default false
   */
  blank?: boolean
}

const SocialLink: React.FC<Props> = ({ to, blank, display }) => {
  const data: StaticQueryProps = useStaticQuery(graphql`
    query SocialLinks {
      site {
        siteMetadata {
          author {
            github
            linkedIn
            twitter
          }
        }
      }
    }
  `)

  const { displayTitle, title, icon, url } = configs[to](data)

  const withIcon = [undefined, 'full', 'icon'].includes(display)
  const withText = [undefined, 'full', 'text'].includes(display)

  return (
    <ExternalLink href={url} title={title} blank={blank} nowrap>
      {withIcon && <Icon icon={icon} />}
      {withText && ` ${displayTitle}`}
    </ExternalLink>
  )
}

export default SocialLink
