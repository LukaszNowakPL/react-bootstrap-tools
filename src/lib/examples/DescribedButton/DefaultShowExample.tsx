import * as React from "react";
import { DescribedButton } from "../../../lib";

const DefaultShowExample = () => (
  <div>
    <h3>DefaultShow</h3>
    <p>
      Pass <code>defaultShow</code> prop to make <code>Tooltip</code> component
      visible from beginning.
    </p>
    <DescribedButton
      description="This description is visible from beginning"
      defaultShow={true}
      text="button text"
    />
  </div>
);

export default DefaultShowExample;
