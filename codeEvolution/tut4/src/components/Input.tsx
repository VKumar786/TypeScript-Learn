const Input = (props: InputProps) => {
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    props.handleChange(e);
  };
  return (
    <div>
      <input
        type="text"
        name={props.name}
        onChange={(e) => props.handleChange(e)}
        value={props.value}
      />
      <input type="text" name={props.value} onChange={handleChanges} />
    </div>
  );
};

type InputProps = {
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default Input;
