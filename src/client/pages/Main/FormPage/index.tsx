import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Input, Select, ProfileLayout, IconButton } from "client/common";
import { IOptionProps } from "client/common/Inputs/Select";
import ExploringForm from "./ExploringForm";

import { ReactComponent as BackIcon } from "client/shared/icons/arrow-left.svg";
import { ReactComponent as SendIcon } from "client/shared/icons/send.svg";

import "./FormPage.scss";

enum ApplicationType {
  ExploringType = "exploring-type",
}

enum InstrumentType {
  BFG = "bfg-700",
}

const FormPage = () => {
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
      value: ApplicationType.ExploringType,
    },
  ]);

  const [instrumentTypes, setInstrumentType] = React.useState<IOptionProps[]>([
    {
      label: "BFG-700",
      value: InstrumentType.BFG,
    },
  ]);

  const [activeApplicationType, setActiveApplicationType] = React.useState<IOptionProps>(
    applicationTypes[0]
  );

  const [activeInstrumentType, setActiveInstrumentType] = React.useState<IOptionProps>(
    instrumentTypes[0]
  );

  const handleApplicationTypeChange = (option: IOptionProps) => {
    setActiveApplicationType(option);
  };

  const handleInstrumentTypeChange = (option: IOptionProps) => {
    setActiveInstrumentType(option);
  };

  const handleSubmitButton = () => {};

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const checkInputsFilled = (values: object) => {
    for (let prop in values) {
      if ((values as any)[prop] === "") return setFilled(false);
    }
    return setFilled(true);
  };

  React.useEffect(() => {
    checkInputsFilled(inputValues);
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
          {activeApplicationType.value === ApplicationType.ExploringType && (
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
            className="form-page-submit-btn"
            inverse
            onClick={handleSubmitButton}
            disabled={!isFilled}
          >
            {t("submit")}
          </IconButton>
        </form>
      </div>
    </ProfileLayout>
  );
};

export default FormPage;
