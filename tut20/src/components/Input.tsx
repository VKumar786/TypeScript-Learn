const Input = (props: InputProps) => {
  return <input type="text" {...props} />;
};

type InputProps = React.ComponentProps<"input">;

export default Input;
