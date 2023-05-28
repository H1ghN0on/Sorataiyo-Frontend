import React from "react";

import {
  Select,
  Button,
  IconButton,
  IconInput,
  Input,
  TextWithHint,
} from "client/common";

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
      Lorem ipsum dolor sit amet consectetur,
      <TextWithHint hint="Let's dance boys">TextToHint</TextWithHint> elit. Quae
      obcaecati, libero officia similique facere tempora possimus vero veniam
      iusto ducimus quaerat quod atque nam recusandae error nobis dicta odio
      explicabo placeat iste voluptates voluptatem saepe vitae ipsum! Possimus,
      unde architecto officiis, nisi consequuntur vel sunt animi blanditiis,
      quasi ea officia.
    </div>
  );
}

export default App;
