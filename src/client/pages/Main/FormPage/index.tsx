import React from "react";
import clsx from "clsx";

import { Input, Select, Button, ProfileLayout, IconButton } from "client/common";
import { IOptionProps } from "client/common/Inputs/Select";

import { ReactComponent as BackIcon } from "client/shared/icons/arrow-left.svg";
import { ReactComponent as SendIcon } from "client/shared/icons/send.svg";

import "./FormPage.scss";
import useWindowDimensions from "scripts/hooks/useWindowDimensions";

enum ApplicationType {
  ExploringType = "exploring-type",
}

enum InstrumentType {
  BFG = "bfg-700",
}

const FormPage = () => {
  const windowDimensions = useWindowDimensions();

  const [inputValues, setInputValue] = React.useState({
    name: "",
    type: "exploring_point",
    x: 50,
    y: 50,
    radius: 5,
    instrument: "bfg-700",
  });

  const handleInputValue = (type: string, val: string) => {};

  const [applicationTypes, setApplicationTypes] = React.useState<IOptionProps[]>([
    {
      label: "Exploring type",
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

  const ApplicationForm = () => {
    switch (activeApplicationType.value) {
      case "exploring-type": {
        return (
          <>
            <div
              className={clsx("input-container", {
                "col-2": windowDimensions.width <= 600,
                "col-4": windowDimensions.width > 600,
              })}
            >
              <Input
                className="form-page-input"
                label="X"
                name="x"
                value={inputValues.name}
                onChange={(val: string) => {
                  handleInputValue("x", val);
                }}
              />
              <Input
                className="form-page-input"
                label="Y"
                name="y"
                value={inputValues.name}
                onChange={(val: string) => {
                  handleInputValue("y", val);
                }}
              />
              <Input
                className="form-page-input"
                label="Radius"
                name="radius"
                value={inputValues.name}
                onChange={(val: string) => {
                  handleInputValue("radius", val);
                }}
              />
              <Select
                className="form-page-input"
                label="Instrument Type"
                name="instrument-type"
                options={instrumentTypes}
                active={activeInstrumentType}
                onChange={handleInstrumentTypeChange}
              />
            </div>
          </>
        );
      }
    }
    return <></>;
  };

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
              value={inputValues.name}
              onChange={(val: string) => {
                handleInputValue("name", val);
              }}
            />
          </div>
          <div className="input-container col-1">
            <Select
              className="form-page-input"
              label="Application Type"
              name="application-type"
              options={applicationTypes}
              active={activeApplicationType}
              onChange={handleApplicationTypeChange}
            />
          </div>
          <ApplicationForm />
          <IconButton
            icon={SendIcon}
            className="form-page-submit-btn"
            inverse
            onClick={handleSubmitButton}
          >
            Submit
          </IconButton>
        </form>
      </div>
    </ProfileLayout>
  );
};

export default FormPage;
