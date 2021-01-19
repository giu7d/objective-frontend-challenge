import styled from 'styled-components'

import { Shimmer } from '../../../Shimmer'

export const HeroAppearsOnItemShimmer = styled(Shimmer)`
  width: 100%;
  height: 350px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 600px) {
    width: 300px;
  }
`
