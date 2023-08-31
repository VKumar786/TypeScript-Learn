import { useState } from "react";

const LogedIn = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const handleLogin = () => {
    setIsLogIn(true);
  };
  const handleLogout = () => {
    setIsLogIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLogIn ? "LoggedIn" : "Logged out"}</div>
    </div>
  );
};

export default LogedIn;
