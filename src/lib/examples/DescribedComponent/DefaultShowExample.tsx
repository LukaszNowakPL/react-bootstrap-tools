import * as React from "react";
import { DescribedComponent } from "../../../lib";

const DefaultShowExample = () => (
  <div>
    <h3>DefaultShow</h3>
    <p>
      Pass <code>defaultShow</code> prop to make <code>Tooltip</code> component
      visible from beginning.
    </p>
    <DescribedComponent
      description="This description is visible from beginning"
      defaultShow={true}
    >
      <button>Component text</button>
    </DescribedComponent>
  </div>
);

export default DefaultShowExample;
