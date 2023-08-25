import React from "react";
import Greet from "./Greet";

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <>
      {props.isLoggedIn && "you are logged in"}
      {props.name}
      {props.msgCount}
    </>
  );
};

export default CustomComponent;
