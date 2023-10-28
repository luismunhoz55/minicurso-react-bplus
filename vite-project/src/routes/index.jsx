import { Navigate, useRoutes } from "react-router-dom";

function Routes() {
  return useRoutes([
    {
      path: "/",
      element: (
        <>
          <h1>Home</h1>
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <h1>Login</h1>
        </>
      ),
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
