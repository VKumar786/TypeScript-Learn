const Heading = (props: HeadingProps) => {
  return (
    <>
      <h4>{props.children}</h4>
    </>
  );
};

type HeadingProps = {
  children: string;
};

export default Heading;
