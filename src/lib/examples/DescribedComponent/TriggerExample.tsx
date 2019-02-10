import * as React from "react";
import { DescribedComponent } from "../../../lib";

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
          <DescribedComponent
            description="Description triggered by: hover"
            trigger="hover"
          >
            <button>hover</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent
            description="Description triggered by: click"
            trigger="click"
          >
            <button>click</button>
          </DescribedComponent>
        </li>
        <li>
          <DescribedComponent
            description="Description triggered by: focus"
            trigger="focus"
          >
            <button>focus</button>
          </DescribedComponent>
        </li>
        <li>array of any of above</li>
      </ul>
    </div>
  </div>
);

export default TriggerExample;
