import React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'
import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'
import SocialLink from './SocialLink'

const StyledFooter = styled.footer`
  height: ${heights.footer}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.almostBlack};
  color: ${transparentize(0.5, colors.white)};
`

const FooterInner = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  li {
    margin-right: 10px;

    a {
      color: ${colors.white};

      &:hover,
      &:focus {
        text-decoration: none;
      }
    }
  }
`

const Footer: React.FC = () => (
  <StyledFooter>
    <FooterInner>
      <NavList>
        <li>
          <Link to="/contact">Contact me</Link>
        </li>
      </NavList>
      <NavList>
        <li>
          <SocialLink to="github" display="icon" />
        </li>
        <li>
          <SocialLink to="twitter" display="icon" />
        </li>
        <li>
          <SocialLink to="linkedIn" display="icon" />
        </li>
      </NavList>
    </FooterInner>
  </StyledFooter>
)

export default Footer
