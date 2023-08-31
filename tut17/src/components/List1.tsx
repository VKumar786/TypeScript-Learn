const List1 = <T extends string | number | ObjectProps>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item, idx) => {
        return (
          <div key={idx} onClick={() => onClick(item)}>
            {item?.fname} {item?.lname}
          </div>
        );
      })}
    </div>
  );
};

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

type ObjectProps = {
  fname: string;
  lname: string;
};

export default List1;
