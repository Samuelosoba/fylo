import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import { useAuth } from "../store";
import Spinner from "../componets/Spinner";
import { PrivateRoutes, PublicRoutes } from "./ProtectedRoutes";

export default function AppRoutes() {
  const { isCheckingAuth, user } = useAuth();
  console.log(user);
  if (isCheckingAuth) {
    return <Spinner />;
  }

  const routes = [
    {
      element: (
        <PublicRoutes isAuthenticated={user.isAuthenticated}>
          <AuthLayout />
        </PublicRoutes>
      ),

      children: [
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: (
        <PrivateRoutes isAuthenticated={user.isAuthenticated}>
          <RootLayout />
        </PrivateRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
