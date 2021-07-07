import "./List.css";

import React from "react";

const List = ({children, ordered, plain, dense}) => {
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
