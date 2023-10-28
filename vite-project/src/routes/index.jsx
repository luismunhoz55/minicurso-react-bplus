import { Navigate, useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages";
import { Dashboard } from "../pages/Dashboard";

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
      element: <Dashboard />,
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
