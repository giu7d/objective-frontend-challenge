import React from 'react'

import { SearchInput } from '../../../components/fragments/SearchInput'
import { HerosList } from '../../../components/containers/Heros/List'
import { HerosIndexPaginationStyled, HerosIndexStyled } from './styles'
import { HerosListPagination } from '../../../components/containers/Heros/List/Pagination'

export const HerosIndex: React.FC = () => {
  return (
    <>
      <HerosIndexStyled>
        <h1>Buscar de personagens</h1>
        <SearchInput
          name="search"
          label="Nome do personagem"
          placeholder="search"
        />
        <HerosList />
      </HerosIndexStyled>
      <HerosIndexPaginationStyled>
        <HerosListPagination />
      </HerosIndexPaginationStyled>
    </>
  )
}
