import styled from 'styled-components'

export const HeroDetailsProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  & > .profile-picture {
    margin: 24px;
    width: 200px;
    height: 200px;
    border-radius: 150px;
    background-color: ${({ theme }) => theme.colors.background};
  }

  & > .profile-name {
    font-weight: bold;
    font-size: 2.5rem;
  }

  & > .profile-description {
    font-size: 1.25rem;
    opacity: 0.75;
    text-align: justify;
  }
`
