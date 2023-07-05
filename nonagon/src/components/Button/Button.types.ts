import { BaseProps } from "../../types/BaseProps";

interface BaseButtonProps extends BaseProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;

  /**
   * Only for icon buttons, makes the button circular.
   * Does nothing if `icon` is not set or `children` is set.
   */
  circle?: boolean;
}

export type ButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
