const Button = ({ variant, children, ...rest }: ButtonProps) => {
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
} & React.ComponentProps<"button">;

export default Button;
