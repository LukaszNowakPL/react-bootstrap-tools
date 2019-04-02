import * as React from "react";
import { AlertBox } from "../../../lib";

const CloseButtonLabelExample = () => (
  <div>
    <h3>Close button label example</h3>
    <p>Component with custom label on close button hover.</p>
    <AlertBox
      variant="info"
      message="Text message"
      withIcon
      waitingItems={4}
      dismissible
      closeLabel="custom close label"
    />
  </div>
);

export default CloseButtonLabelExample;
