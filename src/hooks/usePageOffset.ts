import { useLayoutEffect, useState } from 'react'

export const usePageOffset = () => {
  const [offsetX, setOffsetX] = useState(window.pageXOffset)
  const [offsetY, setOffsetY] = useState(window.pageYOffset)

  useLayoutEffect(() => {
    const scroll = () => {
      setOffsetY(window.pageYOffset)
      setOffsetX(window.pageXOffset)
    }

    window.addEventListener('scroll', scroll)

    return () => window.removeEventListener('scroll', scroll)
  }, [])

  return { offsetX, offsetY }
}
