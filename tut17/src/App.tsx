import List from "./components/List";
import List1 from "./components/List1";

const App = () => {
  return (
    <>
      {/* Specific List */}
      <List
        items={["vishal", "kumar", "vivek", "yash"]}
        onClick={(item) => {
          console.log("Item : ", item);
        }}
      />
      <List
        items={[1, 2, 3, 4]}
        onClick={(item) => {
          console.log("Item : ", item);
        }}
      />
      <List1
        items={[
          { fname: "vishal", lname: "kumar" },
          { fname: "yash", lname: "Gujjar" },
        ]}
        onClick={(item) => {
          console.log("Item : ", item);
        }}
      />
    </>
  );
};

export default App;
