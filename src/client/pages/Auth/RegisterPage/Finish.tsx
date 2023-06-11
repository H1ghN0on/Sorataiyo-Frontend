import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AuthLayout from "../AuthLayout";

import "./Finish.scss";

const FinishPage = () => {
  const { t } = useTranslation("auth");
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }, []);

  return (
    <AuthLayout title={t("register.thank-you")} isRegister isFinish>
      <h2 className="finish-title">{t("register.redirect")}</h2>
    </AuthLayout>
  );
};

export default FinishPage;
