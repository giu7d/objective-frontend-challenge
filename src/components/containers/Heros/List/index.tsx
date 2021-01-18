import React from 'react'
import { FiAlertTriangle } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { useHeros } from '../../../../hooks/useHeros'
import { randomValueInRange } from '../../../../utils'
import { HerosListHeader } from '../../../fragments/Heros/List/Header'
import { HerosItem } from '../../../fragments/Heros/List/Item'
import { HerosItemShimmer } from '../../../fragments/Heros/List/Item/Shimmer'
import { Warning } from '../../../fragments/Warning'

import { HeroListStyled } from './styles'

export const HerosList: React.FC = () => {
  const { heros, isError, isLoading } = useHeros()
  const history = useHistory()

  if (isError) {
    return (
      <HeroListStyled>
        <HerosListHeader />
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
        <HerosListHeader />
        {Array(randomValueInRange(1, 4))
          .fill('')
          .map(() => (
            <HerosItemShimmer key={uuid()} />
          ))}
      </HeroListStyled>
    )
  }

  return (
    <HeroListStyled>
      <HerosListHeader>
        <span>Personagem</span>
        <span>Séries</span>
        <span>Eventos</span>
      </HerosListHeader>
      {heros.map(character => (
        <HerosItem
          key={character.id}
          thumbnailURL={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
          name={character.name}
          series={character.series.items.slice(0, 3)}
          events={character.events.items.slice(0, 3)}
          onClick={() => history.push(`/heros/${character.id}`)}
        />
      ))}
    </HeroListStyled>
  )
}
