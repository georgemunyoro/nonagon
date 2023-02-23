import React from "react";
import "./List.css";

interface ListProps {
  children?: React.ReactNode[];
  ordered?: boolean;
  plain?: boolean;
  dense?: boolean;
}

const List = ({ children, ordered, plain, dense }: ListProps) => {
  const classes = `List ${plain && "plain"} ${dense && "dense"}`;

  return (
    <div>
      {ordered ? (
        <ol className={classes}>{children}</ol>
      ) : (
        <ul className={classes}>{children}</ul>
      )}
    </div>
  );
};

export default List;
