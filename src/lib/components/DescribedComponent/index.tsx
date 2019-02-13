import * as React from "react";
import {
  DescribedComponentProps,
  OverlayTriggerProps,
  TooltipProps
} from "./interfaces";
import { getOverlayTriggerProps, getTooltipProps } from "./functions";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const DescribedComponent = (props: DescribedComponentProps) => {
  const { children, description } = props;

  if (description) {
    const tooltipProps: TooltipProps = getTooltipProps(props);

    const overlayTriggerProps: OverlayTriggerProps = getOverlayTriggerProps(
      props
    );

    const overlay = <Tooltip {...tooltipProps}>{description}</Tooltip>;

    return (
      <OverlayTrigger {...overlayTriggerProps} overlay={overlay}>
        {children}
      </OverlayTrigger>
    );
  }
  return <span>{props.children}</span>;
};

export default DescribedComponent;
