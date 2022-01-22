import "./Switch.css";

import React from "react";

import Container from "../Container";

const Switch = ({ size, checked, onClick, label }) => {
  const onToggle = (event) => {
    onClick(event.target.checked);
  };

  return (
    <Container
      flex
      style={{
        alignItems: "center",
      }}
    >
      <label className={`Switch ${size || "large"}`}>
        <input
          checked={checked}
          onClick={onToggle}
          className="SwitchInput"
          type="checkbox"
        />{" "}
        <span className="Switch-slider Switch-round"></span>
      </label>
      <p
        style={{
          paddingLeft: "10px",
        }}
      >
        {label}
      </p>
    </Container>
  );
};

export default Switch;
