import User from "./components/context/User";
import User1 from "./components/context/User1";
import { UserProvider } from "./components/context/UserContext";
import { UserProvider1 } from "./components/context/UserContext1";

const App = () => {
  return (
    <>
      <UserProvider1>
        <UserProvider>
          <User />
          <User1 />
        </UserProvider>
      </UserProvider1>
    </>
  );
};

export default App;
