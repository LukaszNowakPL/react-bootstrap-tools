import * as React from "react";
import { DescribedButton } from "../../../lib";

const VariantExample = () => (
  <div>
    <h3>Button variant example</h3>
    <p>
      Pass <code>variant</code> prop to custom bootstrap's variant of a{" "}
      <code>Button</code> component. Available values to pass:
    </p>
    <ul>
      <li>
        <DescribedButton
          description="description text"
          text="variant: primary"
          variant="primary"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: secondary"
          variant="secondary"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: success"
          variant="success"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: danger"
          variant="danger"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: warning"
          variant="warning"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: info"
          variant="info"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: dark"
          variant="dark"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: light"
          variant="light"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: link"
          variant="link"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: outline-primary"
          variant="outline-primary"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: outline-secondary"
          variant="outline-secondary"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: outline-success"
          variant="outline-success"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: outline-danger"
          variant="outline-danger"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: outline-warning"
          variant="outline-warning"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: outline-info"
          variant="outline-info"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: outline-dark"
          variant="outline-dark"
        />
      </li>
      <li>
        <DescribedButton
          description="description text"
          text="variant: outline-light"
          variant="outline-light"
        />
      </li>
    </ul>
  </div>
);

export default VariantExample;
