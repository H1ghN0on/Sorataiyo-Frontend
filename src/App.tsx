import React from "react";

import {
  LoginPage,
  IntroductionRegisterPage,
  EmailConfirmationRegisterPage,
  PasswordRegisterPage,
  FinishRegisterPage,
} from "client/pages";

import { Navbar, Footer } from "client/common";

import "./App.scss";

function App() {
  return (
    <div className="page-container">
      <Navbar isAuthed={true} />
      <Footer />
    </div>
  );
}

export default App;
