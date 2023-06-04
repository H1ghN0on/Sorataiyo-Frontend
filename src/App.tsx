import React from "react";

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

import {
  Navbar,
  Footer,
  BaseLayout,
  Select,
  ProfileLayout,
  CheckboxList,
  Modal,
} from "client/common";

import "./App.scss";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    //loader,
  },
  {
    // path: "/register",
    // children: {
    //   path: "/introduction",
    //   element: <IntroductionRegisterPage />
    // }
    //loader,
  },
]);

function App() {
  return <RegisterPage />;
}

export default App;
