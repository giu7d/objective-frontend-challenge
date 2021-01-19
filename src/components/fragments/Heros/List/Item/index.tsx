/* eslint-disable multiline-ternary */
import React from 'react'
import { v4 as uuid } from 'uuid'

import { HerosItemStyled } from './styles'

interface IHeroItemProps {
  thumbnailURL: string
  name: string
  series: { name: string }[]
  events: { name: string }[]
  onClick?: () => void
}

export const HerosItem: React.FC<IHeroItemProps> = ({
  thumbnailURL,
  name,
  events,
  series,
  onClick = () => {}
}) => {
  return (
    <HerosItemStyled onClick={onClick}>
      <div className="item-character">
        <img src={thumbnailURL} />
        <span>{name}</span>
      </div>
      <ul className="item-list">
        {series.map(({ name }) => (
          <li key={uuid()}>{name}</li>
        ))}
      </ul>
      <ul className="item-list">
        {events.map(({ name }) => (
          <li key={uuid()}>{name}</li>
        ))}
      </ul>
    </HerosItemStyled>
  )
}
