import styled from 'styled-components'

export const Avatar = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 1rem;

  background-color: ${({ theme }) => theme.colors.background};
`
