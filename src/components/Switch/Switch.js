import React from "react";
import Container from "../Container";
import "./Switch.css";

const Switch = ({
  size,
  checked,
  onClick,
  label,
  containerComponentProps,
  labelComponentProps,
  inputComponentProps,
  sliderComponentProps,
}) => {
  const onToggle = (event) => onClick(event.target.checked);

  return (
    <Container
      flex
      style={{
        alignItems: "center",
      }}
      {...containerComponentProps}
    >
      <label className={`Switch ${size || "large"}`}>
        <input
          checked={checked}
          onClick={onToggle}
          className="SwitchInput"
          type="checkbox"
          {...inputComponentProps}
        />{" "}
        <span
          {...sliderComponentProps}
          className="Switch-slider Switch-round"
        ></span>
      </label>
      <p
        {...labelComponentProps}
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
