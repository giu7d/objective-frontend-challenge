import React, { useState } from 'react'

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

  return (
    <div>
      {Array(pages)
        .fill('')
        .map((_el, i) => (
          <button key={'btn' + i}>{i + 1}</button>
        ))}
    </div>
  )
}
