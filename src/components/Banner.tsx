import React from 'react'
import styled from '@emotion/styled'
import { colors, dimensions } from '../styles/variables'
import Container from './Container'

const StyledBanner = styled.div`
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.green.light};
`

const BannerInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0.5rem 0;

  p {
    margin: 0;
  }
`

const Banner: React.FC = ({ children }) => (
  <StyledBanner>
    <BannerInner>{children}</BannerInner>
  </StyledBanner>
)

export default Banner
