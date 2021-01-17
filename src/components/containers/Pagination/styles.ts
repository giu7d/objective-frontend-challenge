import styled from 'styled-components'
import { IconButton } from '../../fragments/Button/IconButton'

export const PaginationStyled = styled.div`
  display: grid;
  grid-template-columns: 75px auto 75px;
  gap: 4px;
  align-self: center;

  & > div {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  & > div:first-child {
    justify-self: flex-end;
  }

  & > div:last-child {
    justify-self: flex-start;
  }
`

export const PageSelectionButton = styled(IconButton)<{
  selected?: boolean
}>`
  border-radius: 8px;
  color: ${({ theme, selected = false }) =>
    selected ? theme.colors.foreground : 'inherit'};
  background-color: ${({ theme, selected = false }) =>
    selected ? theme.colors.primary : theme.colors.background};
`
