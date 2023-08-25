import Private from "./components/Private";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <Private isLoggedIn={true} Component={Profile} />
    </>
  );
};

export default App;
