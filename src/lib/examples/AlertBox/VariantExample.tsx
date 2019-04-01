import * as React from "react";
import { AlertBox } from "../../../lib";

const VariantExample = () => (
  <div>
    <h3>Variant example</h3>
    <p>All available variants of component.</p>
    <AlertBox
      variant="primary"
      message="primary variant"
      withIcon
      waitingItems={4}
      dismissible
    />
    <AlertBox
      variant="secondary"
      message="secondary variant"
      withIcon
      waitingItems={4}
      dismissible
    />
    <AlertBox
      variant="success"
      message="success variant"
      withIcon
      waitingItems={4}
      dismissible
    />
    <AlertBox
      variant="danger"
      message="danger variant"
      withIcon
      waitingItems={4}
      dismissible
    />
    <AlertBox
      variant="warning"
      message="warning variant"
      withIcon
      waitingItems={4}
      dismissible
    />
    <AlertBox
      variant="info"
      message="info variant"
      withIcon
      waitingItems={4}
      dismissible
    />
    <AlertBox
      variant="dark"
      message="dark variant"
      withIcon
      waitingItems={4}
      dismissible
    />
    <AlertBox
      variant="light"
      message="light variant"
      withIcon
      waitingItems={4}
      dismissible
    />
  </div>
);

export default VariantExample;
