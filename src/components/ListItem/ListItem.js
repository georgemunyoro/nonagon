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
  leftIconContainerProps,
  labelContainerProps,
  secondaryTextContainerProps,
  rightIconContainerProps,
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
      <div className="ListItemLeftIcon" {...leftIconContainerProps}>
        {leftIcon}
      </div>
      <div className="ListItemLabel" {...labelContainerProps}>
        {label}
      </div>
      <div className="ListItemSecondaryText" {...secondaryTextContainerProps}>
        {secondaryText}
      </div>
      <div className="ListItemRightIcon" {...rightIconContainerProps}>
        {rightIcon}
      </div>
      {children}
    </li>
  );
};

export default ListItem;
