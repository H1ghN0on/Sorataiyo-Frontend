import React from "react";

import Button from "client/common/Buttons/Button";
import IconButton from "client/common/Buttons/IconButton";
import IconInput from "client/common/Inputs/IconInput";
import Input from "client/common/Inputs/Input";
import Select from "client/common/Inputs/Select";

import { ReactComponent as WaitSpin } from "client/shared/icons/wait-spin.svg";

import "./App.scss";

function App() {
  const [value, setValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const [options, setOptions] = React.useState([
    {
      name: "Option 1",
      value: "option1",
    },
    {
      name: "Option 2",
      value: "option2",
    },
    {
      name: "Option 3",
      value: "option3",
    },
  ]);

  const [activeOption, setActiveOption] = React.useState(options[0]);

  const handleSelectChange = (option: { name: string; value: string }) => {
    console.log(option.value + " was chosen");
    setActiveOption(option);
  };

  return (
    <div className="container">
      <Select
        options={options}
        onChange={handleSelectChange}
        active={activeOption}
        className={"hi"}
        name="example"
        label="Example"
      />
    </div>
  );
}

export default App;
