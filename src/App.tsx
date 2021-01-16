import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Theme } from './themes/default'
import { GlobalStyle } from './styles/global'
import { AppBar } from './components/AppBar'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div>
        <AppBar />
        <main></main>
      </div>
    </ThemeProvider>
  )
}
