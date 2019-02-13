import * as React from "react";
import { DescribedButton } from "../../../lib";
import "./style.scss";

const CustomStyleExample = () => (
  <div>
    <h3>Custom style example</h3>
    <p>
      Pass <code>buttonClassName</code> prop to custom style of a{" "}
      <code>Button</code> component. Also by passing <code>className</code> prop
      you can custom style of a <code>Tooltip</code> component. Please remember
      to define the style on your stylesheet.
    </p>
    <DescribedButton
      description="description text"
      text="styled button"
      buttonClassName="DescribedButtonAlternateStyle"
    />
    <DescribedButton
      description="description text"
      text="styled tooltip"
      className="DescribedButtonAlternateStyle__Tooltip"
    />
    <DescribedButton
      description="description text"
      text="styled icon"
      icon="add"
      iconClassName="DescribedButtonAlternateStyle__Icon"
    />
    <DescribedButton
      description="description text"
      text="styled button, tooltip and icon"
      icon="create"
      buttonClassName="DescribedButtonAlternateStyle"
      className="DescribedButtonAlternateStyle__Tooltip"
      iconClassName="DescribedButtonAlternateStyle__Icon"
    />
  </div>
);

export default CustomStyleExample;
