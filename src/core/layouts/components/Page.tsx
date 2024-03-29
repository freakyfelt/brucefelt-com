import styled from '@emotion/styled'

import * as React from 'react'

import { dimensions } from '../../styles/variables'

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  padding: ${dimensions.containerPadding}rem;
  margin-bottom: 1rem;
`

interface PageProps {
  className?: string
}

export const Page: React.FC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>
