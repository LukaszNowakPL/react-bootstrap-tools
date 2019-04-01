import * as React from "react";
import { AlertBoxGroup } from "../../lib";
import { AlertBoxProps } from "../../lib/components/AlertBox/interfaces";

// import BasicExample from "../../lib/examples/AlertBoxGroup/BasicExample";

const AlertBoxGroupCard = () => {
  const alertPrototype: AlertBoxProps = {
    variant: "info",
    dismissible: true,
    withIcon: true,
    withCollapse: true,
    message: "text message "
  };

  return (
    <div>
      <p>
        To fire up examples of usage import any component from{" "}
        <code>src/lib/examples/AlertBoxGroup</code> folder (i.e.{" "}
        <code>BasicExample</code> hashed on code of this demo).
      </p>
      {/*<div><BasicExample /></div>*/}
      <hr />
      <h3>Playground</h3>
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
};

export default AlertBoxGroupCard;
