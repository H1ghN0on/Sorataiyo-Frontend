import React from "react";

import {
  LoginPage,
  IntroductionRegisterPage,
  EmailConfirmationRegisterPage,
  PasswordRegisterPage,
  FinishRegisterPage,
  CatalogsPage,
} from "client/pages";

import { Navbar, Footer, BaseLayout, Select, ProfileLayout, Card } from "client/common";

import "./App.scss";

function App() {
  return <CatalogsPage />;
}

export default App;
