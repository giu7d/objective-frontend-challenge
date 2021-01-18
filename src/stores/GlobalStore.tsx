import React, { createContext, useReducer } from 'react'
import { reducer } from '../reducers/reducer'

export const initialState: IGlobalStore = {
  heroLimit: 10,
  heroOffset: 0,
  heroTotal: 0,
  heroNameSearch: ''
}

export const GlobalContext = createContext<IContext<IGlobalStore>>({
  state: initialState,
  dispatch: () => {}
})

export const GlobalStore: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
