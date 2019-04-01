import {
  AlertBoxProps,
  AlertProps,
  TransitionProps,
  GetTransitionProps,
  GetAlertProps
} from "./interfaces";
import config from "./config";
import { GlyphiconProps } from "../Glyphicon/interfaces";

/**
 * Returns props used by Alert component
 * @param props
 */
export const getAlertProps = (conf: GetAlertProps) => {
  const { props, state, methods } = conf;
  const { dismissible, closeLabel, variant, className } = props;
  const { id } = state;

  const alertProps: AlertProps = { id };

  if (dismissible) {
    alertProps.dismissible = dismissible;
    alertProps.onClose = methods.onClose;
    if (closeLabel) alertProps.closeLabel = closeLabel;
  }
  if (variant) alertProps.variant = variant;
  if (className) alertProps.className = className;

  return alertProps;
};

/**
 * Returns props used by transition component
 * @param props
 */
export const getTransitionProps = (conf: GetTransitionProps) => {
  const { state, methods } = conf;

  const transitionProps: TransitionProps = {
    in: state.in,
    onEnter: methods.onEnter,
    onEntering: methods.onEntering,
    onEntered: methods.onEntered,
    onExit: methods.onExit,
    onExiting: methods.onExiting,
    onExited: methods.onExited
  };

  return transitionProps;
};

/**
 * Returns icon depending on variant type of Alert
 * @param variant
 */
export const getCustomIconType = variant => {
  return config.variantIcons[variant] || config.defaultIcon;
};

/**
 * Returns props used by Glyphicon component
 * @param props
 */
export const getGlyphiconProps = (props: AlertBoxProps) => {
  const { withIcon, variant, iconClassName } = props;
  const icon = withIcon === true ? getCustomIconType(variant) : withIcon;

  const glyphiconProps: GlyphiconProps = {
    icon
  };

  if (iconClassName) {
    glyphiconProps.className = config.defaultIconClassName.concat(
      " " + iconClassName
    );
  } else {
    glyphiconProps.className = config.defaultIconClassName;
  }

  return glyphiconProps;
};
