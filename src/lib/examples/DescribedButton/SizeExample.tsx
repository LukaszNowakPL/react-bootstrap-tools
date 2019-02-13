import * as React from "react";
import { DescribedButton } from "../../../lib";

const SizeExample = () => (
  <div>
    <h3>Size example</h3>
    <p>
      Pass <code>size</code> prop custom size of a <code>Button</code>{" "}
      component.
    </p>
    <DescribedButton
      description="description text"
      text="size prop: sm"
      size="sm"
    />
    <DescribedButton description="description text" text="size prop not set" />
    <DescribedButton
      description="description text"
      text="size prop: lg"
      size="lg"
    />
  </div>
);

export default SizeExample;
