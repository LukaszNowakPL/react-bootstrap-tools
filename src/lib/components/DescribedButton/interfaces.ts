import {
  PlacementValues,
  TriggerValues
} from "../DescribedComponent/interfaces";

export interface DescribedButtonProps {
  name?: string;
  type?: TypeValues;
  active?: boolean;
  block?: boolean;
  disabled?: boolean;
  href?: string;
  hrefNewWindow?: boolean;
  size?: SizeValues;
  variant?: VariantValues;
  buttonClassName?: string;
  text?: string;
  icon?: string;
  iconClassName?: string;
  onClick?: any;
  onClickArg?: any;
  id?: string;
  bsPrefix?: string;

  description?: string;
  className?: string;
  placement?: PlacementValues;
  delay?: number;
  defaultShow?: boolean;
  trigger?: TriggerValues;
}

export interface ButtonProps {
  name?: string;
  type?: TypeValues;
  active?: boolean;
  block?: boolean;
  disabled?: boolean;
  href?: string;
  target?: "_blank";
  size?: SizeValues;
  variant?: VariantValues;
  className?: string;
  onClick?: any;
  onClickArg?: any;
  id?: string;
  bsPrefix?: string;
}

type SizeValues = "sm" | "lg";

type TypeValues = "button" | "reset" | "submit";

type VariantValues =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "dark"
  | "light"
  | "link"
  | "outline-primary"
  | "outline-secondary"
  | "outline-success"
  | "outline-danger"
  | "outline-warning"
  | "outline-info"
  | "outline-dark"
  | "outline-light";
