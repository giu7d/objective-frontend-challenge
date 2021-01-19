import styled from 'styled-components'

export const Warning = styled.div`
  display: grid;
  grid-template-areas:
    'icon title'
    'icon content';

  padding: 24px;
  gap: 8px;
  border-radius: 8px;

  align-items: center;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.colors.foreground};

  & > .warning-icon {
    grid-area: icon;
    margin-right: 24px;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.danger};
  }

  & > .warning-title {
    grid-area: title;
    font-size: 2rem;
  }

  & > .warning-content {
    grid-area: content;
  }
`
