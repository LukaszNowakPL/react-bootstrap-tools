import * as React from "react"

import config from "./config";
import {DescribedComponentProps, OverlayTriggerProps, TooltipProps} from "./interfaces";
import {getTooltipClassName} from "./functions";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const DescribedComponent = ({className, description, children, placement, ...otherProps}: DescribedComponentProps) => {

  if (description) {
      const tooltipProps: TooltipProps = {
          id: config.defaultTooltipId,
          className: getTooltipClassName(config.defaultTooltipClassName, className)
      }

      const tooltipComponent = (
          <Tooltip {...tooltipProps}>{description}</Tooltip>
      );

      const overlayTriggerProps:OverlayTriggerProps = {
          ...otherProps,
          placement: placement || config.defaultTooltipPlacement,
          overlay: tooltipComponent,
      }

      return (
          <OverlayTrigger {...overlayTriggerProps}>
              {children}
          </OverlayTrigger>
      );
  }
    return <span>{children}</span>;
};

export default DescribedComponent;
