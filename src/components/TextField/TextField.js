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
  onChange
}) => {
  const [text, setText] = React.useState(value);

  const style = {
    fontSize,
    color,
    background,
  }

  const onValueChange = (e) => {
    setText(e.target.value);
    onChange(e.target.value);
  }

  return (
    <div className="TextField">
      {(() => {
        if (variant === "textarea") {
          return <textarea {...{ spellCheck, style, placeholder }} value={text} onChange={onValueChange}></textarea>
        } else {
          return <input {...{ spellCheck, style, placeholder }} value={text} onChange={onValueChange} type="text" />
        }
      })()}
    </div>
  )
};

export default TextField;
