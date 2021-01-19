import React from 'react'
import { useHero } from '../../../../hooks/useHero'
import { Warning } from '../../../fragments/Warning'
import { HeroAppearsOnResources } from './Resources'
import { HeroAppearsOnStyled } from './styles'

interface IHeroAppearsOnProps {
  heroId: string
}

export const HeroAppearsOn: React.FC<IHeroAppearsOnProps> = ({ heroId }) => {
  const { hero, isLoading, isError } = useHero(heroId)

  if (isLoading || isError) {
    return null
  }

  if (
    hero[0].comics.available +
      hero[0].series.available +
      hero[0].events.available ===
    0
  ) {
    return (
      <HeroAppearsOnStyled>
        <h3 className="appears-title">Apareceu Em</h3>
        <div className="appears-items">
          <Warning>
            <h3 className="warning-title">Ops...</h3>
            <p className="warning-content">
              Parece que este herói não possui nenhuma HQ, série ou evento
              associado a ele.
            </p>
          </Warning>
        </div>
      </HeroAppearsOnStyled>
    )
  }

  return (
    <HeroAppearsOnStyled>
      <h3 className="appears-title">Apareceu Em</h3>
      <div className="appears-items">
        <HeroAppearsOnResources
          heroId={heroId}
          resourceType="comics"
          resourceTypeLabel="HQ"
        />
        <HeroAppearsOnResources
          heroId={heroId}
          resourceType="series"
          resourceTypeLabel="Série"
        />
        <HeroAppearsOnResources
          heroId={heroId}
          resourceType="events"
          resourceTypeLabel="Evento"
        />
      </div>
    </HeroAppearsOnStyled>
  )
}
