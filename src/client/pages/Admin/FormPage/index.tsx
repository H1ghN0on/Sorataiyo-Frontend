import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Input, ProfileLayout, IconButton } from "client/common";
import { ReactComponent as BackIcon } from "client/shared/icons/arrow-left.svg";
import { ReactComponent as ConfirmIcon } from "client/shared/icons/confirm.svg";
import { ReactComponent as RejectIcon } from "client/shared/icons/cross.svg";
import { Api } from "api";
import useToast from "scripts/hooks/useToast";
import "./FormPage.scss";

type Detail = {
  type: string;
  value: string;
};

const AdminFormPage = () => {
  const { notify, ToastContainer } = useToast({
    content: "DB error occured. Try refresh the page",
    status: "danger",
    autoClose: 3000,
    pauseOnHover: true,
    light: true,
    position: "bottom-right",
  });

  const { t } = useTranslation("form");
  const [commentary, setCommentary] = React.useState("");
  const params = useParams();

  const navigate = useNavigate();
  const [details, setDetails] = React.useState<Detail[]>([]);

  const handleAcceptClick = async () => {
    await updateApplicationStatus("accepted");
  };

  const handleRejectClick = async () => {
    await updateApplicationStatus("rejected");
  };

  const handleBackButtonClick = () => {
    navigate(-1);
  };
  const handleCommentaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentary(e.target.value);
  };

  //Model

  const fillDetail = (property: string, value: any): Detail => {
    switch (property) {
      case "x": {
        return {
          type: "X",
          value,
        };
      }
      case "y": {
        return {
          type: "Y",
          value,
        };
      }
      case "radius": {
        return {
          type: "Radius",
          value,
        };
      }
      case "Instrument": {
        return {
          type: "Instrument",
          value: value.name,
        };
      }
      default: {
        return {
          type: "Unknown",
          value,
        };
      }
    }
  };

  const getApplicationById = async () => {
    const data = await Api().getApplicationById({ id: +params.id! });
    console.log(data);
    if (!data || !data.status) {
      notify();
      return navigate("/admin/catalogs");
    }
    const localDetails: Detail[] = [];
    for (const property in data.application) {
      const detail = fillDetail(property, (data.application as any)[property]);
      if (detail.type !== "Unknown") {
        localDetails.push(detail);
      }
    }
    setDetails(localDetails);
  };

  const updateApplicationStatus = async (status: "rejected" | "completed" | "accepted") => {
    const data = await Api().updateApplicationStatus({
      id: +params.id!,
      review: commentary,
      status,
    });
    if (!data || !data.status) {
      notify();
    }
    return navigate("/admin/catalogs");
  };

  React.useEffect(() => {
    getApplicationById();
  }, []);

  return (
    <ProfileLayout>
      <div className="form-page-header">
        <BackIcon className="form-page-back-btn" onClick={handleBackButtonClick} />
        <div className="form-page-title">Application Form</div>
      </div>

      <div className="form-page-content">
        <form className="form-page-form">
          {details.map((detail) => (
            <div className="input-container col-1">
              <Input
                className="form-page-input"
                label={t(detail.type)!}
                name={detail.type}
                value={detail.value}
                onChange={(val: string) => {}}
                disabled
              />
            </div>
          ))}
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
              useLoader
              className="form-page-submit-btn"
              inverse
              onClick={handleAcceptClick}
              disabled={!commentary}
            >
              {t("accept")}
            </IconButton>
            <IconButton
              icon={RejectIcon}
              useLoader
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
      <ToastContainer />
    </ProfileLayout>
  );
};

export default AdminFormPage;
