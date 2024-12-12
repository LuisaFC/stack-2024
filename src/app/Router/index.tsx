import { Route, Routes } from "react-router-dom";
import { CreateUser } from "@views/pages/CreateUser";
import { Home } from "@views/pages/Home";
import { routes } from "./routes";

export function Router() {


  // Forma 1 - Declarativa
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={routes.createUser} element={<CreateUser />} />
    </Routes>
  );

  // Forma 2 - Imperativa
  /* const routes = useRoutes([
      {path: '/', element: <Home />},
      {path: '/create-user', element: <CreateUser />},
    ]) */
  
}
