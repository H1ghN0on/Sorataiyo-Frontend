import React from "react";

import { ProfileLayout, IconButton } from "client/common";

import { ReactComponent as BackIcon } from "client/shared/icons/arrow-left.svg";
import { ReactComponent as PenIcon } from "client/shared/icons/edit.svg";
import { ReactComponent as PrintIcon } from "client/shared/icons/print.svg";

import "./DetailsLayout.scss";

interface IDetailsProps {
  type: string;
  value: React.ReactNode;
}

interface IDetailsLayoutProps {
  name: string;
  details: IDetailsProps[];
  children: React.ReactNode;
  isEditable?: boolean;
  inspection?: string;
}

const DetailsLayout: React.FC<IDetailsLayoutProps> = ({
  name,
  isEditable,
  details,
  inspection,
  children,
}) => {
  const handleEditButtonClick = () => {};

  const handlePrintButtonClick = () => {};

  return (
    <ProfileLayout>
      <div className="details-header">
        <BackIcon className="details-back-btn" />
        <div className="details-header-name">{name}</div>
        <div className="details-header-tools">
          {isEditable && (
            <IconButton
              className="details-header-edit-btn"
              icon={PenIcon}
              onClick={handleEditButtonClick}
              inverse
            >
              Edit
            </IconButton>
          )}
          <IconButton
            className="details-header-print-btn"
            icon={PrintIcon}
            onClick={handlePrintButtonClick}
            inverse
          >
            Print
          </IconButton>
        </div>
      </div>
      <div className="details-content">
        {inspection && (
          <div className="details-inspection">
            <div className="details-inspection-label">Inspection review</div>
            <div className="details-inspection-content">{inspection}</div>
          </div>
        )}
        <div className="details-info">
          {details &&
            details.map((detail) => (
              <div className="details-info-item">
                <span className="details-info-item-bold">{detail.type}:</span> {detail.value}
              </div>
            ))}
        </div>
        {children}
      </div>
    </ProfileLayout>
  );
};

export default DetailsLayout;
