const Person = (props: PersonProps) => {
  return (
    <>
      {props.name.fname} {props.name.lname}
    </>
  );
};

type PersonProps = {
  name: {
    fname: string;
    lname: string
  };
};

export default Person;
