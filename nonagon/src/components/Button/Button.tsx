import { ButtonProps } from "./Button.types";
import "../../index.css";
import clsx from "clsx";
import { SpinnerIos } from "styled-icons/fluentui-system-regular";

export const Button = ({
  children,
  variant,
  loading,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(
        "h-10 flex items-center justify-center gap-2",
        getButtonVariantStyle(variant ?? "primary"),
        {
          "rounded-md": !rest.circle || !!children,
          "rounded-full": rest.circle,
          "px-3": !!children,
          "w-10": !!icon && !children,
        },
        rest.className
      )}
      disabled={loading || rest.disabled}
    >
      {loading ? (
        <span>
          <SpinnerIos size={25} className="animate-spin" />
        </span>
      ) : (
        <>{icon && <span>{icon}</span>}</>
      )}
      {children && <span>{children}</span>}
    </button>
  );
};

const getButtonVariantStyle = (variant: string) => {
  switch (variant ?? "primary") {
    case "primary":
      return "bg-browk-primary border-browk-primary border-2 hover:bg-browk-hover hover:border-browk-hover active:bg-browk-active focus:border-browk-primary text-white disabled:bg-browk-disabled disabled:border-browk-disabled";
    case "secondary":
      return "bg-white border-2 border-browk-primary text-browk-primary focus:border-browk-gray-s-48 active:bg-browk-disabled disabled:bg-white disabled:border-browk-disabled disabled:text-browk-disabled";
  }
};
