import * as React from "react";
import { AlertBoxGroup } from "../../../lib";
import { AlertBoxProps } from "../../components/AlertBox/interfaces";

const alertPrototype: AlertBoxProps = {
  variant: "info",
  dismissible: true,
  withIcon: true,
  withCollapse: true,
  message: ""
};

const UngroupedExample = () => (
  <div>
    <h3>All components shown example</h3>
    <p>Component with all alerts shown.</p>
    <AlertBoxGroup
      maxAlerts={10}
      alerts={[
        { ...alertPrototype, id: "0", message: "info message" },
        {
          ...alertPrototype,
          id: "1",
          variant: "danger",
          message: "danger message with no icon",
          withIcon: undefined
        },
        {
          ...alertPrototype,
          id: "2",
          variant: "secondary",
          message: "secondary message with no cancel button",
          dismissible: undefined
        },
        { ...alertPrototype, id: "3", message: "another message" },
        {
          ...alertPrototype,
          id: "4",
          variant: "warning",
          message: "warning message with custom icon",
          withIcon: "add"
        }
      ]}
    />
  </div>
);

export default UngroupedExample;
