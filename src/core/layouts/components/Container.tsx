import * as React from 'react'
import styled from '@emotion/styled'

import { widths } from '../../styles/variables'
import { getEmSize } from '../../styles/mixins'

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;
`

interface ContainerProps {
  className?: string
}

/**
 * Represents a container for content that is a direct descendant of Page
 */
export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)
