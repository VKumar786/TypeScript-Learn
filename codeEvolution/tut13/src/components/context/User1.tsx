import { useContext } from "react";
import { UserContext1 } from "./UserContext1";

const User1 = () => {
  const userContext = useContext(UserContext1);
  const handleLogin = () => {
    userContext.setUser({
      email: "vkumar@onemindservices.com",
      name: "vishal kumar",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email} </div>
    </div>
  );
};

export default User1;
