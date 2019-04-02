import * as React from "react";
import { AlertBox } from "../../../lib";

const WithCloseButtonExample = () => (
  <div>
    <h3>With close button example</h3>
    <p>Component with close button to dismiss the message.</p>
    <AlertBox variant="info" message="Text message" dismissible />
  </div>
);

export default WithCloseButtonExample;
