import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ProfileLayout, IconButton } from "client/common";

import { ReactComponent as BackIcon } from "client/shared/icons/arrow-left.svg";
import { ReactComponent as PenIcon } from "client/shared/icons/edit.svg";
import { ReactComponent as PrintIcon } from "client/shared/icons/print.svg";
import { ReactComponent as TrashIcon } from "client/shared/icons/trash.svg";

import "./DetailsLayout.scss";
import { useTranslation } from "react-i18next";

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
  isDeletable?: boolean;
  onDelete: () => void;
}

const DetailsLayout: React.FC<IDetailsLayoutProps> = ({
  name,
  isEditable,
  details,
  inspection,
  children,
  onDelete,
  isDeletable,
}) => {
  const params = useParams();
  const { t } = useTranslation("details");

  const handlePrintButtonClick = () => {};

  const handleBackButtonClick = () => {
    navigate(-1);
  };
  const handleDeleteButtonClick = () => {
    onDelete();
  };

  const navigate = useNavigate();

  return (
    <ProfileLayout>
      <div className="details-header">
        <BackIcon onClick={handleBackButtonClick} className="details-back-btn" />

        <div className="details-header-name">{name}</div>
        <div className="details-header-tools">
          {isEditable && (
            <IconButton
              link={`/form/${params.id}`}
              className="details-header-edit-btn"
              icon={PenIcon}
              onClick={() => {}}
              inverse
            >
              {t("edit")}
            </IconButton>
          )}
          {isDeletable && (
            <IconButton
              useLoader
              className="details-header-delete-btn"
              icon={TrashIcon}
              onClick={handleDeleteButtonClick}
              inverse
            >
              {t("delete")}
            </IconButton>
          )}
          <IconButton
            className="details-header-print-btn"
            icon={PrintIcon}
            onClick={handlePrintButtonClick}
            inverse
          >
            {t("print")}
          </IconButton>
        </div>
      </div>
      <div className="details-content">
        {inspection && (
          <div className="details-inspection">
            <div className="details-inspection-label">{t("inspection-review")}</div>
            <div className="details-inspection-content">{inspection}</div>
          </div>
        )}
        <div className="details-info">
          {details &&
            details.map((detail, index) => (
              <div key={index} className="details-info-item">
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
