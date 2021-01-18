import React from 'react'
import { FiAlertTriangle } from 'react-icons/fi'
import { v4 as uuid } from 'uuid'

import { useHeros } from '../../../../hooks/useHeros'
import { randomValueInRange } from '../../../../utils'
import { HeroListHeader } from '../../../fragments/Hero/List/Header'
import { HeroItem } from '../../../fragments/Hero/List/Item'
import { HeroItemShimmer } from '../../../fragments/Hero/List/Item/Shimmer'
import { Warning } from '../../../fragments/Warning'

import { HeroListStyled } from './styles'

export const HeroList: React.FC = () => {
  const { heros, isError, isLoading } = useHeros()

  if (isError) {
    return (
      <HeroListStyled>
        <HeroListHeader />
        <Warning>
          <FiAlertTriangle className="icon" />
          <h3 className="title">Erro</h3>
          <p className="content">{isError.message}</p>
        </Warning>
      </HeroListStyled>
    )
  }

  if (isLoading) {
    return (
      <HeroListStyled>
        <HeroListHeader />
        {Array(randomValueInRange(1, 4))
          .fill('')
          .map(() => (
            <HeroItemShimmer key={uuid()} />
          ))}
      </HeroListStyled>
    )
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
