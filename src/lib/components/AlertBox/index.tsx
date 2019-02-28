import * as React from "react";
import { PureComponent } from "react";
import { AlertBoxProps, AlertProps } from "./interfaces";
import { Alert, Badge } from "react-bootstrap";
import { getAlertProps, getCustomIconType } from "./functions";
import Glyphicon from "../Glyphicon";

const IconComponent = (props: AlertBoxProps) => {
  const { withIcon, variant } = props;

  if (withIcon) {
    const icon = withIcon === true ? getCustomIconType(variant) : withIcon;

    return <Glyphicon icon={icon} />;
  }

  return null;
};

const BadgeComponent = (props: AlertBoxProps) => {
  const { variant, waitingItems } = props;

  if (waitingItems) {
    return <Badge variant={variant}>{waitingItems}</Badge>;
  }

  return null;
};

class AlertBox extends PureComponent<AlertBoxProps> {
  render() {
    const alertProps: AlertProps = getAlertProps(this.props);

    const { withIcon, message } = this.props;

    const iconComponent = withIcon ? IconComponent(this.props) : null;
    const badgeComponent = withIcon ? BadgeComponent(this.props) : null;

    return (
      <Alert {...alertProps}>
        {iconComponent}
        {badgeComponent}
        {message}
      </Alert>
    );
  }
}

export default AlertBox;
