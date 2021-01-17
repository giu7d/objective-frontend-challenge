import React, { useEffect, useState } from 'react'
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight
} from 'react-icons/fi'

import { IconButton } from '../../fragments/Button/IconButton'
import { PaginationStyled, PageSelectionButton } from './styles'

interface IPaginationProps {
  defaultPage?: number
  pages: number
  onClick: (page: number) => void
}

export const Pagination: React.FC<IPaginationProps> = ({
  pages,
  defaultPage = 1,
  onClick = () => {}
}) => {
  const [selected, setSelected] = useState(defaultPage)

  useEffect(() => {
    onClick(selected)
  }, [selected, onClick])

  return (
    <PaginationStyled>
      <div>
        {selected > 2 && (
          <IconButton onClick={() => setSelected(1)}>
            <FiChevronsLeft />
          </IconButton>
        )}
        {selected > 1 && (
          <IconButton onClick={() => setSelected(selected - 1)}>
            <FiChevronLeft />
          </IconButton>
        )}
      </div>
      <div>
        {Array(pages)
          .fill('')
          .map((_el, i) => {
            const itemPage = i + 1

            return (
              <PageSelectionButton
                key={`btn-${itemPage}`}
                onClick={() => setSelected(itemPage)}
                selected={itemPage === selected}
              >
                {itemPage}
              </PageSelectionButton>
            )
          })}
      </div>
      <div>
        {selected < pages && (
          <IconButton onClick={() => setSelected(selected + 1)}>
            <FiChevronRight />
          </IconButton>
        )}
        {selected < pages - 1 && (
          <IconButton onClick={() => setSelected(pages)}>
            <FiChevronsRight />
          </IconButton>
        )}
      </div>
    </PaginationStyled>
  )
}
