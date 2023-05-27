import React from "react";

import Button from "client/common/Buttons/Button";
import IconButton from "client/common/Buttons/IconButton";
import Input from "client/common/Inputs/Input";

import { ReactComponent as WaitSpin } from "client/shared/icons/wait-spin.svg";

import "./App.scss";

function App() {
  const [value, setValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <Input
        onChange={handleChange}
        value={value}
        name="nigger"
        label="Nigger"
        maxLength={25}
        withLengthHint={true}
      />
    </div>
  );
}

export default App;
