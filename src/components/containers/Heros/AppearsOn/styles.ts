import styled from 'styled-components'

export const HeroAppearsOnStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 14px;
  max-width: 1000px;

  & > .appears-title {
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
  }

  & > .appears-items {
    margin-top: 24px;
    display: flex;
    width: auto;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }
`
