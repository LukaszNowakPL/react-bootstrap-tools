import * as React from "react";
import { AlertBox } from "../../../lib";
import "./style.scss";

const CustomStyleExample = () => (
  <div>
    <h3>Custom style example</h3>
    <p>Component with customised style.</p>
    <AlertBox
      variant="danger"
      message="Text message"
      withIcon
      waitingItems={4}
      dismissible
      className="AlertBoxAlternateStyle"
      iconClassName="AlertBoxAlternateStyle__icon"
    />
  </div>
);

export default CustomStyleExample;
