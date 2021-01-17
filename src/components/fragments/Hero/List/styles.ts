import styled from 'styled-components'

export const HeroListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`
export const HeroListHeaderStyled = styled.div`
  display: grid;
  margin-top: 24px;
  gap: 8px;
  grid-template-columns: repeat(3, 1fr);

  & > span {
    display: none;
  }

  @media screen and (min-width: 600px) {
    & > span {
      display: inline;
      opacity: 0.75;
      font-weight: lighter;
    }
  }
`
