import { Navigate, useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages";

function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: (
        <>
          <h1>Dashboard</h1>
        </>
      ),
    },
    {
      path: "/404",
      element: (
        <>
          <h1>404 not found</h1>
        </>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/404" />,
    },
  ]);
}

export default Routes;
