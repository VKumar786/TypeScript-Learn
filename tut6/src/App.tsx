import { useState } from "react";
import Input from "./components/Input";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

const App = () => {
  const [userName, setUserName] = useState("");
  const personName = {
    fname: "vishal",
    lname: "kumar",
  };
  const nameList = [
    {
      fname: "vivek",
      lname: "kumar",
    },
    {
      fname: "tushar",
      lname: "Bhai",
    },
    {
      fname: "yash",
      lname: "Gujjar BOII",
    },
  ];
  return (
    <>
      <h4>Input</h4>
      <Input
        name="username"
        value={userName}
        handleChange={(e) => {
          setUserName(e.target.value);
        }}
      />

      <h4>Person</h4>
      <Person name={personName} />

      <h4>Person List</h4>
      <PersonList names={nameList} />
    </>
  );
};

export default App;
