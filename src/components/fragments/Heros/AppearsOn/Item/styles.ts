import styled from 'styled-components'

export const HeroAppearsOnItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 350px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 200ms;

  & > .item-cover {
    overflow: hidden;
    height: 250px;
    transition: all ease-in-out 200ms;
    img {
      width: 100%;
    }
  }

  & > .item-detail {
    display: flex;
    flex-direction: column;
    flex: 1 1;
    overflow: hidden;

    padding: 1rem;
    gap: 4px;

    small {
      font-weight: bold;
      font-size: 1.25rem;
      opacity: 0.5;
    }

    h4 {
      font-weight: 600;
      font-size: 1.5rem;
      text-transform: capitalize;
    }

    p {
      display: none;
    }
  }

  &:hover {
    & > .item-cover {
      height: 50px;
    }

    & > .item-detail > p {
      display: inline;
      margin-top: 14px;
      font-size: 1.2rem;
    }
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 600px) {
    width: 300px;
  }
`
