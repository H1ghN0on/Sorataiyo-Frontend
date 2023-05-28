import React from "react";

import {
  Select,
  Button,
  IconButton,
  IconInput,
  Input,
  TextWithHint,
  CodeInput,
} from "client/common";

import { ReactComponent as WaitSpin } from "client/shared/icons/wait-spin.svg";
import { ReactComponent as Logo } from "client/shared/icons/sorataiyo-double-cross.svg";

import "./App.scss";

function App() {
  const [value, setValue] = React.useState<number[]>([]);
  const length = 6;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //setValue(e.target.value);
  };

  const handleCodeInputChange = (val: number, position: number) => {
    let newValue = [];
    for (let i = 0; i < length; i++) {
      if (i === position) {
        newValue[i] = val;
        continue;
      }
      newValue[i] = value[i];
    }
    setValue(newValue);
  };

  const handleCodeInputSubmit = () => {
    return false;
  };

  const handleCodeInputClear = () => {
    setValue([]);
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
      <Logo className="logo" />
    </div>
  );
}

export default App;
