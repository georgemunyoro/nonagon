import clsx from "clsx";
import { InputProps } from "./Input.type";
import { useState } from "react";

export const Input = ({
  label,
  error,
  success,
  description,
  leftIcon,
  rightIcon,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(true);
    if (rest.onFocus) rest.onFocus(e);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(false);
    if (rest.onBlur) rest.onBlur(e);
  };

  const [value, setValue] = useState(rest.value ?? "");

  const isEmpty = value === undefined || value === "";

  return (
    <div>
      <div
        className={clsx("shadow-browk bg-white rounded-md flex items-center", {
          "!bg-browk-red-boy !shadow-browk-input-error": !!error,
          "!bg-browk-green-light !shadow-browk-input-success": !!success,
          "!bg-browk-gray-l": rest.disabled,
        })}
      >
        {leftIcon && <span className="pl-3 pr-2">{leftIcon}</span>}
        <div className="flex flex-col">
          {label && (
            <label
              className={clsx(
                "text-browk-gray-s-48 pointer-events-none duration-200 relative h-0",
                {
                  "text-[13px] left-4 top-[4px]": isFocused || !isEmpty,
                  "!left-0": !!leftIcon,
                  "top-[15px] left-4": !isFocused && isEmpty,
                }
              )}
            >
              {label}
            </label>
          )}
          <input
            {...rest}
            onFocus={onFocus}
            onBlur={onBlur}
            className={clsx(
              "h-[50px] rounded-md outline-none text-[15px]",
              {
                "bg-browk-gray-l": rest.disabled,
                "pt-4": !!label,
                "bg-browk-red-boy": !!error,
                "bg-browk-green-light": !!success,
                "pl-[16px]": !leftIcon,
                "pr-[16px]": !rightIcon,
              },
              rest.className
            )}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        {rightIcon && <span className="pl-3 pr-3">{rightIcon}</span>}
      </div>
      <div className="py-1">
        {typeof error === "string" && error.length > 0 && (
          <div className="text-sm text-browk-red py-1">{error}</div>
        )}
        {typeof success === "string" && success.length > 0 && (
          <div className="text-sm text-browk-green py-1">{success}</div>
        )}
        {typeof description === "string" && description.length > 0 && (
          <div className="text-sm text-browk-gray-k">{description}</div>
        )}
      </div>
    </div>
  );
};
