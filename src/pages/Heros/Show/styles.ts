import styled from 'styled-components'

export const HerosShowDetailsSection = styled.section`
  padding: 2rem;
  padding-top: 124px;
  background-color: ${({ theme }) => theme.colors.foreground};
`
export const HerosShowAppearsOnSection = styled.section`
  padding: 2rem;
  padding-top: 4rem;
  background-color: ${({ theme }) => theme.colors.background};

  & > .appears-container {
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
  }
`
