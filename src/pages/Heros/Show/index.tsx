import React from 'react'
import { useParams } from 'react-router-dom'
import { HeroDetails } from '../../../components/containers/Heros/Details'
import { HerosShowAppearsOnSection, HerosShowDetailsSection } from './styles'

export const HerosShow: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <HerosShowDetailsSection>
        <HeroDetails heroId={id} />
        {/* <HeroDetails
          avatarURL="https://via.placeholder.com/300"
          name="Abomination (Emil Blonsky)"
          description="Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin
            working for the KGB, the Abomination gained his powers after
            receiving a dose of gamma radiation similar to that which
            transformed Bruce Banner into the incredible Hulk."
          appearances={{
            comics: 20,
            series: 2,
            stories: 100,
            events: 5
          }}
        /> */}
      </HerosShowDetailsSection>
      <HerosShowAppearsOnSection>
        <h3>Apareceu em</h3>
      </HerosShowAppearsOnSection>
    </>
  )
}
