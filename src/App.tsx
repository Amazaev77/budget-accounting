import React, { FC, useState } from "react"
import { Container, CssBaseline, makeStyles } from "@material-ui/core"
import Header from "./components/Header";
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import { BrowserRouter as Router } from "react-router-dom"
import ThemeSwitcher from "./components/ThemeSwitcher"
import themeCreator from "./utils/theme"
import Routes from "./pages"

const useStyles = makeStyles({
  container: {
    position: "relative",
  },
})

const App: FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const classes = useStyles()

  const theme = themeCreator(darkMode)

  const handleSwitchTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" className={classes.container}>
          <ThemeSwitcher
            darkMode={darkMode}
            handleSwitchTheme={handleSwitchTheme}
          />
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </Router>
  )
}

export default App
