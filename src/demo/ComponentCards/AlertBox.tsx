import * as React from "react";
import { AlertBox } from "../../lib";

// import BasicExample from "../../lib/examples/AlertBox/BasicExample";

const AlertBoxCard = () => {
  return (
    <div>
      <p>
        To fire up examples of usage import any component from{" "}
        <code>src/lib/examples/AlertBox</code> folder (i.e.{" "}
        <code>BasicExample</code> hashed on code of this demo).
      </p>
      {/*<div><BasicExample /></div>*/}
      <hr />
      <h3>Playground</h3>
      <AlertBox
        variant="info"
        dismissible
        withIcon
        withCollapse
        message="text message (will auto-hide after 10 sec)"
        hideAfter={10000}
      />
    </div>
  );
};

export default AlertBoxCard;
