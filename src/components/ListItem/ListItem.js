import React from "react";

import Button from "../Button";

import "./ListItem.css";

const ListItem = ({
  alignItems,
  autoFocus,
  button,
  label,
  children,
  secondaryText,
  leftIcon,
  rightIcon,
  dense,
  disabled,
  divider,
}) => {
  const style = {
    alignItems,
  };

  if (button)
    return (
      <div style={style} auto className="ListItemButton">
        <Button label={label} />
      </div>
    );
  return (
    <li className="ListItem" style={style}>
      <div className="ListItemLeftIcon">{leftIcon}</div>
      <div className="ListItemLabel">{label}</div>
      <div className="ListItemSecondaryText">{secondaryText}</div>
      <div className="ListItemRightIcon">{rightIcon}</div>
      {children}
    </li>
  );
};

export default ListItem;
