import React from 'react'
import { useHeros } from '../../../../hooks/useHeros'
import { HeroListHeader } from '../../../fragments/Hero/List/Header'
import { HeroItem } from '../../../fragments/Hero/List/Item'

import { HeroListStyled } from './styles'

export const HeroList: React.FC = () => {
  const { heros, isError, isLoading } = useHeros()

  if (isError) {
    return <div>Error...</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <HeroListStyled>
      <HeroListHeader>
        <span>Personagem</span>
        <span>Séries</span>
        <span>Eventos</span>
      </HeroListHeader>
      {heros.map(character => (
        <HeroItem
          key={character.id}
          thumbnailURL={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
          name={character.name}
          series={character.series.items.slice(0, 3)}
          events={character.events.items.slice(0, 3)}
        />
      ))}
    </HeroListStyled>
  )
}
