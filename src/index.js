import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { customTheme } from './theme/theme'
import 'focus-visible/dist/focus-visible'


const newTheme = {
  ...customTheme,
  breakpoints: {
    sm: '360px', md: '768px', lg: '1024px', xl: '1440px'
  },
}

ReactDOM.render(
  <ChakraProvider theme={newTheme}>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
