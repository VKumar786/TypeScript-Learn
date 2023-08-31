import React from "react";

const Oscar = (props: OscarProps) => {
  return <>{props.children}</>;
};

type OscarProps = {
  children: React.ReactNode;
};

export default Oscar;
