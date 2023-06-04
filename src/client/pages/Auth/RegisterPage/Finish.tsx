import { useTranslation } from "react-i18next";
import AuthLayout from "../AuthLayout";

import "./Finish.scss";

const FinishPage = () => {
  //здесь будет загрузка данных в базу данных
  const { t } = useTranslation("auth");

  return (
    <AuthLayout title={t("register.thank-you")} isRegister isFinish>
      <h2 className="finish-title">{t("register.redirect")}</h2>
    </AuthLayout>
  );
};

export default FinishPage;
