export const randomValueInRange = (minValue: number, maxValue: number) =>
  Math.floor(minValue + Math.random() * (maxValue - minValue))

export const extractIDFromItemsResourceURI = (
  items: { resourceURI: string }[]
) =>
  items.map(({ resourceURI }) => {
    const [lastElement] = resourceURI.split('/').splice(-1)
    return lastElement
  })
