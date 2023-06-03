import React from "react";
import clsx from "clsx";

import { Input, Select } from "client/common";
import useWindowDimensions from "scripts/hooks/useWindowDimensions";
import { IOptionProps } from "client/common/Inputs/Select";

interface IExploringForm {
  inputValues: {
    x: string;
    y: string;
    radius: string;
  };
  activeInstrumentType: IOptionProps;
  instrumentTypes: IOptionProps[];
  onValueChange: (type: string, value: string) => void;
  onInstrumentChange: (option: IOptionProps) => void;
}

const ExploringForm: React.FC<IExploringForm> = ({
  inputValues,
  onValueChange,
  instrumentTypes,
  onInstrumentChange,
  activeInstrumentType,
}) => {
  const windowDimensions = useWindowDimensions();

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
          value={inputValues.x}
          onChange={(val: string) => {
            onValueChange("x", val);
          }}
        />
        <Input
          className="form-page-input"
          label="Y"
          name="y"
          value={inputValues.y}
          onChange={(val: string) => {
            onValueChange("y", val);
          }}
        />
        <Input
          className="form-page-input"
          label="Radius"
          name="radius"
          value={inputValues.radius}
          onChange={(val: string) => {
            onValueChange("radius", val);
          }}
        />
        <Select
          className="form-page-input"
          label="Instrument Type"
          name="instrument-type"
          options={instrumentTypes}
          active={activeInstrumentType}
          onChange={onInstrumentChange}
        />
      </div>
    </>
  );
};

export default ExploringForm;
