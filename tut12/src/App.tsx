import Box from "./components/context/Box";
import { ThemeProvider } from "./components/context/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Box />
      </ThemeProvider>
    </>
  );
};

export default App;
