import * as React from "react";
import { AlertBox } from "../../../lib";

const BasicExample = () => (
  <div>
    <h3>Basic example</h3>
    <p>Some description.</p>
    <AlertBox variant="danger" message="text message" />
  </div>
);

export default BasicExample;
