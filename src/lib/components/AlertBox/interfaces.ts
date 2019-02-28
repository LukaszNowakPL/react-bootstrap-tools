export interface AlertBoxProps {
  dismissible?: boolean;
  closeLabel?: string;
  onClose?: any;
  show?: boolean;
  transition?: any;
  variant?: VariantValues;
  withIcon?: string | true;
  message?: any;
  waitingItems?: number;
}

export interface AlertProps {
  dismissible?: boolean;
  closeLabel?: string;
  onClose?: any;
  show?: boolean;
  transition?: any;
  variant?: VariantValues;
}

export interface ConfigInterface {
  defaultIcon: string;
  variantIcons: object;
}

type VariantValues =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "dark"
  | "light";
