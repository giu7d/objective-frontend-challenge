import styled from 'styled-components'

export const Avatar = styled.div`
  height: 42px;
  width: 42px;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 1.25rem;

  background-color: ${({ theme }) => theme.colors.foreground};
`
