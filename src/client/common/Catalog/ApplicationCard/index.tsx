import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { CardLayout } from "client/common";

import { ReactComponent as PendingIcon } from "client/shared/icons/time.svg";
import { ReactComponent as ConfirmIcon } from "client/shared/icons/confirm.svg";
import { ReactComponent as AcceptedIcon } from "client/shared/icons/confirm.svg";
import { ReactComponent as RejectedIcon } from "client/shared/icons/cross.svg";

interface IStatusProps {
  status: "pending" | "completed" | "accepted" | "rejected";
  className?: string;
}
interface ICardProps {
  title: string;
  id: number;
  status: "pending" | "completed" | "accepted" | "rejected";
  date: string;
  admin?: boolean;
}

export const Status: React.FC<IStatusProps> = ({ status, className }) => {
  const { t } = useTranslation("catalogs");
  switch (status) {
    case "pending": {
      return (
        <>
          {t("applications-ns.pending")}{" "}
          <PendingIcon className={clsx(className, "card-status-icon")} />
        </>
      );
    }

    case "completed": {
      return (
        <>
          {t("applications-ns.completed")}{" "}
          <ConfirmIcon className={clsx(className, "card-status-icon")} />
        </>
      );
    }

    case "accepted": {
      return (
        <>
          {t("applications-ns.accepted")}{" "}
          <AcceptedIcon className={clsx(className, "card-status-icon")} />
        </>
      );
    }

    case "rejected": {
      return (
        <>
          {t("applications-ns.rejected")}{" "}
          <RejectedIcon className={clsx(className, "card-status-icon")} />
        </>
      );
    }
  }
};

const Card: React.FC<ICardProps> = ({ admin, title, id, status, date }) => {
  const { t } = useTranslation("catalogs");
  return (
    <CardLayout type="application" admin={admin} title={title} id={id}>
      <div className="card-info-item">
        {t("applications-ns.id")}: #{id}
      </div>
      <div className="card-info-item card-info-status">
        {t("applications-ns.status")}: <Status status={status} />
      </div>
      <div className="card-info-item">
        {t("applications-ns.created")}: {date}
      </div>
    </CardLayout>
  );
};

export default Card;
