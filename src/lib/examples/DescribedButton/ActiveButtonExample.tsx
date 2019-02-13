import * as React from "react";
import { DescribedButton } from "../../../lib";

const ActiveButtonExample = () => (
  <div>
    <h3>Active/Non-active button example</h3>
    <p>
      Pass <code>active</code> prop set to <code>false</code> to inactivate the{" "}
      <code>Button</code> component.
    </p>
    <DescribedButton
      description="description text"
      text="Active prop: true"
      active={true}
    />
    <DescribedButton
      description="description text"
      text="Active prop: false"
      active={false}
    />
  </div>
);

export default ActiveButtonExample;
