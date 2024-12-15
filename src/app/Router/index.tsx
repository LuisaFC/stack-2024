import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//import { CreateUser } from "@views/pages/CreateUser";
//import { Home } from "@views/pages/Home";
import { routes } from "./routes";

//Lazy
const Home = lazy(() => import("@views/pages/Home"));
const CreateUser = lazy(() => import("@views/pages/CreateUser"));

export function Router() {
  // Forma 1 - Declarativa
  return (
    <Suspense fallback={<div className="h-10 w-10 rounded-full border-4 border-r-white animate-spin"/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routes.createUser} element={<CreateUser />} />
      </Routes>
    </Suspense>
  );

  // Forma 2 - Imperativa
  /* const routes = useRoutes([
      {path: '/', element: <Home />},
      {path: '/create-user', element: <CreateUser />},
    ]) */
}
