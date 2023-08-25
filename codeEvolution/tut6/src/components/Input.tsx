const Input = ({ name, value, handleChange }: InputProps) => {
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    handleChange(e);
  };
  return (
    <div>
      <input
        type="text"
        name={name}
        onChange={(e) => handleChange(e)}
        value={value}
      />
      <input type="text" name={value} onChange={handleChanges} />
    </div>
  );
};

type InputProps = {
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default Input;