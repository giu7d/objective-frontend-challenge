import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { Theme } from './themes/default'
import { GlobalStore } from './stores/GlobalStore'
import { Routes } from './routes'

export const App: React.FC = () => {
  return (
    <GlobalStore>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </GlobalStore>
  )
}
