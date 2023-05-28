import React from "react";

import AuthLayout from "../AuthLayout";
import { Button, Input } from "client/common";

import "./Introduction.scss";

type LoginField = "firstName" | "lastName";

const IntroductionRegisterPage = () => {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
  });

  const handleFormChange = (key: LoginField, value: string) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleSubmit = () => {};

  return (
    <AuthLayout title="Who are you?" isRegister>
      <form className="introduction-form">
        <div className="introduction-inputs">
          <Input
            className="introduction-firstname-input"
            name="firstname"
            label="First Name"
            value={form.firstName}
            onChange={(value) => handleFormChange("firstName", value)}
          />
          <Input
            className="introduction-lastname-input"
            name="lastname"
            label="Last Name"
            value={form.lastName}
            onChange={(value) => handleFormChange("lastName", value)}
          />
        </div>
        <Button
          className="introduction-submit-btn"
          disabled={!form.lastName || !form.firstName}
          onClick={handleSubmit}
          inverse
        >
          Next
        </Button>
      </form>
    </AuthLayout>
  );
};

export default IntroductionRegisterPage;
