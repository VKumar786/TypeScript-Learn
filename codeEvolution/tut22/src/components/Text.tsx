const Text = <E extends React.ElementType>({
  size,
  color,
  children,
  as,
  ...rest
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <>
      <Component className={`${size} ${color}`} {...rest}>
        {children}
      </Component>
    </>
  );
};

type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  as?: E;
  children: React.ReactNode;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export default Text;
