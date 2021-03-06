import styled from 'styled-components'

export const HerosItemStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 14px;
  gap: 8px;
  align-items: center;

  border-radius: 8px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.foreground};
  transition: all ease-in-out 200ms;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }

  & > .item-character {
    display: flex;
    align-items: center;
    gap: 24px;

    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;

    img {
      width: 84px;
      height: 84px;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.colors.background};
    }
  }

  & > .item-list {
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

    & > .item-character {
      gap: 14px;
      font-size: 1.15rem;

      img {
        height: 64px;
        width: 64px;
      }
    }

    & > .item-list {
      display: inline;
    }
  }
`
