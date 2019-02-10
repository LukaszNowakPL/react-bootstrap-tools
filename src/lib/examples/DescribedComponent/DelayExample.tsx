import * as React from "react";
import { DescribedComponent } from "../../../lib";

const DelayExample = () => (
  <div>
    <h3>Delayed</h3>
    <p>
      Pass <code>delay</code> prop to custom delay of show and hide of a{" "}
      <code>Tooltip</code>.
    </p>
    <DescribedComponent description="Description text" delay={3000}>
      <button>Description will show and hide with 3000ms delay</button>
    </DescribedComponent>
  </div>
);

export default DelayExample;
