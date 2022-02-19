import "./TextField.css";

import React from "react";

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
}) => {
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
    onChange(e.target.value);
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
