import React, { ChangeEvent, useMemo } from 'react'
import debounce from 'lodash.debounce'

import { useHeros } from '../../../../hooks/useHeros'
import { SearchInput } from '../../../fragments/SearchInput'

export const HerosListSearch: React.FC = () => {
  const { setSearchByName } = useHeros()

  const debounceSearch = useMemo(
    () => debounce(value => setSearchByName(value), 250),
    [setSearchByName]
  )

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    debounceSearch(e.target.value)
  }

  return (
    <SearchInput
      name="search"
      label="Nome do personagem"
      placeholder="search"
      onChange={handleSearch}
    />
  )
}
