import Button from "./components/Button";
import Button1 from "./components/Button1";

const App = () => {
  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          console.log("we are in button");
        }}
      >
        <div>Primary Button</div>
      </Button>

      <Button1 variant="secondary">Vishal</Button1>
    </>
  );
};

export default App;
