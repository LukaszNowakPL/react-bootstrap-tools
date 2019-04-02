export interface AlertBoxProps {
  id?: string;
  dismissible?: boolean;
  closeLabel?: string;
  variant?: VariantValues;
  withIcon?: string | true;
  message: any;
  waitingItems?: number;
  className?: string;
  iconClassName?: string;
  withCollapse?: true;
  onEnter?: (id: string) => void;
  onEntering?: (id: string) => void;
  onEntered?: (id: string) => void;
  onExit?: (id: string) => void;
  onExiting?: (id: string) => void;
  onExited?: (id: string) => void;
  hideAfter?: number;
}

export interface AlertBoxState {
  in: boolean;
  shouldOpen: boolean;
  shouldClose: boolean;
  id: string;
}

export interface GetAlertProps {
  props: AlertBoxProps;
  state: AlertBoxState;
  methods: GetAlertPropsMethods;
}

export interface GetAlertPropsMethods {
  onClose: () => void;
}

export interface AlertProps {
  id: string;
  dismissible?: boolean;
  closeLabel?: string;
  variant?: VariantValues;
  className?: string;
  iconClassName?: string;
  onClose?: () => void;
}

export interface GetTransitionProps {
  state: AlertBoxState;
  methods: GetTransitionPropsMethods;
}

export interface GetTransitionPropsMethods {
  onEnter: () => void;
  onEntering: () => void;
  onEntered: () => void;
  onExit: () => void;
  onExiting: () => void;
  onExited: () => void;
}

export interface TransitionProps {
  in: boolean;
  onEnter: () => void;
  onEntering: () => void;
  onEntered: () => void;
  onExit: () => void;
  onExiting: () => void;
  onExited: () => void;
  timeout?: number;
}

export interface ConfigInterface {
  defaultIcon: string;
  variantIcons: object;
  defaultWrapperClassName: string;
  defaultIconClassName: string;
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
