import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../shared/icons/sorataiyo-logo.svg";

import "./AuthLayout.scss";

interface IAuthLayoutProps {
  children: React.ReactNode;
  title: string;
  isRegister: boolean;
  isFinish?: boolean;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children, title, isRegister, isFinish }) => {
  return (
    <div className="auth-page">
      <div className="auth-logo">
        <Logo className="logo" />
      </div>
      <div className="auth-container">
        <h3 className="auth-title">{title}</h3>
        {children}
        {!isFinish && (
          <div className="auth-footer">
            <span>{isRegister ? "Already explored with Sorataiyo?" : "New to Sorataiyo?"}</span>

            {isRegister ? (
              <Link className="auth-footer-link" to="/login">
                Sign in
              </Link>
            ) : (
              <Link className="auth-footer-link" to="/register">
                Sign up
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
