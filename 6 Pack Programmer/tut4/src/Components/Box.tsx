import React from "react";

const Box = ({ heading, count=0, func,children }: BoxProps) => {
  return (
    <div>
      <h1 onClick={() => func(3)}>{heading}</h1>
      <p>{count}</p>
      {children}
    </div>
  );
};

type BoxProps = {
  heading: string;
  count?: number;
  func: (a: number) => void
  children: React.ReactNode
};

export default Box;
