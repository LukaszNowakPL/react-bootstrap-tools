import * as React from "react";
import { DescribedButton } from "../../../lib";

const BasicExample = () => (
  <div>
    <h3>Button type example</h3>
    <p>
      Pass <code>type</code> prop to custom type of a <code>Button</code>{" "}
      component. Available values to pass:
    </p>
    <ul>
      <li>
        <DescribedButton
          description="description text"
          text="button"
          type="button"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="reset"
          type="reset"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="submit"
          type="submit"
        />
      </li>
    </ul>
  </div>
);

export default BasicExample;
