import * as React from "react";
import { AlertBox } from "../../../lib";

const HtmlMessage = (
  <span>
    Message <strong>object</strong> as html may be anything.
    <ul>
      <li>even</li>
      <li>a</li>
      <li>list</li>
    </ul>
  </span>
);

const HtmlMessageExample = () => (
  <div>
    <h3>Html message example</h3>
    <p>Component message as an html object.</p>
    <AlertBox
      variant="info"
      message={HtmlMessage}
      withIcon
      waitingItems={4}
      dismissible
    />
  </div>
);

export default HtmlMessageExample;
