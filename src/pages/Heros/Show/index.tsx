import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { HerosShowAppearsOnSection, HerosShowDetailsSection } from './styles'
import { HeroDetails } from '../../../components/containers/Heros/Details'
import { HeroAppearsOn } from '../../../components/containers/Heros/AppearsOn'

export const HerosShow: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  })

  return (
    <>
      <HerosShowDetailsSection>
        <HeroDetails heroId={id} />
      </HerosShowDetailsSection>
      <HerosShowAppearsOnSection>
        <HeroAppearsOn heroId={id} />
      </HerosShowAppearsOnSection>
    </>
  )
}
