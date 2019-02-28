import * as React from "react";
import { AlertBox } from "../../lib";
// import BasicExample from "../../lib/examples/AlertBox/BasicExample";

const AlertBoxCard = () => (
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
      closeLabel="close me"
      dismissible
      onClose={() => alert("a")}
      show
      withIcon
      message={<span>some text message</span>}
      // waitingItems={4}
    />
  </div>
);

export default AlertBoxCard;
