import React, { ChangeEvent, useContext, useMemo } from 'react'
import debounce from 'lodash.debounce'

import { useHeros } from '../../../../hooks/useHeros'
import { SearchInput } from '../../../fragments/SearchInput'
import { GlobalContext } from '../../../../stores/GlobalStore'

export const HerosListSearch: React.FC = () => {
  const { setSearchByName } = useHeros()
  const { state } = useContext(GlobalContext)

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
      value={state.heroNameSearch}
      label="Nome do personagem"
      placeholder="search"
      onChange={handleSearch}
    />
  )
}
