import * as React from "react";
import { DescribedButton } from "../../../lib";

const TriggerExample = () => (
  <div>
    <h3>Trigger</h3>
    <p>
      Pass <code>trigger</code> prop to custom trigger of show and hide of a{" "}
      <code>Tooltip</code>. Available values to pass:
    </p>
    <div>
      <ul>
        <li>
          <DescribedButton
            description="Description triggered by: hover"
            trigger="hover"
            text="hover"
          />
        </li>
        <li>
          <DescribedButton
            description="Description triggered by: click"
            trigger="click"
            text="click"
          />
        </li>
        <li>
          <DescribedButton
            description="Description triggered by: focus"
            trigger="focus"
            text="focus"
          />
        </li>
        <li>array of any of above</li>
      </ul>
    </div>
  </div>
);

export default TriggerExample;
