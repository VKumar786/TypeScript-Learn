const Button = (props: ButtonProps) => {
  return (
    <>
      <button onClick={props.handleClick}>Click</button>
      <button onClick={(e) => props.handleClick1(e, 1)}>Click1</button>
    </>
  );
};

type ButtonProps = {
  handleClick: () => void;
  handleClick1: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => void;
};

export default Button;
