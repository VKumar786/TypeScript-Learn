import Text from "./components/Text";
import "./App.css";

const App = () => {
  return (
    <>
      <Text as={"h2"} size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" size="sm" color="secondary">
        Label
      </Text>
    </>
  );
};

export default App;
