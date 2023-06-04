import React from "react";
import clsx from "clsx";

import { IconButton } from "client/common";

import { ReactComponent as PrintIcon } from "client/shared/icons/print.svg";
import { ReactComponent as FlipIcon } from "client/shared/icons/arrow-down.svg";

import "./ResultsDetailsListItem.scss";

export interface IResultDetails {
  date: string;
  id: number;
  data: {
    type: string;
    value: any;
  }[];
}

interface IResultDetailsListItemProps {
  details: IResultDetails;
}

const ResultsDetailsListItem: React.FC<IResultDetailsListItemProps> = ({ details }) => {
  const [isActive, setActive] = React.useState(false);

  const handleItemClick = () => {
    setActive(!isActive);
  };

  const handlePrintClick = () => {};

  return (
    <>
      <div className="results-details-list-item" onClick={handleItemClick}>
        <div className="results-details-list-item-id">{details.id}</div>
        <div className="results-details-list-item-brief">
          <div className="results-details-list-item-brief-item date">{details.date}</div>
        </div>
        <div className="results-details-list-item-tools">
          <IconButton
            className="results-details-list-item-print-btn"
            inverse
            icon={PrintIcon}
            onClick={handlePrintClick}
          >
            Print
          </IconButton>
          <FlipIcon
            className={clsx("results-details-list-item-btn", {
              rotated: isActive,
            })}
          />
        </div>
      </div>
      <div
        className={clsx("results-details-list-item-advanced", {
          hidden: !isActive,
        })}
      >
        {details.data &&
          details.data.map((data, index) => (
            <React.Fragment key={index}>
              <div className="results-details-list-item-advanced-item">
                <span className="results-details-list-item-advanced-type-bold">{data.type}: </span>
                {data.value}
              </div>
            </React.Fragment>
          ))}
      </div>
    </>
  );
};

export default ResultsDetailsListItem;
