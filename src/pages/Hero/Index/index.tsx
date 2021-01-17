import React, { useState } from 'react'

import { SearchInput } from '../../../components/fragments/SearchInput'
import { HeroList } from '../../../components/fragments/Hero/List'
import { HeroIndexPaginationStyled, HeroIndexStyled } from './styles'
import { HeroItem } from '../../../components/fragments/Hero/List/Item'
import { Pagination } from '../../../components/containers/Pagination'
import { useCharacters } from '../../../hooks/useCharacters'

export const HeroIndex: React.FC = () => {
  const [offset, setOffset] = useState(0)
  const { characters, isError, isLoading } = useCharacters(offset)

  if (isError || !characters) {
    return <div>error...</div>
  }

  if (isLoading) {
    return <div>loading...</div>
  }
  return (
    <>
      <HeroIndexStyled>
        <h1>Buscar de personagens</h1>
        <SearchInput
          name="search"
          label="Nome do personagem"
          placeholder="search"
        />
        <HeroList>
          {characters.results.map(character => (
            <HeroItem
              key={character.id}
              thumbnailURL={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
              name={character.name}
              series={character.series.items.slice(0, 3)}
              events={character.events.items.slice(0, 3)}
            />
          ))}
        </HeroList>
      </HeroIndexStyled>
      <HeroIndexPaginationStyled>
        <Pagination
          selectedPage={Math.floor(offset / characters.limit)}
          pages={Math.floor(characters.total / characters.limit)}
          onClick={i => setOffset(i * characters.limit)}
        />
      </HeroIndexPaginationStyled>
    </>
  )
}
