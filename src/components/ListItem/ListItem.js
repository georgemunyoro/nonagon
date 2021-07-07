import "./ListItem.css";

import React from "react";

import Button from "../Button";

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
  if (button)
    return (
      <div className="ListItemButton">
        <Button label={buttonLabel} />
      </div>
    );
  return (
    <li className="ListItem">
      <div className="ListItemLeftIcon">{leftIcon}</div>
      <div className="ListItemLabel">{label}</div>
      <div className="ListItemSecondaryText">{secondaryText}</div>
      <div className="ListItemRightIcon">{rightIcon}</div>
      {children}
    </li>
  );
};

export default ListItem;
