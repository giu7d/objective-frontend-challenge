import React from 'react'
import { useParams } from 'react-router-dom'

import { HeroAppearsOnResources } from '../../../components/containers/Heros/AppearsOn/Resources'
import { HerosShowAppearsOnSection, HerosShowDetailsSection } from './styles'
import { HeroDetails } from '../../../components/containers/Heros/Details'

export const HerosShow: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <HerosShowDetailsSection>
        <HeroDetails heroId={id} />
      </HerosShowDetailsSection>
      <HerosShowAppearsOnSection>
        <div className="appears-container">
          <h3 className="appears-title">Apareceu Em</h3>
          <div className="appears-items">
            <HeroAppearsOnResources
              heroId={id}
              resourceType="comics"
              resourceTypeLabel="HQ"
            />
            <HeroAppearsOnResources
              heroId={id}
              resourceType="series"
              resourceTypeLabel="Série"
            />
            <HeroAppearsOnResources
              heroId={id}
              resourceType="events"
              resourceTypeLabel="Evento"
            />
          </div>
        </div>
      </HerosShowAppearsOnSection>
    </>
  )
}
