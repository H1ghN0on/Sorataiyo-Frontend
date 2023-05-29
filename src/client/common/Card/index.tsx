import React from "react";

import "./Card.scss";
import { Button } from "client/common";

import { ReactComponent as PendingIcon } from "client/shared/icons/time.svg";
import { ReactComponent as ConfirmIcon } from "client/shared/icons/confirm.svg";
import { ReactComponent as AcceptedIcon } from "client/shared/icons/confirm.svg";
import { ReactComponent as RejectedIcon } from "client/shared/icons/cross.svg";

interface ICardProps {
  title: string;
  id: number;
  status: "pending" | "completed" | "accepted" | "rejected";
  date: string;
}

const Card: React.FC<ICardProps> = ({ title, id, status, date }) => {
  const Status = () => {
    switch (status) {
      case "pending": {
        return (
          <>
            Pending <PendingIcon className="card-status-icon" />
          </>
        );
      }

      case "completed": {
        return (
          <>
            Completed <ConfirmIcon className="card-status-icon" />
          </>
        );
      }

      case "accepted": {
        return (
          <>
            Accepted <AcceptedIcon className="card-status-icon" />
          </>
        );
      }

      case "rejected": {
        return (
          <>
            Rejected <RejectedIcon className="card-status-icon" />
          </>
        );
      }
    }
  };

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-tools">
        <div className="card-info">
          <div className="card-info-item">Record application: #{id}</div>
          <div className="card-info-item card-info-status">
            Status: <Status />
          </div>
          <div className="card-info-item">Created: {date}</div>
        </div>
        <Button inverse className="card-check-details-btn" onClick={() => {}}>
          Check details
        </Button>
      </div>
    </div>
  );
};

export default Card;
