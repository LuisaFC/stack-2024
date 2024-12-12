import { Router } from "@app/Router"
import { routes } from "@app/Router/routes"
import { BrowserRouter, Link } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <br />
      <Link to={routes.createUser}>Create User</Link>
      <Router />
    </BrowserRouter>
  )
}

export default App
