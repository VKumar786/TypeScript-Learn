const RandomNumber1 = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: PositiveNumber | NegativeNumber | Zero) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}
      {isZero && "zero"}
    </div>
  );
};

type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};

type Zero = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero?: boolean;
};

export default RandomNumber1;
