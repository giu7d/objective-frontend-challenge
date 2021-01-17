import React from 'react'
import { ThemeProvider } from 'styled-components'

import { DefaultTemplate } from './components/templates/DefaultTemplate'
import { GlobalStyle } from './styles/global'
import { HeroIndex } from './pages/Hero/Index'
import { Theme } from './themes/default'
import { GlobalStore } from './stores/GlobalStore'

export const App: React.FC = () => {
  return (
    <GlobalStore>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <DefaultTemplate>
          <HeroIndex />
        </DefaultTemplate>
      </ThemeProvider>
    </GlobalStore>
  )
}
