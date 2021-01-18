import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { HerosIndex } from './pages/Heros/Index'
import { HerosShow } from './pages/Heros/Show'

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/heros" component={HerosIndex} exact />
        <Route path="/heros/:id" component={HerosShow} />
        <Redirect from="/" to="/heros" />
      </Switch>
    </BrowserRouter>
  )
}
