import * as React from "react";
import { DescribedButton } from "../../../lib";

const DisabledButtonExample = () => (
  <div>
    <h3>Disabled button example</h3>
    <p>
      Pass <code>disabled</code> prop set to <code>true</code> to disable
      (inactivate) the <code>Button</code> component. Even if{" "}
      <code>Button</code> will be disabled, description will appear.
    </p>
    <DescribedButton
      description="description text"
      text="Disabled prop: true"
      disabled={true}
    />
    <DescribedButton
      description="description text"
      text="Disabled prop: false"
      disabled={false}
    />
  </div>
);

export default DisabledButtonExample;
