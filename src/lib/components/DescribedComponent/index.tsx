import * as React from "react";
import config from "./config";
import {
  DescribedComponentProps,
  OverlayTriggerProps,
  TooltipProps
} from "./interfaces";
import { getTooltipClassName } from "./functions";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const DescribedComponent = (props: DescribedComponentProps) => {
  if (props.description) {
    const {
      children,
      description,
      className,
      ...otherOverlayTriggerProps
    } = props;

    const tooltipProps: TooltipProps = {
      id: config.defaultTooltipId,
      className: getTooltipClassName(config.defaultTooltipClassName, className)
    };

    const overlayTriggerProps: OverlayTriggerProps = {
      overlay: <Tooltip {...tooltipProps}>{description}</Tooltip>,
      ...otherOverlayTriggerProps
    };

    return <OverlayTrigger {...overlayTriggerProps}>{children}</OverlayTrigger>;
  }
  return <span>{props.children}</span>;
};

export default DescribedComponent;
