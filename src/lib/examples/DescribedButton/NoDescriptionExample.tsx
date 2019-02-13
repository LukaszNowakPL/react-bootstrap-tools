import * as React from "react";
import { DescribedButton } from "../../../lib";

const NoDescriptionExample = () => (
  <div>
    <h3>No description</h3>
    <p>
      If you pass no <code>description</code> prop, the module will only render
      the <code>Button</code> component.
    </p>
    <DescribedButton text="button text" />
  </div>
);

export default NoDescriptionExample;
