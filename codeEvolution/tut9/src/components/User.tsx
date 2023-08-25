import { useState } from "react";

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "vishal kumar",
      email: "vkumar@onemindservices.com",
    });
  };
  const handleLogout = () => {
    setUser({
      name: "",
      email: "",
    });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};

type AuthUser = {
  name: string;
  email: string;
};

export default User;
