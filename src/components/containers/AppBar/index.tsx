import React from 'react'

import { usePageOffset } from '../../../hooks/usePageOffset'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Avatar } from '../../fragments/Avatar'
import { AppBarStyled } from './styles'

import logo from '../../../assets/logo.svg'
import logoSmall from '../../../assets/logo-abrev.svg'

const TOP_DISTANCE = 20
const WIDTH_SIZE = 600

export const AppBar: React.FC = () => {
  const { width } = useWindowSize()
  const { offsetY } = usePageOffset()

  return (
    <AppBarStyled hasShadow={offsetY > TOP_DISTANCE}>
      <img className="logo" src={width > WIDTH_SIZE ? logo : logoSmall} />
      <div className="information">
        <span>
          <b>Giuseppe Setem</b> Teste de Front-End
        </span>
        <Avatar>GS</Avatar>
      </div>
    </AppBarStyled>
  )
}
