import React from "react";

import {
  LoginPage,
  IntroductionRegisterPage,
  EmailConfirmationRegisterPage,
  PasswordRegisterPage,
  FinishRegisterPage,
} from "client/pages";

import { Navbar } from "client/common";

import "./App.scss";

function App() {
  return (
    <>
      <Navbar isAuthed={true} />
    </>
  );
}

export default App;
