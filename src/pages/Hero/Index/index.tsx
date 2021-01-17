import React from 'react'

import { SearchInput } from '../../../components/fragments/SearchInput'
import { HeroList } from '../../../components/fragments/Hero/List'
import { HeroIndexStyled } from './styles'
import { HeroItem } from '../../../components/fragments/Hero/List/Item'
import { Pagination } from '../../../components/containers/Pagination'

export const HeroIndex: React.FC = () => {
  return (
    <HeroIndexStyled>
      <h1>Buscar de personagens</h1>
      <SearchInput
        name="search"
        label="Nome do personagem"
        placeholder="search"
      />
      <HeroList>
        <HeroItem />
        <HeroItem />
        <HeroItem />
      </HeroList>
      <Pagination pages={5} defaultPage={1} onClick={i => console.log(i)} />
    </HeroIndexStyled>
  )
}
