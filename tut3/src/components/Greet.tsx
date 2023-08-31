const Greet = (props: GreetProps) => {
  const { msgCount = 0 } = props;
  return (
    <>
      {props.isLoggedIn ? (
        <h3>
          Welcome {props.name}! You have {msgCount} unread Message
        </h3>
      ) : (
        <h3>Please Log In</h3>
      )}
    </>
  );
};

type GreetProps = {
  name: string;
  msgCount?: number;
  isLoggedIn: boolean;
};

export default Greet;
