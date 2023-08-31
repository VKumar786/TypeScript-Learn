import { PersonProps } from "./Person.types";
 
const Person = (props: PersonProps) => {
  return (
    <>
      {props.name.fname} {props.name.lname}
    </>
  );
};

export default Person;
