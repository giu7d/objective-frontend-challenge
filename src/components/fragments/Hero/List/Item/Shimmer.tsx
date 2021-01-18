import React from 'react'
import { v4 as uuid } from 'uuid'
import { randomValueInRange } from '../../../../../utils'
import { Shimmer } from '../../../Shimmer'
import { HeroItemStyled } from './styles'

export const HeroItemShimmer: React.FC = () => {
  return (
    <HeroItemStyled>
      <div className="character">
        <Shimmer
          style={{
            width: 64,
            height: 64,
            borderRadius: 8
          }}
        />
        <span>
          <Shimmer
            style={{
              width: randomValueInRange(200, 280),
              height: 24,
              borderRadius: 8
            }}
          />
        </span>
      </div>
      <ul className="list">
        {Array(randomValueInRange(1, 3))
          .fill('')
          .map(() => (
            <li key={uuid()}>
              <Shimmer
                style={{
                  width: randomValueInRange(80, 200),
                  height: 18,
                  borderRadius: 8
                }}
              />
            </li>
          ))}
      </ul>
      <ul className="list">
        {Array(randomValueInRange(1, 3))
          .fill('')
          .map(() => (
            <li key={uuid()}>
              <Shimmer
                style={{
                  width: randomValueInRange(80, 200),
                  height: 18,
                  borderRadius: 8
                }}
              />
            </li>
          ))}
      </ul>
    </HeroItemStyled>
  )
}
