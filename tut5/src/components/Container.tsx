const Container = (props: ContainerProps) => {
  return (
    <div
      style={props.styles}
    >
      {props.title}
    </div>
  );
};

type ContainerProps = {
  styles: React.CSSProperties | undefined;
  title: string;
};

export default Container;
