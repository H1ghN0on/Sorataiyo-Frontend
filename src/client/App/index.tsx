import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import {
  LoginPage,
  RegisterPage,
  CatalogsPage,
  ApplicationDetailsPage,
  ResultsDetailsPage,
  FormPage,
  AdminCatalogsPage,
  AdminFormPage,
} from "client/pages";

import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    //loader,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/catalogs/",
    element: <CatalogsPage />,
  },
  {
    path: "application/:id",
    element: <ApplicationDetailsPage />,
  },
  {
    path: "results/:id",
    element: <ResultsDetailsPage />,
  },
  {
    path: "/form",
    element: <FormPage />,
  },
  {
    path: "/admin/",
    children: [
      {
        path: "catalogs",
        element: <AdminCatalogsPage />,
      },
      {
        path: "review/:id",
        element: <AdminFormPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
