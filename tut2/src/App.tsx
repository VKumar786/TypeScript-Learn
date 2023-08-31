import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

const App = () => {
  const personName = {
    fname: "vishal",
    lname: "kumar",
  };
  const nameList = [
    {
      first: "vivek",
      last: "kumar",
    },
    {
      first: "tushar",
      last: "Bhai",
    },
    {
      first: "yash",
      last: "Gujjar BOII",
    },
  ];
  return (
    <>
      <Greet name="Vishal" msgCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </>
  );
};

export default App;
