import Container from "./components/Container";

const App = () => {
  return (
    <>
      <Container
        styles={{
          fontSize: "sans-serif",
          border: "1px solid greenyellow",
          padding: "1rem",
        }}
        title={"My Name is Khan"}
      />
      <Container title={"I have you"} styles={undefined} />
    </>
  );
};

export default App;
