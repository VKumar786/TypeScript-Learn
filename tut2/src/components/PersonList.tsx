
const PersonList = (props: PersonListProps) => {
  return (
    <>
      {props.names.map((item, idx) => {
        return (
          <h2 key={idx}>
            {item.first} {item.last}
          </h2> 
        );
      })}
    </>
  );
};

type PersonListProps = {
  names: {
    first: string,
    last: string,
  }[],
};

export default PersonList;
