/* eslint-disable multiline-ternary */
import React from 'react'
import { v4 as uuid } from 'uuid'

import { HeroItemStyled } from './styles'

interface IHeroItemProps {
  thumbnailURL: string
  name: string
  series: { name: string }[]
  events: { name: string }[]
}

export const HeroItem: React.FC<IHeroItemProps> = ({
  thumbnailURL,
  name,
  events,
  series
}) => {
  return (
    <HeroItemStyled>
      <div className="character">
        <img src={thumbnailURL} />
        <span>{name}</span>
      </div>
      <ul className="list">
        {series.map(({ name }) => (
          <li key={uuid()}>{name}</li>
        ))}
      </ul>
      <ul className="list">
        {events.map(({ name }) => (
          <li key={uuid()}>{name}</li>
        ))}
      </ul>
    </HeroItemStyled>
  )
}
