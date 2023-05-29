import React from "react";

import { Navbar, Footer } from "client/common";

import "./BaseLayout.scss";

interface IBaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<IBaseLayoutProps> = ({ children }) => {
  return (
    <div className="page-container">
      <Navbar isAuthed={true} />
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
