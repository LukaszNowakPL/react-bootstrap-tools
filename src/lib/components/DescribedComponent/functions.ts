import {
  DescribedComponentProps,
  OverlayTriggerProps,
  TooltipProps
} from "./interfaces";
import config from "./config";

/**
 * Returns props used by OverlayTrigger component
 * @param props
 */
export const getOverlayTriggerProps = (props: DescribedComponentProps) => {
  const overlayTriggerProps: OverlayTriggerProps = {
    overlay: null
  };

  if (props.defaultShow) overlayTriggerProps.defaultShow = props.defaultShow;
  if (props.delay) overlayTriggerProps.delay = props.delay;
  if (props.trigger) overlayTriggerProps.trigger = props.trigger;
  if (props.placement) overlayTriggerProps.placement = props.placement;

  return overlayTriggerProps;
};

/**
 * Returns props used by Tooltip component
 * @param props
 */
export const getTooltipProps = (props: DescribedComponentProps) => {
  const tooltipProps: TooltipProps = {
    id: config.defaultTooltipId,
    className: getTooltipClassName(
      config.defaultTooltipClassName,
      props.className
    )
  };

  return tooltipProps;
};

/**
 * Returns class name of a Tooltip component
 * @param defaultClassName
 * @param className - additional class name
 */
const getTooltipClassName = (
  defaultClassName: string,
  className: string | undefined
): string => {
  if (className) return defaultClassName + " " + className;

  return defaultClassName;
};
