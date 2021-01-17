import React, { createContext, Dispatch, useReducer } from 'react'
import { IAction } from '../reducers/action'
import { reducer } from '../reducers/reducer'

export interface IGlobalStore {
  heroLimit: number
  heroOffset: number
  heroTotal: number
}

export const initialState: IGlobalStore = {
  heroLimit: 10,
  heroOffset: 0,
  heroTotal: 0
}

interface IGlobalContext {
  state: IGlobalStore
  dispatch: Dispatch<IAction>
}

export const GlobalContext = createContext<IGlobalContext>({
  state: initialState,
  dispatch: () => undefined
})

export const GlobalStore: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
