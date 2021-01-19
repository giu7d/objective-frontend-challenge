import React from 'react'
import { useHeroResources } from '../../../../hooks/useHeroResources'
import { HeroAppearsOnItem } from '../../../fragments/Heros/AppearsOn/Item'

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

  if (isError || isLoading) {
    return null
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
