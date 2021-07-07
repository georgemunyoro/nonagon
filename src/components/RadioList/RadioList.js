import "./RadioList.css";

import React from "react";
import { v4 as uuidv4 } from "uuid";

const RadioList = ({ data, onSelect, horizontal }) => {
  const name = uuidv4();

  return (
    <div className={`RadioList ${horizontal && "horizontal"}`}>
      {data.map(({ label, value }) => {
        const id = uuidv4();
        return (
          <div>
            <input
              onClick={() => onSelect(value)}
              className="RadioItem"
              type="radio"
              {...{ id, value, name }}
            />
            <label for={id}>{label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioList;
