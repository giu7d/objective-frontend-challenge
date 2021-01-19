import React from 'react'
import { v4 as uuid } from 'uuid'

import { HeroAppearsOnItemShimmer } from '../../../fragments/Heros/AppearsOn/Item/Shimmer'
import { HeroAppearsOnItem } from '../../../fragments/Heros/AppearsOn/Item'
import { useHeroResources } from '../../../../hooks/useHeroResources'
import { randomValueInRange } from '../../../../utils'

interface IHeroAppearsOnResourcesProps {
  resourceType: string
  resourceTypeLabel: string
  heroId: string
}

export const HeroAppearsOnResources: React.FC<IHeroAppearsOnResourcesProps> = ({
  resourceType,
  resourceTypeLabel,
  heroId
}) => {
  const { resources, isError, isLoading } = useHeroResources(
    resourceType,
    heroId
  )

  if (isError) {
    return null
  }
  if (isLoading) {
    return (
      <>
        {Array(randomValueInRange(1, 5))
          .fill('')
          .map(() => (
            <HeroAppearsOnItemShimmer key={uuid()} />
          ))}
      </>
    )
  }

  return (
    <>
      {resources.map(resource => (
        <HeroAppearsOnItem
          key={resource.id}
          title={resource.title}
          coverURL={`${resource.thumbnail.path}/portrait_uncanny.${resource.thumbnail.extension}`}
          description={resource.description}
          type={resourceTypeLabel}
        />
      ))}
    </>
  )
}
