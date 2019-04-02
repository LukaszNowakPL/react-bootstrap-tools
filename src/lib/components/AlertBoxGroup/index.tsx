import * as React from "react";
import { PureComponent } from "react";
import { AlertBoxGroupProps } from "./interfaces";
import config from "./config";
import AlertBox from "../AlertBox/index";

class AlertBoxGroup extends PureComponent<AlertBoxGroupProps> {
  displayName: string = "AlertBoxGroup";

  render() {
    const { alerts } = this.props;

    const maxAlerts = this.props.maxAlerts
      ? this.props.maxAlerts
      : config.maxAlerts;

    if (alerts.length > maxAlerts)
      return (
        <AlertBox
          key={alerts[0].id}
          {...alerts[0]}
          waitingItems={alerts.length}
        />
      );

    return (
      <React.Fragment>
        {alerts.map(alert => (
          <AlertBox key={alert.id} {...alert} />
        ))}
      </React.Fragment>
    );
  }
}

export default AlertBoxGroup;
