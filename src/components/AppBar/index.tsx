import React from 'react'

import logo from '../../assets/logo.svg'
import logoSmall from '../../assets/logo-abrev.svg'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Avatar } from '../Avatar'
import { AppBarStyled } from './styles'

export const AppBar: React.FC = () => {
  const { width } = useWindowSize()

  return (
    <AppBarStyled>
      <img className="logo" src={width > 600 ? logo : logoSmall} />
      <div className="information">
        <span>
          <b>Giuseppe Setem</b> Teste de Front-End
        </span>
        <Avatar>GS</Avatar>
      </div>
    </AppBarStyled>
  )
}
