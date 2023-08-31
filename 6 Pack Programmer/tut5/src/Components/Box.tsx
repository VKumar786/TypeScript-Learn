import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Box = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <div>
        <p>Jai Shri Ram 🚩🚩</p>
      </div>
      <button onClick={() => toggleTheme()}>Change Theme</button>
    </div>
  );
};

export default Box;
