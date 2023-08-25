const Button1 = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <>
      <button className={`${variant}`} {...rest}>
        {children}
      </button>
    </>
  );
};

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export default Button1;
