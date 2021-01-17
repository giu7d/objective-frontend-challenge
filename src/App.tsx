import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Theme } from './themes/default'
import { GlobalStyle } from './styles/global'
import { AppBar } from './components/containers/AppBar'
import { HeroIndex } from './pages/Hero/Index'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppBar />
      <HeroIndex />
    </ThemeProvider>
  )
}
