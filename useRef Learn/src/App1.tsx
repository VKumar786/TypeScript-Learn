import { useRef, useState } from "react";

const App1 = ({}: AppProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    countRef.current++;

    console.log("Ref: ", countRef.current);
  };

  return (
    <div>
      Count: {countRef.current}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

type AppProps = {};

export default App1;
