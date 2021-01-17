import styled from 'styled-components'

export const AppBarStyled = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem 2rem;
  width: 100%;
  z-index: 99;

  background-color: ${({ theme }) => theme.colors.foreground};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  & > .logo {
    height: 34px;
  }

  & > .information {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 8px;
  }

  @media screen and (max-width: 600px) {
    & > .information > span {
      display: none;
    }
  }
`
