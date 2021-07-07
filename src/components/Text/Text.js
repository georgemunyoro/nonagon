import "./Text.css";

import React from "react";

const Text = ({
  children,
  type,
  weight,
  size,
  align,
  color,
  display,
  textWrap,
  paragraph,
  classes = [],
}) => {
  const style = {
    fontWeight: weight,
    fontSize: `${size}px`,
    textAlign: align,
    color,
    display,
    textWrap,
    marginBottom: paragraph ? "10px" : "",
  };

  classes.push("Text");

  switch (type) {
    case "h1":
      return (
        <h1 className={classes} style={style}>
          {children}
        </h1>
      );
      break;

    case "h2":
      return (
        <h2 className={classes} style={style}>
          {children}
        </h2>
      );
      break;

    case "h3":
      return (
        <h3 className={classes} style={style}>
          {children}
        </h3>
      );
      break;

    case "h4":
      return (
        <h4 className={classes} style={style}>
          {children}
        </h4>
      );
      break;

    case "h5":
      return (
        <h5 className={classes} style={style}>
          {children}
        </h5>
      );
      break;

    case "h6":
      return (
        <h6 className={classes} style={style}>
          {children}
        </h6>
      );
      break;

    default:
      return (
        <p className={classes} style={style}>
          {children}
        </p>
      );
      break;
  }
};

export default Text;
