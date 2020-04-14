import React from 'react'

interface Props {
  href: string
  title?: string
  /**
   * Whether to open in a new window
   *
   * @default {false}
   */
  blank?: boolean
}

export const ExternalLink: React.FC<Props> = ({ children, href, title, blank }) => (
  <a href={href} title={title} target={blank ? '_blank' : undefined} rel={blank ? 'noopener noreferrer' : undefined}>
    {children}
  </a>
)
