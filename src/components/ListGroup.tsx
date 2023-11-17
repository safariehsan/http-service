import { useState } from "react";
import Button from "./Button";
import Alert from "./Alert";

interface Props {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, title, onSelectItem }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const onClickHandler = (index: number) => {
    setActiveIndex(index);
    onSelectItem(items[index]);
  };

  return (
    <div>
      <h1>{title}</h1>
      <ul className="list-group">
        {items &&
          items.map((item, index) => (
            <li
              className={`list-group-item ${activeIndex === index && "active"}`}
              key={item}
              onClick={() => onClickHandler(index)}
            >
              {item}
            </li>
          ))}
      </ul>
      <hr />
      <Button text="Show Alert" color="primary" setOpen={setOpen} />
      <Alert show={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default ListGroup;
