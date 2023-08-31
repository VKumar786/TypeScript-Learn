import React, { ChangeEvent, useState } from "react";

//* Components
import Box from "./Components/Box";
import Generic from "./Components/Generic";

interface Person {
  name: string;
  email: string;
  age: number;
}

const App = () => {
  const [user, setUser] = useState<Person>({
    name: "",
    email: "",
    age: 0,
  });
  const [val, setVal] = useState<string>("");

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev: Person) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.name === "age" ? Number(e.target.value) : e.target.value,
      };
    });
  };
  return (
    <div>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={user?.name}
          onChange={handleChanges}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={user?.email}
          onChange={handleChanges}
        />

        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          value={user?.age}
          onChange={handleChanges}
        />

        <button type="submit">Submit</button>
      </form>

      <Generic
        label={"Search"}
        value={val}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setVal(e.target.value);
        }}
        setVal={setVal}
      />

      <Box
        heading="Jai Shri Ram 🛕🚩🛕"
        count={1}
        func={(a) => {
          console.log("Jai Shri Ram 🛕🚩🛕 :: ", a);
        }}
      >
        <p>My name is vishal kumar</p>
      </Box>
      <Box
        heading="Jai Shri Ram 🛕🚩🛕"
        func={(a) => {
          console.log("Jai Shri Ram 🛕🚩🛕 :: ", a);
        }}
      >
        <p>My name is vishal kumar</p>
      </Box>
    </div>
  );
};

export default App;
