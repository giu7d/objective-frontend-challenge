export enum ActionTypes {
  SET_HERO_LIMIT = 'SET_HERO_LIMIT',
  SET_HERO_OFFSET = 'SET_HERO_OFFSET',
  SET_HERO_TOTAL = 'SET_HERO_TOTAL'
}

export const setHeroLimit = (limit: number) => {
  return {
    type: ActionTypes.SET_HERO_LIMIT,
    payload: limit
  }
}

export const setHeroOffset = (offset: number) => {
  return {
    type: ActionTypes.SET_HERO_OFFSET,
    payload: offset
  }
}
export const setHeroTotal = (total: number) => {
  return {
    type: ActionTypes.SET_HERO_TOTAL,
    payload: total
  }
}
