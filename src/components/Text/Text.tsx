import React from "react";
import "./Text.css";

interface TextProps {
  children?: React.ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  weight?: "normal" | "bold" | "bolder" | "lighter" | "initial" | "inherit";
  size?: number;
  align?: "left" | "center" | "right" | "justify";
  color?: string;
  display?: "block" | "inline" | "inline-block" | "none";
  textWrap?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";
  paragraph?: boolean;
  classNames?: string;
  style?: React.CSSProperties;
}

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
  classNames = "",
  style,
}: TextProps) => {
  style = {
    fontWeight: weight,
    fontSize: `${size}px`,
    textAlign: align,
    color,
    display,
    marginBottom: paragraph ? "10px" : "",
    ...style,
  };

  classNames = `Text ${classNames}`;

  switch (type) {
    case "h1":
      return (
        <h1 className={classNames} style={style}>
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2 className={classNames} style={style}>
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3 className={classNames} style={style}>
          {children}
        </h3>
      );

    case "h4":
      return (
        <h4 className={classNames} style={style}>
          {children}
        </h4>
      );

    case "h5":
      return (
        <h5 className={classNames} style={style}>
          {children}
        </h5>
      );

    case "h6":
      return (
        <h6 className={classNames} style={style}>
          {children}
        </h6>
      );

    default:
      return (
        <p className={classNames} style={style}>
          {children}
        </p>
      );
  }
};

export default Text;
