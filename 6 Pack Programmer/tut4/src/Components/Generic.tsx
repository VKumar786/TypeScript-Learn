import React from "react";

// <T extends UserType>
const Generic = <T extends string | number>({
  label,
  value,
  onChange,
  setVal,
}: GenericProps<T>) => {
  return (
    <>
      <div>
        <label htmlFor="">{label}</label>
        <input type="text" name="name" value={value} onChange={onChange} />
        <input
          type="text"
          name={"name"}
          value={value}
          onChange={(e) => {
            setVal(e.target.value as T);
          }}
        />
      </div>
    </>
  );
};

type GenericProps<T> = {
  label: string;
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setVal: React.Dispatch<React.SetStateAction<T>>;
};

export default Generic;
