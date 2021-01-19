import React from 'react'
import { useHero } from '../../../../hooks/useHero'
import { HeroDetailsProfile } from '../../../fragments/Heros/Details/Profile'
import { HeroDetailAppearances } from '../../../fragments/Heros/Details/Appearances'
import { HeroDetailsStyled } from './styles'
import { HeroDetailsProfileShimmer } from '../../../fragments/Heros/Details/Profile/Shimmer'

interface IHeroDetailsProps {
  heroId: string
}

export const HeroDetails: React.FC<IHeroDetailsProps> = ({ heroId }) => {
  const { hero, isError, isLoading } = useHero(heroId)

  if (isError) {
    return <div>error</div>
  }

  // eslint-disable-next-line no-constant-condition
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
