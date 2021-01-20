import React, { ChangeEvent, useContext, useMemo, useState } from 'react'
import debounce from 'lodash.debounce'

import { useHeros } from '../../../../hooks/useHeros'
import { SearchInput } from '../../../fragments/SearchInput'
import { GlobalContext } from '../../../../stores/GlobalStore'

export const HerosListSearch: React.FC = () => {
  const { setSearchByName } = useHeros()
  const { state } = useContext(GlobalContext)
  const [value, setValue] = useState(state.heroNameSearch)

  const debounceSearch = useMemo(
    () => debounce(value => setSearchByName(value), 250),
    [setSearchByName]
  )

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    debounceSearch(e.target.value)
  }

  return (
    <SearchInput
      name="search"
      value={value}
      label="Nome do personagem"
      placeholder="Search"
      onChange={handleSearch}
    />
  )
}
