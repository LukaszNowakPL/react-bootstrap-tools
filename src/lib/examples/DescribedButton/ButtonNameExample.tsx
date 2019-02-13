import * as React from "react";
import { DescribedButton } from "../../../lib";

const ButtonName = () => (
  <div>
    <h3>Button name example</h3>
    <p>
      Pass <code>name</code> prop to custom name value of a <code>Button</code>{" "}
      component.
    </p>
    <DescribedButton
      description="description text"
      text="button text"
      name="test value"
    />
  </div>
);

export default ButtonName;
