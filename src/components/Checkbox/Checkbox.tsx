import "./Checkbox.css";

import React from "react";

interface CheckboxProps {
  checked?: boolean;
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox = ({ checked = false, onChange, style }: CheckboxProps) => {
  return (
    <input
      style={style}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    ></input>
  );
};

export default Checkbox;
