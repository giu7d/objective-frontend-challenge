import React from 'react'

import { SearchInputStyled } from './styles'

interface ISearchInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  name: string
}

export const SearchInput: React.FC<ISearchInputProps> = ({
  label,
  name,
  ...props
}) => {
  return (
    <SearchInputStyled>
      {label && <label htmlFor={name}>{label}</label>}
      <input name={name} type="text" {...props} />
    </SearchInputStyled>
  )
}
