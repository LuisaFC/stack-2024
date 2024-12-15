import { ThemeProvider } from "@app/contexts/ThemeContext";
import { Router } from "@app/Router";
import { routes } from "@app/Router/routes";
import { ThemeContext } from "@views/components/ThemeSwitcher";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <BrowserRouter>
        <header className="border-b p-6 mb-10 space-x-6">
          <Link to="/">Home</Link>
          <Link to={routes.createUser}>Create User</Link>
        </header>
        <ThemeContext />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
