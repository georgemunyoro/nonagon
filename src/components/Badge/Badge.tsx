import clsx from "clsx";
import { BadgeProps } from "./Badge.types";

export const Badge = ({ variant, children, ...rest }: BadgeProps) => {
  const variantClasses = {
    primary: "bg-browk-primary text-white",
    secondary: "border-2 border-browk-primary text-browk-primary",
    white: "bg-white text-browk-primary border-browk-gray border-[1px] shadow-browk",
  };

  return (
    <div
      {...rest}
      className={clsx(
        "rounded-full px-2 py-1 text-xs font-semibold w-fit",
        variantClasses[variant ?? "primary"]
      )}
    >
      {children}
    </div>
  );
};
