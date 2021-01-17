import React from 'react'

import { useWindowSize } from '../../../hooks/useWindowSize'
import { Avatar } from '../../fragments/Avatar'
import { AppBarStyled } from './styles'

import logo from '../../../assets/logo.svg'
import logoSmall from '../../../assets/logo-abrev.svg'

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
