import React from "react";

import { Button } from "client/common";

import "./CardLayout.scss";

interface ICardLayoutProps {
  title: string;
  id: number;
  children: React.ReactNode;
  type: "results" | "application";
  admin?: boolean;
}

const CardLayout: React.FC<ICardLayoutProps> = ({ admin, title, id, children, type }) => {
  const getLink = () => {
    if (admin) return `/admin/review/${id}`;

    switch (type) {
      case "results":
        return `/results/${id}`;
      case "application":
        return `/application/${id}`;
    }
  };

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-tools">
        <div className="card-info">{children}</div>
        <Button link={getLink()} inverse className="card-check-details-btn" onClick={() => {}}>
          {admin ? "Review" : "Check details"}
        </Button>
      </div>
    </div>
  );
};

export default CardLayout;
