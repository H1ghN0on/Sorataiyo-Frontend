import React from "react";

import { Button } from "client/common";

import "./CardLayout.scss";

interface ICardLayoutProps {
  title: string;
  id: number;
  children: React.ReactNode;
}

const CardLayout: React.FC<ICardLayoutProps> = ({ title, id, children }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-tools">
        <div className="card-info">{children}</div>
        <Button inverse className="card-check-details-btn" onClick={() => {}}>
          Check details
        </Button>
      </div>
    </div>
  );
};

export default CardLayout;
