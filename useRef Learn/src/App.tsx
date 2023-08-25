import { useRef, useState } from "react";
import App1 from "./App1";
import Input from "./Input";

const App = ({}: AppProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State: ", count);
    console.log("Ref: ", countRef.current);
  };

  return (
    <div>
      <h1>Counter 1</h1>
      Count: {count}
      <button onClick={handleIncrement}>Increment</button>
      <h1>Counter 2</h1>
      <App1 />
      <h1>Counter 3</h1>
      <Input />
    </div>
  );
};

type AppProps = {};

export default App;
