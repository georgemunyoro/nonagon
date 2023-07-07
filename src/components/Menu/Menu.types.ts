import { BaseProps } from "../../types/BaseProps";

export interface MenuOption {
  label: string;
  value: string | number;
}

export interface MenuSection {
  section: string;
  options: MenuOption[];
}

export interface MenuProps extends Omit<BaseProps, "children"> {
  open?: boolean;
  onClose?: () => void;
  options?: MenuOption[] | MenuSection[];
  onClickMenuOption?: (value: MenuOption["value"]) => void;
  isOpen?: boolean;
  position?: {
    x: number;
    y: number;
  };
}
