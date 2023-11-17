import { useState } from "react";

const Alert = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  const [close, setClose] = useState(false);
  return (
    <div
      className={`alert alert-warning alert-dismissible fade ${show && "show"}`}
      role="alert"
    >
      A simple primary alert—check it out!
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
