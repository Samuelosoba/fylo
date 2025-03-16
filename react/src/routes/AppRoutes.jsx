import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Auth from "../layouts/Auth";
import Register from "../pages/Register";
import Login from "../pages/Login";
import React from "react";

export default function AppRoutes() {
  const routes = [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "auth",
      element: <Auth />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
