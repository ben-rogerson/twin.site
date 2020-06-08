import React from 'react'
import Theme from './../components/Theme'
import 'tailwindcss/dist/base.min.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Inter;
  }
`

const App = ({ Component, pageProps }) => (
  <Theme>
    <GlobalStyle />
    <Component {...pageProps} />
  </Theme>
)

export default App
