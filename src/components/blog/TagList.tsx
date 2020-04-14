import React from 'react'
import styled from '@emotion/styled'
import { dimensions } from '../../styles/variables'

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    margin-right: ${dimensions.padding.mdY}rem;
  }
`

const TagList: React.FC<{ tags: string[] }> = ({ tags }) => (
  <StyledList>
    {tags.map(tag => (
      <li key={tag}>#{tag}</li>
    ))}
  </StyledList>
)

export default TagList
