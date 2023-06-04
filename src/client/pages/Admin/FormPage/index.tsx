import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Input, ProfileLayout, IconButton } from "client/common";
import { ReactComponent as BackIcon } from "client/shared/icons/arrow-left.svg";
import { ReactComponent as ConfirmIcon } from "client/shared/icons/confirm.svg";
import { ReactComponent as RejectIcon } from "client/shared/icons/cross.svg";

import "./FormPage.scss";

const AdminFormPage = () => {
  const { t } = useTranslation("form");
  const [commentary, setCommentary] = React.useState("");

  const navigate = useNavigate();

  const handleAcceptClick = () => {};

  const handleRejectClick = () => {};

  const handleBackButtonClick = () => {
    navigate(-1);
  };
  const handleCommentaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentary(e.target.value);
  };

  return (
    <ProfileLayout>
      <div className="form-page-header">
        <BackIcon className="form-page-back-btn" onClick={handleBackButtonClick} />
        <div className="form-page-title">Application Form</div>
      </div>

      <div className="form-page-content">
        <form className="form-page-form">
          <div className="input-container col-1">
            <Input
              className="form-page-input"
              label={t("name")!}
              name="name"
              value="Something, I don't know"
              onChange={(val: string) => {}}
              disabled
            />
          </div>
          <div className="input-container col-1">
            <Input
              className="form-page-input"
              label={t("name")!}
              name="name"
              value="Something, I don't know"
              onChange={(val: string) => {}}
              disabled
            />
          </div>
          <div className="input-container col-1">
            <Input
              className="form-page-input"
              label={t("name")!}
              name="name"
              value="Something, I don't know"
              onChange={(val: string) => {}}
              disabled
            />
          </div>
          <div className="input-container form-page-review col-1">
            <div className="form-page-review-label">{t("commentary")}</div>
            <textarea
              className="form-page-review-input"
              onChange={handleCommentaryChange}
              value={commentary}
            />
          </div>
          <div className="form-page-buttons">
            <IconButton
              icon={ConfirmIcon}
              className="form-page-submit-btn"
              inverse
              onClick={handleAcceptClick}
              disabled={!commentary}
            >
              {t("accept")}
            </IconButton>
            <IconButton
              icon={RejectIcon}
              className="form-page-submit-btn"
              inverse
              onClick={handleRejectClick}
              disabled={!commentary}
            >
              {t("reject")}
            </IconButton>
          </div>
        </form>
      </div>
    </ProfileLayout>
  );
};

export default AdminFormPage;
