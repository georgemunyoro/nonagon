import { useState } from "react";
import { SwitchProps } from "./Switch.types";
import clsx from "clsx";

export const Switch = ({
  checked,
  defaultChecked,
  disabled,
  ...rest
}: SwitchProps) => {
  const [isActuallyChecked, setIsActuallyChecked] = useState(
    defaultChecked || checked,
  );

  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <label
      className="w-fit rounded-2xl cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseOut={onMouseOut}
    >
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
          "pointer-events-none border-2 border-browk-disabled h-6 w-[45px] rounded-2xl flex items-center px-[2px] justify-between duration-200",
          {
            "bg-browk-primary border-browk-primary !justify-end":
              isActuallyChecked && !disabled,
            "!bg-browk-hover !border-browk-hover":
              isHovered && isActuallyChecked && !disabled,
            "bg-browk-disabled border-browk-disabled":
              disabled && isActuallyChecked,
            "border-purple-100": disabled && !isActuallyChecked,
          },
        )}
      >
        <div
          className={clsx("w-4 h-4 bg-browk-primary rounded-2xl duration-200", {
            "!bg-browk-hover": isHovered && !disabled,
            "!bg-white": isActuallyChecked,
            "!bg-browk-disabled": disabled && !isActuallyChecked,
          })}
        />
        {!isActuallyChecked && !disabled && (
          <div className="w-4 h-4 flex items-center justify-center">
            <div
              className={clsx(
                "w-[12px] h-[12px] border-2 border-purple-100 rounded-2xl",
                {
                  "!border-browk-disabled": isHovered,
                },
              )}
            ></div>
          </div>
        )}
      </div>
    </label>
  );
};
