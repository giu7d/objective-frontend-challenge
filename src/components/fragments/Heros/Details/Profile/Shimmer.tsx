import React from 'react'
import { v4 as uuid } from 'uuid'

import { randomValueInRange } from '../../../../../utils'
import { HeroDetailsProfileStyled } from './styles'
import { Shimmer } from '../../../Shimmer'

export const HeroDetailsProfileShimmer = () => {
  return (
    <HeroDetailsProfileStyled>
      <Shimmer
        style={{
          width: 200,
          height: 200,
          borderRadius: 200
        }}
      />
      <Shimmer
        style={{
          width: randomValueInRange(300, 400),
          height: 24,
          borderRadius: 200
        }}
      />
      {Array(3)
        .fill('')
        .map(() => (
          <Shimmer
            key={uuid()}
            style={{
              width: randomValueInRange(150, 400),
              height: 18,
              borderRadius: 200
            }}
          />
        ))}
    </HeroDetailsProfileStyled>
  )
}
