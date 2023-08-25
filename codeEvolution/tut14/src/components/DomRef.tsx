import { useRef, useEffect } from "react";
const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input type="text" name="username" id="username" ref={inputRef} />
    </>
  );
};

export default DomRef;
