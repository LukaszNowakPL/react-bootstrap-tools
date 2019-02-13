import * as React from "react";
import { DescribedButton } from "../../../lib";

const DelayExample = () => (
  <div>
    <h3>Delayed</h3>
    <p>
      Pass <code>delay</code> prop to custom delay of show and hide of a{" "}
      <code>Tooltip</code>.
    </p>
    <DescribedButton
      description="Description text"
      text="Description will show and hide with 3000ms delay"
      delay={3000}
    />
  </div>
);

export default DelayExample;
