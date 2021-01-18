import React from 'react'

import { HerosListPagination } from '../../../components/containers/Heros/List/Pagination'
import { HerosListSearch } from '../../../components/containers/Heros/List/Search'
import { HerosIndexPaginationStyled, HerosIndexStyled } from './styles'
import { HerosList } from '../../../components/containers/Heros/List'

export const HerosIndex: React.FC = () => {
  return (
    <>
      <HerosIndexStyled>
        <h1>Buscar de personagens</h1>
        <HerosListSearch />
        <HerosList />
      </HerosIndexStyled>
      <HerosIndexPaginationStyled>
        <HerosListPagination />
      </HerosIndexPaginationStyled>
    </>
  )
}
