const Greet = (props: GreetProps) => {
  return (
    <>
      <h3>
        Welcome {props.name}! You have {props.number} unread Message
      </h3>
    </>
  );
};

type GreetProps = {
  name: string;
  number: number;
};

export default Greet;
