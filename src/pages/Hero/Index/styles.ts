import styled from 'styled-components'

export const HeroIndexStyled = styled.main`
  padding: 124px 2rem;

  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 1rem;

  max-width: 900px;

  & > h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`
export const HeroIndexPaginationStyled = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;

  bottom: 0;
  padding: 2rem;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.foreground};
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.05);
`
