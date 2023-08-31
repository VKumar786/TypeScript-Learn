import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [userName, setUserName] = useState("");

  return (
    <>
      <h4>Button</h4>

      <Button
        handleClick={() => {
          console.log("Button Click :>> ");
        }}
        handleClick1={(event, id) => {
          console.log("Click1 :>>", event, id);
        }}
      />

      <h4>Input</h4>
      <Input
        name="username"
        value={userName}
        handleChange={(e) => {
          setUserName(e.target.value);
        }}
      />
    </>
  );
};

export default App;
