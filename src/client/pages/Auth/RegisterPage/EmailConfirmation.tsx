import React from "react";
import clsx from "clsx";

import AuthLayout from "../AuthLayout";
import { Button, IconInput, CodeInput } from "client/common";
import { ReactComponent as MailIcon } from "client/shared/icons/mail.svg";

import "./EmailConfirmation.scss";
import { RegisterContext } from "scripts/contexts/RegisterContext";

const CODE_LENGTH = 6;
const SECONDS_TO_WAIT = 10;
const re =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const EmailConfirmationRegisterPage = () => {
  const contextData = React.useContext(RegisterContext);

  const [email, setEmail] = React.useState("");
  const [code, setCode] = React.useState<number[]>([]);
  const [isCodeActive, setCodeActive] = React.useState(false);
  const [timer, setTimer] = React.useState(0);

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleCodeChange = (value: number, position: number) => {
    let updatedCode = [];

    for (let i = 0; i < CODE_LENGTH; i++) {
      if (position === i) {
        updatedCode[i] = value;
        continue;
      }
      updatedCode[i] = code[i];
    }

    setCode(updatedCode);
    return updatedCode;
  };

  const handleCodeSubmit = (actualValue: number[]) => {
    return +actualValue.join("") === 111111;
  };

  const handleCodeClear = () => {
    setCode([]);
  };

  const handleSendMessage = () => {
    setCodeActive(true);

    setTimer(SECONDS_TO_WAIT);
  };

  const handleCodeSuccess = () => {
    contextData.setContext({
      ...contextData,
      currentFragment: contextData.currentFragment + 1,
    });
  };

  return (
    <AuthLayout title="Connect your Email" isRegister>
      <form className="email-confirm-form">
        <div className="email-confirm-input-box">
          <IconInput
            className="email-confirm-email-input"
            icon={MailIcon}
            name="email"
            label="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <Button
            className="email-confirm-send-btn"
            disabled={!email.match(re) || timer > 0}
            onClick={handleSendMessage}
            inverse
          >
            {timer <= 0 ? "Send confirmation" : timer}
          </Button>
        </div>
        <CodeInput
          className={clsx("email-confirm-code-input", {
            hidden: !isCodeActive,
          })}
          values={code}
          length={CODE_LENGTH}
          label="Confirmation Code"
          onChange={handleCodeChange}
          onSubmit={handleCodeSubmit}
          onClear={handleCodeClear}
          onSuccess={handleCodeSuccess}
        />
      </form>
    </AuthLayout>
  );
};

export default EmailConfirmationRegisterPage;
