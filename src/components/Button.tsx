import React from "react";

interface Props {
  text: string;
  color: "danger" | "success" | "warning" | "primary";
  setOpen: (open: boolean) => void;
}

const Button = ({ text, color, setOpen }: Props) => {
  const onClickHandler = () => {
    setOpen(true);
  };
  return (
    <button
      type="button"
      className={`btn btn-${color}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
