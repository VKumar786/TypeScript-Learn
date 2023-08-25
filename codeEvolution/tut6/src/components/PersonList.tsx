import { NameProps } from "./Person.types";

const PersonList = (props: PersonListProps) => {
  return (
    <>
      {props.names.map((item, idx) => {
        return (
          <h2 key={idx}>
            {item.fname} {item.lname}
          </h2>
        );
      })}
    </>
  );
};

type PersonListProps = {
  names: NameProps[];
};

export default PersonList;
