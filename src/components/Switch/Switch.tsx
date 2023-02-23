import React from "react";
import Container from "../Container";
import "./Switch.css";

interface SwitchProps {
  size?: "small" | "medium" | "large";
  checked?: boolean;
  onClick?: (checked: boolean) => void;
  label?: string;
  containerComponentProps?: React.HTMLAttributes<HTMLDivElement>;
  labelComponentProps?: React.HTMLAttributes<HTMLParagraphElement>;
  inputComponentProps?: React.HTMLAttributes<HTMLInputElement>;
  sliderComponentProps?: React.HTMLAttributes<HTMLSpanElement>;
}

const Switch = ({
  size,
  checked,
  onClick,
  label,
  containerComponentProps,
  labelComponentProps,
  inputComponentProps,
  sliderComponentProps,
}: SwitchProps) => {
  const onToggle = (event) => onClick && onClick(event.target.checked);

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
