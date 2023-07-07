import { BaseInputProps } from "../../types/BaseInputProps";

export type CheckboxProps = BaseInputProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    error?: boolean;
    indeterminate?: boolean;
    label?: string;
  };
