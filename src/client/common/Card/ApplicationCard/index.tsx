import React from "react";
import clsx from "clsx";

import { CardLayout } from "client/common";

import { ReactComponent as PendingIcon } from "client/shared/icons/time.svg";
import { ReactComponent as ConfirmIcon } from "client/shared/icons/confirm.svg";
import { ReactComponent as AcceptedIcon } from "client/shared/icons/confirm.svg";
import { ReactComponent as RejectedIcon } from "client/shared/icons/cross.svg";

type StatusType = "pending" | "completed" | "accepted" | "rejected";

interface IStatusProps {
  status: StatusType;
  className?: string;
}
interface ICardProps {
  title: string;
  id: number;
  status: StatusType;
  date: string;
  admin?: boolean;
}

export const Status: React.FC<IStatusProps> = ({ status, className }) => {
  switch (status) {
    case "pending": {
      return (
        <>
          Pending <PendingIcon className={clsx(className, "card-status-icon")} />
        </>
      );
    }

    case "completed": {
      return (
        <>
          Completed <ConfirmIcon className={clsx(className, "card-status-icon")} />
        </>
      );
    }

    case "accepted": {
      return (
        <>
          Accepted <AcceptedIcon className={clsx(className, "card-status-icon")} />
        </>
      );
    }

    case "rejected": {
      return (
        <>
          Rejected <RejectedIcon className={clsx(className, "card-status-icon")} />
        </>
      );
    }
  }
};

const Card: React.FC<ICardProps> = ({ admin, title, id, status, date }) => {
  return (
    <CardLayout admin={admin} title={title} id={id}>
      <div className="card-info-item">Record application: #{id}</div>
      <div className="card-info-item card-info-status">
        Status: <Status status={status} />
      </div>
      <div className="card-info-item">Created: {date}</div>
    </CardLayout>
  );
};

export default Card;
