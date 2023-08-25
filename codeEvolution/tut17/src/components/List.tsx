const List = ({ items, onClick }: ListProps) => {
  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item, idx) => {
        return (
          <div key={idx} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

type ListProps = {
  items: string[] | number[];
  onClick: (value: string | number) => void;
};

export default List;
