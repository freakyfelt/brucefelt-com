import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const StyledAnchor = styled.a``

const styles = {
  nowrap: css`
    white-space: nowrap;
  `
}

interface Props {
  href: string
  title?: string
  /**
   * Whether to open in a new window
   *
   * @default {false}
   */
  blank?: boolean
  /**
   * Turn off whitespace wrapping for this link
   *
   * @default {false}
   */
  nowrap?: boolean
}

export const ExternalLink: React.FC<Props> = ({ children, href, nowrap, title, blank }) => (
  <StyledAnchor
    href={href}
    title={title}
    target={blank ? '_blank' : undefined}
    rel={blank ? 'noopener noreferrer' : undefined}
    css={nowrap && styles.nowrap}
  >
    {children}
  </StyledAnchor>
)
