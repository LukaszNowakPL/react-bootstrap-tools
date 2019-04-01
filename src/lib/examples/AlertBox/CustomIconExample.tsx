import * as React from "react";
import { AlertBox } from "../../../lib";
import "./style.scss";

const CustomIconExample = () => (
  <div>
    <h3>Custom icon example</h3>
    <p>Component with custom icon and custom icon style.</p>
    <AlertBox
      variant="danger"
      message="Text message"
      withIcon="add"
      iconClassName="AlertBoxAlternateStyle__icon"
    />
  </div>
);

export default CustomIconExample;
