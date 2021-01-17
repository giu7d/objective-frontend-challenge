import React from 'react'

import { HeroItemStyled } from './styles'

export const HeroItem: React.FC = () => {
  return (
    <HeroItemStyled>
      <div className="character">
        <img src="http://via.placeholder.com/300" />
        <span>Bruce Banner</span>
      </div>
      <ul className="list">
        {['Marvel Marvel Marvel', 'Hulk', 'lorem Ipsum'].map(el => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <ul className="list">
        {['Marvel', 'Hulk', 'lorem Ipsum'].map(el => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </HeroItemStyled>
  )
}
