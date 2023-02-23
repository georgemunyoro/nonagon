import "./TextField.css";

import React from "react";

interface TextFieldProps {
  placeholder?: string;
  variant?: "input" | "textarea";
  fontSize?: string;
  spellCheck?: boolean;
  color?: string;
  background?: string;
  value?: string;
  onChange?: (value: string) => void;
  width?: string;
  padding?: string;
  margin?: string;
  height?: string;
  style?: React.CSSProperties;
}

const TextField = ({
  placeholder,
  variant = "input",
  fontSize,
  spellCheck,
  color,
  background,
  value = "",
  onChange,
  width,
  padding,
  margin,
  height,
  style,
}: TextFieldProps) => {
  const [text, setText] = React.useState(value);

  style = {
    fontSize,
    color,
    background,
    width,
    padding,
    margin,
    height,
    ...style,
  };

  const onValueChange = (e) => {
    setText(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <div className="TextField">
      {(() => {
        if (variant === "textarea") {
          return (
            <textarea
              {...{ spellCheck, style, placeholder }}
              value={text}
              onChange={onValueChange}
            ></textarea>
          );
        } else {
          return (
            <input
              {...{ spellCheck, style, placeholder }}
              value={text}
              onChange={onValueChange}
              type="text"
            />
          );
        }
      })()}
    </div>
  );
};

export default TextField;
