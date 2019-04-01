import * as React from "react";
import { AlertBox } from "../../../lib";

const BasicExample = () => (
  <div>
    <h3>Basic example</h3>
    <p>Simplest component with message.</p>
    <AlertBox variant="info" message="Text message" />
  </div>
);

export default BasicExample;
