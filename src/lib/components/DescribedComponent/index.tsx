import * as React from "react";
import { PureComponent } from "react";
import {
  DescribedComponentProps,
  OverlayTriggerProps,
  TooltipProps
} from "./interfaces";
import { getOverlayTriggerProps, getTooltipProps } from "./functions";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class DescribedComponent extends PureComponent<DescribedComponentProps> {
  displayName: string = "DescribedComponent";

  render() {
    const { children, description } = this.props;

    if (description) {
      const tooltipProps: TooltipProps = getTooltipProps(this.props);

      const overlayTriggerProps: OverlayTriggerProps = getOverlayTriggerProps(
        this.props
      );

      const overlay = <Tooltip {...tooltipProps}>{description}</Tooltip>;

      return (
        <OverlayTrigger {...overlayTriggerProps} overlay={overlay}>
          {children}
        </OverlayTrigger>
      );
    }
    return <span>{this.props.children}</span>;
  }
}

export default DescribedComponent;
