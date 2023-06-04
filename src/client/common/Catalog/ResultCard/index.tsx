import React from "react";

import { CardLayout } from "client/common";
import { useTranslation } from "react-i18next";

interface ICardProps {
  title: string;
  id: number;
  date: string;
  admin?: boolean;
}

const Card: React.FC<ICardProps> = ({ admin, title, id, date }) => {
  const { t } = useTranslation("catalogs");
  return (
    <CardLayout type="results" admin={admin} title={title} id={id}>
      <div className="card-info-item">
        {t("results-ns.id")}: #{id}
      </div>
      <div className="card-info-item">
        {t("results-ns.received")}: {date}
      </div>
    </CardLayout>
  );
};

export default Card;
