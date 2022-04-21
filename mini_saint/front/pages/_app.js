import "../styles/globals.css"
import { AnimatePresence } from "framer-motion/dist/framer-motion"
import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles"

const theme = createTheme({
  palette: {
    background: {
      default: "#D4B996FF",
    },
  },
  typography: {
    "fontFamily": `"Josefin Sans" ,"Roboto", "Arial", sans-serif`
  },
 
})

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <MuiThemeProvider theme={theme}>
        <Component {...pageProps} />
        <CssBaseline />
      </MuiThemeProvider>
    </AnimatePresence>
  )
}

export default MyApp
