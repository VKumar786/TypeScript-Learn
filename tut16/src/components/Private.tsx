import Login from "./Login";
import { ProfileTypes } from "./Profile";

const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="vishal" />;
  } else {
    return <Login />;
  }
};

type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfileTypes>;
};

export default Private;
