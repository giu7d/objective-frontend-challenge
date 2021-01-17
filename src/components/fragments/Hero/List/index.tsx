import React from 'react'

import { HeroListStyled, HeroListHeaderStyled } from './styles'

export const HeroList: React.FC = ({ children }) => {
  return (
    <HeroListStyled>
      <HeroListHeaderStyled>
        <span>Personagem</span>
        <span>Séries</span>
        <span>Eventos</span>
      </HeroListHeaderStyled>
      {children}
    </HeroListStyled>
  )
}
