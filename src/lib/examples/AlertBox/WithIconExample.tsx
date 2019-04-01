import * as React from "react";
import { AlertBox } from "../../../lib";

const WithIconExample = () => (
  <div>
    <h3>With icon example</h3>
    <p>Component with icon to decorate the message.</p>
    <AlertBox variant="danger" message="Text message" withIcon />
  </div>
);

export default WithIconExample;
