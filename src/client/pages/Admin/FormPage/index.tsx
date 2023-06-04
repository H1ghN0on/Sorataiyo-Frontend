import React from "react";

import { Input, ProfileLayout, IconButton } from "client/common";
import { ReactComponent as BackIcon } from "client/shared/icons/arrow-left.svg";
import { ReactComponent as ConfirmIcon } from "client/shared/icons/confirm.svg";
import { ReactComponent as RejectIcon } from "client/shared/icons/cross.svg";

import "./FormPage.scss";

const AdminFormPage = () => {
  const handleAcceptClick = () => {};

  const handleRejectClick = () => {};

  return (
    <ProfileLayout>
      <div className="form-page-header">
        <BackIcon className="form-page-back-btn" />
        <div className="form-page-title">Application Form</div>
      </div>

      <div className="form-page-content">
        <form className="form-page-form">
          <div className="input-container col-1">
            <Input
              className="form-page-input"
              label="Name"
              name="name"
              value="Something, I don't know"
              onChange={(val: string) => {}}
              disabled
            />
          </div>
          <div className="input-container col-1">
            <Input
              className="form-page-input"
              label="Name"
              name="name"
              value="Something, I don't know"
              onChange={(val: string) => {}}
              disabled
            />
          </div>
          <div className="input-container col-1">
            <Input
              className="form-page-input"
              label="Name"
              name="name"
              value="Something, I don't know"
              onChange={(val: string) => {}}
              disabled
            />
          </div>
          <div className="input-container form-page-review col-1">
            <div className="form-page-review-label">Commentary</div>
            <textarea className="form-page-review-input" />
          </div>
          <div className="form-page-buttons">
            <IconButton
              icon={ConfirmIcon}
              className="form-page-submit-btn"
              inverse
              onClick={handleAcceptClick}
            >
              Accept
            </IconButton>
            <IconButton
              icon={RejectIcon}
              className="form-page-submit-btn"
              inverse
              onClick={handleRejectClick}
            >
              Reject
            </IconButton>
          </div>
        </form>
      </div>
    </ProfileLayout>
  );
};

export default AdminFormPage;
