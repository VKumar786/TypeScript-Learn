import RandomNumber from "./components/RandomNumber";
import RandomNumber1 from "./components/RandomNumber1";

const App = () => {
  return (
    <>
      {/* //! failure */}
      <RandomNumber value={10} isPositive isNegative isZero />

      {/* //! success */}
      <RandomNumber1 value={19} isPositive={true} />
    </>
  );
};

export default App;
