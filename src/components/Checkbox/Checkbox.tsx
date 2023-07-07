import { CheckboxProps } from "./Checkbox.types";
import "../../index.css";
import { Check } from "styled-icons/bootstrap";
import clsx from "clsx";
import { Minus } from "styled-icons/boxicons-regular";
import { useState } from "react";

export const Checkbox = ({
  children,
  indeterminate,
  disabled,
  checked,
  defaultChecked,
  label,
  error,
  ...rest
}: CheckboxProps) => {
  const [isActuallyChecked, setIsActuallyChecked] = useState(
    defaultChecked || checked,
  );

  return (
    <label className="flex gap-2 items-center">
      <input
        type="checkbox"
        className="hidden"
        checked={isActuallyChecked}
        onChange={(e) => {
          if (disabled) return;
          setIsActuallyChecked(e.target.checked);
          rest.onChange?.(e);
        }}
        disabled={disabled}
        {...rest}
      />
      <div
        className={clsx(
          "w-5 h-5 rounded-[3px] flex items-center justify-center border-browk-gray-s hover:bg-browk-gray-m border-[1px] shadow-sm",
          {
            "bg-browk-primary !border-browk-primary hover:!bg-browk-hover active:bg-browk-active":
              isActuallyChecked,
            "!border-browk-red-girl bg-browk-red-girl hover:!bg-red-50": error,
            "!bg-browk-disabled !border-browk-disabled hover:!bg-browk-disabled hover:!border-browk-disabled cursor-not-allowed":
              disabled && isActuallyChecked,
            "!bg-browk-gray-l cursor-not-allowed":
              disabled && !isActuallyChecked,
          },
        )}
      >
        {isActuallyChecked &&
          (indeterminate ? (
            <Minus
              size={19}
              className={clsx("mr-[1px] text-white", {
                "!text-browk-red": error,
              })}
            />
          ) : (
            <Check
              size={19}
              className={clsx("mr-[1px] text-white", {
                "!text-browk-red": error,
              })}
            />
          ))}
      </div>
      <div className={clsx(error && "text-browk-red")}>{label}</div>
    </label>
  );
};
