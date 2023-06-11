import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import useToast from "scripts/hooks/useToast";
import { Input, Select, ProfileLayout, IconButton } from "client/common";
import { IOptionProps } from "client/common/Inputs/Select";
import ExploringForm from "./ExploringForm";
import { Api } from "api";
import { ApplicationType } from "api/ApplicationApi";

import { ReactComponent as BackIcon } from "client/shared/icons/arrow-left.svg";
import { ReactComponent as SendIcon } from "client/shared/icons/send.svg";

import "./FormPage.scss";

enum ApplicationTypeEnum {
  ExploringType = "exploring-type",
}

const FormPage = () => {
  const { notify, ToastContainer } = useToast({
    content: "DB error occured. Try refresh the page",
    status: "danger",
    autoClose: 3000,
    pauseOnHover: true,
    light: true,
    position: "bottom-right",
  });
  const { t } = useTranslation(["form", "details"]);

  const navigate = useNavigate();

  const [inputValues, setInputValue] = React.useState({
    name: "",
    x: "50",
    y: "50",
    radius: "5",
  });

  const [isFilled, setFilled] = React.useState(false);

  const handleInputValue = (type: string, val: string) => {
    const values = { ...inputValues, [type]: val };
    setInputValue(values);
    checkInputsFilled(values);
  };

  const [applicationTypes, setApplicationTypes] = React.useState<IOptionProps[]>([
    {
      label: t("exploring-location", { ns: "details" }),
      value: ApplicationTypeEnum.ExploringType,
    },
  ]);

  const [instrumentTypes, setInstrumentTypes] = React.useState<IOptionProps[]>([]);

  const [activeApplicationType, setActiveApplicationType] = React.useState<IOptionProps>(
    applicationTypes[0]
  );

  const [activeInstrumentType, setActiveInstrumentType] = React.useState<IOptionProps>({
    label: "",
    value: "",
  });

  const handleApplicationTypeChange = (option: IOptionProps) => {
    setActiveApplicationType(option);
  };

  const handleInstrumentTypeChange = (option: IOptionProps) => {
    setActiveInstrumentType(option);
  };

  const handleSubmitButton = async () => {
    const result = await addApplication();
    if (!result || !result.status) {
      notify();
      return;
    }
    navigate("/catalogs");
  };

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const checkInputsFilled = (values: object) => {
    for (let prop in values) {
      if ((values as any)[prop] === "") return setFilled(false);
    }
    return setFilled(true);
  };

  //Model

  const getInstruments = async () => {
    const data = await Api().getInstruments();
    if (!data || !data.status) {
      notify();
      setInstrumentTypes([]);
      return;
    }
    const instrumentTypes = data.instruments.map((instrument) => ({
      label: instrument.name,
      value: instrument.id.toString(),
    }));
    setInstrumentTypes(instrumentTypes);
    if (instrumentTypes.length) setActiveInstrumentType(instrumentTypes[0]);
  };

  const addApplication = async () => {
    const application: Omit<ApplicationType, "user"> = {
      name: inputValues.name,
      x: +inputValues.x,
      y: +inputValues.y,
      radius: +inputValues.radius,
      instrument: +activeInstrumentType.value,
      status: "pending",
    };
    const result = await Api().createApplication(application);
    return result;
  };

  React.useEffect(() => {
    getInstruments();
  }, []);

  return (
    <ProfileLayout>
      <div className="form-page-header">
        <BackIcon className="form-page-back-btn" onClick={handleBackButtonClick} />
        <div className="form-page-title">{t("form")}</div>
      </div>

      <div className="form-page-content">
        <form className="form-page-form">
          <div className="input-container col-1">
            <Input
              className="form-page-input"
              label={t("name")!}
              name="name"
              value={inputValues.name}
              onChange={(val: string) => {
                handleInputValue("name", val);
              }}
            />
          </div>
          <div className="input-container col-1">
            <Select
              className="form-page-input"
              label={t("type")!}
              name="application-type"
              options={applicationTypes}
              active={activeApplicationType}
              onChange={handleApplicationTypeChange}
            />
          </div>
          {activeApplicationType.value === ApplicationTypeEnum.ExploringType && (
            <ExploringForm
              inputValues={{
                x: inputValues.x,
                y: inputValues.y,
                radius: inputValues.radius,
              }}
              activeInstrumentType={activeInstrumentType}
              instrumentTypes={instrumentTypes}
              onInstrumentChange={handleInstrumentTypeChange}
              onValueChange={handleInputValue}
            />
          )}
          <IconButton
            icon={SendIcon}
            useLoader
            className="form-page-submit-btn"
            inverse
            onClick={handleSubmitButton}
            disabled={!isFilled || !activeInstrumentType.value}
          >
            {t("submit")}
          </IconButton>
        </form>
      </div>
      <ToastContainer />
    </ProfileLayout>
  );
};

export default FormPage;
