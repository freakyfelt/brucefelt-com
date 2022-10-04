import styled from '@emotion/styled'

import * as React from 'react'
import { Link } from 'gatsby'
import { transparentize } from 'polished'

import { postsUrl, aboutUrl, homeUrl } from '../../routes'
import { heights, dimensions, colors } from '../../styles/variables'
import { Container } from './Container'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const NavbarLink = styled(Link)`
  color: ${colors.white};
  display: inline-block;
  padding: 0 ${dimensions.padding.mdX}rem;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const HomepageLink = styled(NavbarLink)`
  font-size: 1.5rem;
  font-weight: 600;
  padding-left: 0;
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to={homeUrl} data-testId="navbar-home">{title}</HomepageLink>
      <NavbarLink to={postsUrl} data-testId="navbar-blog">Blog</NavbarLink>
      <NavbarLink to={aboutUrl} data-testId="navbar-about">About</NavbarLink>
    </HeaderInner>
  </StyledHeader>
)

export default Header
