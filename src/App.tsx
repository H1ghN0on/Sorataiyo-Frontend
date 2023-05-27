import React from "react";

import Button from "client/common/Buttons/Button";
import IconButton from "client/common/Buttons/IconButton";

import { ReactComponent as WaitSpin } from "client/shared/icons/wait-spin.svg";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <Button
        disabled
        className="button1"
        useLoader
        onClick={async () => {
          await new Promise((resolve) => {
            setTimeout(resolve, 1000);
          });
        }}
      >
        Button to test1
      </Button>
      <Button
        inverse
        disabled
        onClick={() => {
          alert("Hi!");
        }}
      >
        Button to test2
      </Button>
      <IconButton
        icon={WaitSpin}
        inverse
        useLoader
        onClick={async () => {
          await fetch("https://jsonplaceholder.typicode.com/posts/1");
        }}
      >
        Button to test2
      </IconButton>
    </div>
  );
}

export default App;
