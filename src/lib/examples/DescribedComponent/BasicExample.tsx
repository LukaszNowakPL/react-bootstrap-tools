import * as React from "react";
import { DescribedComponent } from "../../../lib";

const BasicExample = () => (
  <div>
    <h3>Basic example</h3>
    <p>
      Hover the component to see description <code>Tooltip</code>.
    </p>
    <DescribedComponent description="description text">
      <button>component text</button>
    </DescribedComponent>
  </div>
);

export default BasicExample;
