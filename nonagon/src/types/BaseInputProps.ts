import { BaseProps } from "./BaseProps";

export interface BaseInputProps extends BaseProps {
  name?: string;
  value?: string | number;
  defaultValue?: string | number;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
}
