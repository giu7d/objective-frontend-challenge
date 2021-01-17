import React from 'react'

import { AppBar } from '../containers/AppBar'

export const DefaultTemplate: React.FC = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
    </>
  )
}
