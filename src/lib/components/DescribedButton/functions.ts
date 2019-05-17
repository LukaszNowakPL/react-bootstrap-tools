import { ButtonProps, DescribedButtonProps } from "./interfaces";
import { DescribedComponentProps } from "../DescribedComponent/interfaces";
import { GlyphiconProps } from "../Glyphicon/interfaces";

/**
 * Returns props used by Button component
 * @param props
 */
export const getButtonProps = (props: DescribedButtonProps) => {
  const buttonProps: ButtonProps = {};

  if (props.name) buttonProps.name = props.name;
  if (props.type) buttonProps.type = props.type;
  if (!!props.active || props.active === false)
    buttonProps.active = props.active;
  if (!!props.block || props.block === false) buttonProps.block = props.block;
  if (!!props.disabled || props.disabled === false)
    buttonProps.disabled = props.disabled;
  if (props.href) buttonProps.href = props.href;
  if (props.href && props.hrefNewWindow) buttonProps.target = "_blank";
  if (props.size) buttonProps.size = props.size;
  if (props.variant) buttonProps.variant = props.variant;
  if (props.buttonClassName) buttonProps.className = props.buttonClassName;
  if (props.id) buttonProps.id = props.id;
  if (props.bsPrefix) buttonProps.bsPrefix = props.bsPrefix;

  if (props.onClick) {
    if (
      props.onClickArg ||
      props.onClickArg === false ||
      props.onClickArg === 0 ||
      props.onClickArg === null
    ) {
      buttonProps.onClick = ev => props.onClick(props.onClickArg, ev);
    } else {
      buttonProps.onClick = props.onClick;
    }
  }

  return buttonProps;
};

/**
 * Returns props used by DescribedComponent
 * @param props
 */
export const getDescribedComponentProps = (props: DescribedButtonProps) => {
  const describedComponentProps: DescribedComponentProps = {
    children: null
  };

  if (props.description)
    describedComponentProps.description = props.description;
  if (props.className) describedComponentProps.className = props.className;
  if (props.placement) describedComponentProps.placement = props.placement;
  if (props.delay) describedComponentProps.delay = props.delay;
  if (!!props.defaultShow || props.defaultShow === false)
    describedComponentProps.defaultShow = props.defaultShow;
  if (props.trigger) describedComponentProps.trigger = props.trigger;

  return describedComponentProps;
};

/**
 * Returns props used by Glyphicon component
 * @param props
 */
export const getGlyphiconProps = (props: DescribedButtonProps) => {
  const glyphiconProps: GlyphiconProps = {
    icon: props.icon || ""
  };

  if (props.iconClassName) glyphiconProps.className = props.iconClassName;

  return glyphiconProps;
};
