import { createContext } from "react";
import { theme } from "./theme";

export const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

type ThemeProviderProps = {
  children: React.ReactNode;
};
