import styled from 'styled-components'

export const HerosListHeader = styled.ul`
  display: grid;
  margin-top: 24px;
  gap: 8px;
  grid-template-columns: repeat(3, 1fr);

  & > li {
    display: none;
  }

  @media screen and (min-width: 600px) {
    & > li {
      display: inline;
      opacity: 0.75;
      font-weight: lighter;
      text-decoration: none;
    }
  }
`
