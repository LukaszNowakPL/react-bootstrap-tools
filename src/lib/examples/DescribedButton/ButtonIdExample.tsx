import * as React from "react";
import { DescribedButton } from "../../../lib";

const ButtonIdExample = () => (
  <div>
    <h3>Button id example</h3>
    <p>
      Pass <code>id</code> prop to custom id of <code>Button</code> component .
    </p>
    <DescribedButton
      description="description text"
      text="button text"
      id={"test"}
    />
  </div>
);

export default ButtonIdExample;
