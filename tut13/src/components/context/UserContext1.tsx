import { createContext, useState } from "react";

export const UserContext1 = createContext<UserContextType>(
  {} as UserContextType
);

export const UserProvider1 = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext1.Provider value={{ user, setUser }}>
      {children}
    </UserContext1.Provider>
  );
};

export type AuthUser = {
  name: string;
  email: string;
};

type UserProviderProps = {
  children: React.ReactNode;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
