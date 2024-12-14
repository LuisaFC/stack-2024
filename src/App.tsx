import { ThemeProvider } from "@app/contexts/ThemeContext"
import { Router } from "@app/Router"
import { routes } from "@app/Router/routes"
import { ThemeContext } from "@views/components/ThemeSwitcher"
import { BrowserRouter, Link } from "react-router-dom"

function App() {

  return (
   <ThemeProvider  defaultTheme="dark" storageKey="theme">
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <br />
        <Link to={routes.createUser}>Create User</Link>
        <ThemeContext />
        <Router />
      </BrowserRouter>
   </ThemeProvider>
  )
}

export default App
