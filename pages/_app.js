import '../styles/globals.css'
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme.js"
import { Page } from "../context/PageContext";

function MyApp({ Component, pageProps }) {
  return (
  <Page>
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  </Page>
  )
}

export default MyApp
