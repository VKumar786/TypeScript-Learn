import Heading from "./components/Heading";
import Status from "./components/Status";
import Oscar from "./components/Oscar";
import Greet from "./components/Greet";

const App = () => {
  return (
    <>
      <Status status="success" />
      <Status status="error" />

      <Heading>PlaceHolder Text</Heading>

      <Oscar>
        <Heading>Oscar Goes to Vishal Badmash~~~</Heading>
      </Oscar>

      {/* //? optional props */}
      <Greet name="Vishal" msgCount={100} isLoggedIn={true} />
      <Greet name="Vishal" isLoggedIn={true} />
    </>
  );
};

export default App;
