import * as React from "react";
import { AlertBoxGroup } from "../../../lib";
import { AlertBoxProps } from "../../components/AlertBox/interfaces";

const alertPrototype: AlertBoxProps = {
  variant: "info",
  dismissible: true,
  withIcon: true,
  withCollapse: true,
  message: "text message "
};

const BasicExample = () => (
  <div>
    <h3>Basic example</h3>
    <p>Component with grouped alerts.</p>
    <AlertBoxGroup
      maxAlerts={3}
      alerts={[1, 2, 3, 4, 5, 6].map(i => {
        return {
          ...alertPrototype,
          id: String(i),
          message: alertPrototype.message.concat(i)
        };
      })}
    />
  </div>
);

export default BasicExample;
