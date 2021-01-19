import React from 'react'
import { HeroDetailsProfileStyled } from './styles'

interface IHeroDetailsProfileProps {
  avatarURL: string
  name: string
  description?: string
}

export const HeroDetailsProfile: React.FC<IHeroDetailsProfileProps> = ({
  avatarURL,
  name,
  description
}) => {
  return (
    <HeroDetailsProfileStyled>
      <img
        src={avatarURL}
        alt={`Imagem do ${name}`}
        className="profile-picture"
      />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-description">
        {description || <i>Sem descrição.</i>}
      </p>
    </HeroDetailsProfileStyled>
  )
}
