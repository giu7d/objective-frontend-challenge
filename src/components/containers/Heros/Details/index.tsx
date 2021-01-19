import React from 'react'
import { useHero } from '../../../../hooks/useHero'
import { HeroDetailsProfile } from '../../../fragments/Heros/Details/Profile'
import { HeroDetailAppearances } from '../../../fragments/Heros/Details/Appearances'
import { HeroDetailsStyled } from './styles'
import { HeroDetailsProfileShimmer } from '../../../fragments/Heros/Details/Profile/Shimmer'
import { Warning } from '../../../fragments/Warning'
import { FiAlertTriangle } from 'react-icons/fi'

interface IHeroDetailsProps {
  heroId: string
}

export const HeroDetails: React.FC<IHeroDetailsProps> = ({ heroId }) => {
  const { hero, isError, isLoading } = useHero(heroId)

  if (isError) {
    return (
      <HeroDetailsStyled>
        <Warning>
          <FiAlertTriangle className="icon" />
          <h3 className="title">Atenção</h3>
          <p className="content">
            Não foi possível obter informações sobre o herói ID {heroId}, devido
            ao erro:
            <br />
            <i>{isError.message}</i>
          </p>
        </Warning>
      </HeroDetailsStyled>
    )
  }

  if (isLoading) {
    return (
      <HeroDetailsStyled>
        <HeroDetailsProfileShimmer />
      </HeroDetailsStyled>
    )
  }

  return (
    <HeroDetailsStyled>
      <HeroDetailsProfile
        avatarURL={`${hero[0].thumbnail.path}/standard_xlarge.${hero[0].thumbnail.extension}`}
        name={hero[0].name}
        description={hero[0].description}
      />
      <HeroDetailAppearances
        stories={hero[0].stories.available}
        comics={hero[0].comics.available}
        events={hero[0].events.available}
        series={hero[0].series.available}
      />
    </HeroDetailsStyled>
  )
}
