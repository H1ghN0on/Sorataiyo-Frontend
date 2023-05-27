import React from "react";

import Button from "client/common/Buttons/Button";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <Button
        className="button1"
        title="Button to test"
        useLoader
        onClick={async () => {
          await fetch("https://jsonplaceholder.typicode.com/posts/1");
        }}
      />
      <Button
        inverse
        title="Button to test"
        onClick={() => {
          alert("Hi!");
        }}
      />
    </div>
  );
}

export default App;
