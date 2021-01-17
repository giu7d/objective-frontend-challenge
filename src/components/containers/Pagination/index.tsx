import React from 'react'
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight
} from 'react-icons/fi'
import { v4 as uuid } from 'uuid'

import { IconButton } from '../../fragments/Button/IconButton'
import { PaginationStyled, PageSelectionButton } from './styles'

interface IPaginationProps {
  selectedPage?: number
  pages: number
  onClick: (page: number) => void
}

const ITEMS_VISIBLE = 5
const HALF_ITEMS_VISIBLE = Math.floor(ITEMS_VISIBLE / 2)

export const Pagination: React.FC<IPaginationProps> = ({
  pages,
  selectedPage = 0,
  onClick = () => {}
}) => {
  const visiblePages = (array: any[]) => {
    // Array Begin
    if (selectedPage < HALF_ITEMS_VISIBLE) {
      return array.slice(0, ITEMS_VISIBLE)
    }

    // Array End
    if (selectedPage >= pages - 1) {
      return array.slice(pages - ITEMS_VISIBLE + 1, pages + 1)
    }

    // Array Mid
    const previousItemsVisible = selectedPage - HALF_ITEMS_VISIBLE
    const nextItemsVisible = selectedPage + HALF_ITEMS_VISIBLE + 1
    return array.slice(previousItemsVisible, nextItemsVisible)
  }

  return (
    <PaginationStyled>
      <div>
        {selectedPage > 1 && (
          <IconButton onClick={() => onClick(0)}>
            <FiChevronsLeft />
          </IconButton>
        )}
        {selectedPage > 0 && (
          <IconButton onClick={() => onClick(selectedPage - 1)}>
            <FiChevronLeft />
          </IconButton>
        )}
      </div>
      <div>
        {selectedPage > HALF_ITEMS_VISIBLE && <span>...</span>}
        {visiblePages(
          Array(pages + 1)
            .fill('')
            .map((_el, i) => (
              <PageSelectionButton
                key={uuid()}
                onClick={() => onClick(i)}
                selected={i === selectedPage}
              >
                {i + 1}
              </PageSelectionButton>
            ))
        )}
        {selectedPage < pages - HALF_ITEMS_VISIBLE && <span>...</span>}
      </div>
      <div>
        {selectedPage < pages && (
          <IconButton onClick={() => onClick(selectedPage + 1)}>
            <FiChevronRight />
          </IconButton>
        )}
        {selectedPage < pages - 1 && (
          <IconButton onClick={() => onClick(pages)}>
            <FiChevronsRight />
          </IconButton>
        )}
      </div>
    </PaginationStyled>
  )
}
