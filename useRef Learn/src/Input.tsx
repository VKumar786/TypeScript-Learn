import { useEffect, useRef } from "react";

const Input = ({}: InputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus(); 
  }, []);

  return (
    <>
      <input type="text" ref={inputRef} placeholder="Type Something..." />
    </>
  );
};

type InputProps = {};

export default Input;
