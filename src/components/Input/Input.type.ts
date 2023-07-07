import { BaseInputProps } from "../../types/BaseInputProps";

export type InputProps = BaseInputProps &
  React.HTMLProps<HTMLInputElement> & {
    error?: string | boolean;
    success?: string | boolean;
    description?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };
