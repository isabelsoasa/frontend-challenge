// @flow
import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import App from "./containers/App"

import theme from "./styles/theme"
import GlobalStyle from "./styles/styles"

// Error handling on root Element
const root = document.getElementById("root")
if (root == null) {
  throw new Error("No root element present on the HTML")
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <App />
      <GlobalStyle />
    </React.Fragment>
  </ThemeProvider>,
  root
)
