import React from "react";

import { Button } from "client/common";

import "./CardLayout.scss";

interface ICardLayoutProps {
  title: string;
  id: number;
  children: React.ReactNode;
  admin?: boolean;
}

const CardLayout: React.FC<ICardLayoutProps> = ({ admin, title, id, children }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-tools">
        <div className="card-info">{children}</div>
        <Button inverse className="card-check-details-btn" onClick={() => {}}>
          {admin ? "Check details" : "Review"}
        </Button>
      </div>
    </div>
  );
};

export default CardLayout;
