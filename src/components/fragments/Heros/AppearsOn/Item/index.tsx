import React from 'react'

import { HeroAppearsOnItemStyled } from './styles'

interface IHeroAppearsOnItemProps {
  coverURL: string
  type: string
  title: string
  description?: string
}

export const HeroAppearsOnItem: React.FC<IHeroAppearsOnItemProps> = ({
  coverURL,
  type,
  title,
  description
}) => {
  return (
    <HeroAppearsOnItemStyled>
      <div className="item-cover">
        <img src={coverURL} alt={`Capa do ${type} ${title}`} />
      </div>
      <div className="item-detail">
        <small>{type}</small>
        <h4>{title}</h4>
        <p>{description || <i>Sem descrição.</i>}</p>
      </div>
    </HeroAppearsOnItemStyled>
  )
}
