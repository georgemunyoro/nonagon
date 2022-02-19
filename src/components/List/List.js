import React from "react";
import "./List.css";

const List = ({ children, ordered, plain, dense }) => {
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
