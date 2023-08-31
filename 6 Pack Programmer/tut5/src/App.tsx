import React, { useState, createContext } from "react";
import Box from "./Components/Box";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Box />
    </ThemeProvider>
  );
};

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

export default App;
