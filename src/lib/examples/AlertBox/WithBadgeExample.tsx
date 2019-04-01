import * as React from "react";
import { AlertBox } from "../../../lib";

const WithBadgeExample = () => (
  <div>
    <h3>With badge example</h3>
    <p>Component with badge showing number of waiting elements.</p>
    <AlertBox variant="info" message="Text message" waitingItems={3} />
  </div>
);

export default WithBadgeExample;
