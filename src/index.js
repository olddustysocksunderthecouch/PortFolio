import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import { customTheme } from './theme/theme'
import 'focus-visible/dist/focus-visible'
import './index.css'

const newTheme = {
  ...customTheme,
  breakpoints: {
    sm: '360px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
  },
}

ReactDOM.render(
  <HelmetProvider>
    <ChakraProvider theme={newTheme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </HelmetProvider>,
  document.getElementById('root')
)
