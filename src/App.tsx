import React from 'react'
import { ThemeProvider } from 'styled-components'

import { DefaultTemplate } from './components/templates/DefaultTemplate'
import { GlobalStyle } from './styles/global'
import { HeroIndex } from './pages/Hero/Index'
import { Theme } from './themes/default'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <DefaultTemplate>
        <HeroIndex />
      </DefaultTemplate>
    </ThemeProvider>
  )
}
