import React from "react";

import {
  LoginPage,
  IntroductionRegisterPage,
  EmailConfirmationRegisterPage,
  PasswordRegisterPage,
  FinishRegisterPage,
} from "client/pages";

import { Navbar, Footer, BaseLayout, Select, ProfileLayout } from "client/common";

import "./App.scss";

function App() {
  return (
    <ProfileLayout>
      <div>Hello, world!</div>
    </ProfileLayout>
  );
}

export default App;
