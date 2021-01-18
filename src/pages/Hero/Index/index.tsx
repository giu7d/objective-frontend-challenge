import React from 'react'

import { SearchInput } from '../../../components/fragments/SearchInput'
import { HeroList } from '../../../components/containers/Hero/List'
import { HeroIndexPaginationStyled, HeroIndexStyled } from './styles'
import { HeroListPagination } from '../../../components/containers/Hero/List/Pagination'

export const HeroIndex: React.FC = () => {
  return (
    <>
      <HeroIndexStyled>
        <h1>Buscar de personagens</h1>
        <SearchInput
          name="search"
          label="Nome do personagem"
          placeholder="search"
        />
        <HeroList />
      </HeroIndexStyled>
      <HeroIndexPaginationStyled>
        <HeroListPagination />
      </HeroIndexPaginationStyled>
    </>
  )
}
