import React from 'react'
import { useHeros } from '../../../../hooks/useHeros'
import { Pagination } from '../../../fragments/Pagination'

export const HerosListPagination = () => {
  const { limit, offset, total, setOffset } = useHeros()

  const goToPage = (page: number) => {
    setOffset(page * limit)
  }

  return (
    <Pagination
      selectedPage={Math.floor(offset / limit)}
      pages={Math.floor(total / limit)}
      onClick={goToPage}
    />
  )
}
