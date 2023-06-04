import React from "react";

import { Button } from "client/common";

import "./CardLayout.scss";
import { useTranslation } from "react-i18next";

interface ICardLayoutProps {
  title: string;
  id: number;
  children: React.ReactNode;
  type: "results" | "application";
  admin?: boolean;
}

const CardLayout: React.FC<ICardLayoutProps> = ({ admin, title, id, children, type }) => {
  const { t } = useTranslation("catalogs");
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
          {admin ? t("review") : t("check-details")}
        </Button>
      </div>
    </div>
  );
};

export default CardLayout;
