import { AlertBoxProps, AlertProps } from "./interfaces";
import config from "./config";

/**
 * Returns props used by Alert component
 * @param props
 */
export const getAlertProps = (props: AlertBoxProps) => {
  const alertProps: AlertProps = {};

  const { dismissible, closeLabel, onClose, show, variant } = props;

  if (dismissible) alertProps.dismissible = dismissible;
  if (closeLabel) alertProps.closeLabel = closeLabel;
  if (onClose) alertProps.onClose = onClose;
  if (show) alertProps.show = show;
  if (variant) alertProps.variant = variant;

  return alertProps;
};

/**
 * Returns icon depending on variant type of Alert
 * @param variant
 */
export const getCustomIconType = variant => {
  return config.variantIcons[variant] || config.defaultIcon;
};
