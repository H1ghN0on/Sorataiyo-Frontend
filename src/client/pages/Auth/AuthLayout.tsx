import React from "react";

import { ReactComponent as Logo } from "../../shared/icons/sorataiyo-logo.svg";

import "./AuthLayout.scss";

interface IAuthLayoutProps {
  children: React.ReactNode;
  title: string;
  isRegister: boolean;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({
  children,
  title,
  isRegister,
}) => {
  return (
    <div className="login-page">
      <div className="login-logo">
        <Logo className="logo" />
      </div>
      <div className="login-container">
        <h3 className="login-title">{title}</h3>
        {children}
        <div className="login-footer">
          <span>
            {isRegister
              ? "Already explored with Sorataiyo?"
              : "New to Sorataiyo?"}
          </span>

          <a className="login-footer-link" href="google.com">
            {isRegister ? "Sign in" : "Sign up"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
