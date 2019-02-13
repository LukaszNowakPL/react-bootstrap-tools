import * as React from "react";
import { DescribedButton } from "../../../lib";

const BlockExample = () => (
  <div>
    <h3>Non-active button example</h3>
    <p>
      Pass <code>block</code> prop to expand the <code>Button</code> component
      to full width of it's parent.
    </p>
    <DescribedButton
      description="description text"
      text="button text"
      block={true}
    />
  </div>
);

export default BlockExample;
