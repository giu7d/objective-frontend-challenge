import styled from 'styled-components'

export const HeroItemStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 14px;
  gap: 8px;
  align-items: center;

  border-radius: 8px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.foreground};
  transition: all ease-in-out 200ms;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }

  & > .character {
    display: flex;
    align-items: center;
    gap: 24px;

    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;

    img {
      max-width: 84px;
      border-radius: 8px;
    }
  }

  & > .list {
    display: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    li {
      text-decoration: none;
    }
  }

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    & > .character {
      gap: 14px;
      font-size: 1.15rem;

      img {
        max-width: 64px;
      }
    }

    & > .list {
      display: inline;
    }
  }
`
