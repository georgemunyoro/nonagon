import React from "react";
import Button from "../Button";
import "./ListItem.css";

interface ListItemProps {
  alignItems?: "flex-start" | "center" | "flex-end";
  autoFocus?: boolean;
  button?: boolean;
  label?: string;
  children?: React.ReactNode;
  secondaryText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIconContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  labelContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  secondaryTextContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  rightIconContainerProps?: React.HTMLAttributes<HTMLDivElement>;
}

const ListItem = ({
  alignItems,
  button,
  label,
  children,
  secondaryText,
  leftIcon,
  rightIcon,
  leftIconContainerProps,
  labelContainerProps,
  secondaryTextContainerProps,
  rightIconContainerProps,
}: ListItemProps) => {
  const style = {
    alignItems,
  };

  if (button)
    return (
      <div style={style} className="ListItemButton">
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
