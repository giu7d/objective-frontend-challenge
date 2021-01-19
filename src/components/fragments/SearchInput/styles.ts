import styled from 'styled-components'

export const SearchInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > label {
    font-size: 1.25rem;
    font-weight: bold;
    opacity: 0.75;
  }

  & > input {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    ::placeholder {
      font-style: italic;
    }
  }

  @media screen and (min-width: 600px) {
    width: 350px;
  }
`
