import { ButtonProps } from "../Button/Button.types";

export interface TagProps extends Omit<ButtonProps, "icon" | "circle"> {
  showClose?: boolean;
  onClose?: () => void;
}
