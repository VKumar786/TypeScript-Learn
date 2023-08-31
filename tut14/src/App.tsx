import DomRef from "./components/DomRef";
import MutableRef from "./components/MutableRef";

const App = () => {
  return (
    <>
      <h3>Dom Reference</h3>
      <DomRef />

      <h4>Mutable Reference</h4>
      <MutableRef />
    </>
  );
};

export default App;
