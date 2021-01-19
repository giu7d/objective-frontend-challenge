import styled from 'styled-components'

interface IBadge {
  backgroundColor?: string
}

export const Badge = styled.div<IBadge>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 4px 24px;
  padding-right: 4px;
  gap: 14px;
  border-radius: 48px;
  font-size: 1.2rem;

  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.primary};
  color: ${({ theme }) => theme.colors.foreground};

  & > span {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 8px;
    border-radius: 24px;
    min-width: 38px;
    text-align: center;
  }
`
