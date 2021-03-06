import { initialState } from '../stores/GlobalStore'
import { ActionTypes } from './action'

export const reducer = (state: IGlobalStore, action: IAction) => {
  switch (action.type) {
    case ActionTypes.SET_HERO_LIMIT:
      return {
        ...state,
        heroLimit: action.payload
      }

    case ActionTypes.SET_HERO_OFFSET:
      return {
        ...state,
        heroOffset: action.payload
      }

    case ActionTypes.SET_HERO_TOTAL:
      return {
        ...state,
        heroTotal: action.payload
      }

    case ActionTypes.SET_HERO_NAME_SEARCH:
      return {
        ...state,
        heroNameSearch: action.payload
      }

    case ActionTypes.RESET:
      return {
        ...initialState
      }

    default:
      return state
  }
}
