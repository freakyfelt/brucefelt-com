import styled from '@emotion/styled'

import { Link } from 'gatsby'
import React from 'react'

import { dimensions } from '../../styles/variables'
import { Container } from './Container'

type Label = string
type Path = string
export type Crumb = [Label] | [Path, Label]

const StyledContainer = styled(Container)`
  margin-top: ${dimensions.margin.mdY}rem;
  padding: 0 ${dimensions.containerPadding}rem;
`

const StyledList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
  }
  & > li + li:before {
    padding: ${dimensions.padding.smX}rem;
    content: '/';
  }
`
const LinkedCrumb = styled.li``
const UnlinkedCrumb = styled.li``

const Breadcrumb: React.FC<{ crumbs: Crumb[] }> = ({ crumbs }) => {
  const items = crumbs.map(crumb => {
    if (crumb.length === 1) {
      return <UnlinkedCrumb key={crumb[0]}>{crumb[0]}</UnlinkedCrumb>
    }

    return (
      <LinkedCrumb key={crumb[0]}>
        <Link key={crumb[0]} to={crumb[0]}>
          {crumb[1]}
        </Link>
      </LinkedCrumb>
    )
  })

  return (
    <nav>
      <StyledContainer>
        <StyledList role="navigation" aria-label="Breadcrumb">
          {items}
        </StyledList>
      </StyledContainer>
    </nav>
  )
}

export default Breadcrumb
