import React from 'react'
import { useTheme } from 'styled-components'
import { Badge } from '../../../Badge'
import { HeroAppearancesStyled } from './styles'

interface IHeroDetailAppearancesProps {
  comics: number
  series: number
  stories: number
  events: number
}

export const HeroDetailAppearances: React.FC<IHeroDetailAppearancesProps> = props => {
  const theme = useTheme()

  return (
    <HeroAppearancesStyled>
      {props.comics !== 0 && (
        <Badge backgroundColor={theme.colors.primary}>
          HQs
          <span>{props.comics}</span>
        </Badge>
      )}
      {props.series !== 0 && (
        <Badge backgroundColor={theme.colors.warn}>
          Séries
          <span>{props.series}</span>
        </Badge>
      )}
      {props.stories !== 0 && (
        <Badge backgroundColor={theme.colors.danger}>
          Estórias
          <span>{props.stories}</span>
        </Badge>
      )}
      {props.events !== 0 && (
        <Badge backgroundColor={theme.colors.info}>
          Eventos
          <span>{props.events}</span>
        </Badge>
      )}
    </HeroAppearancesStyled>
  )
}
