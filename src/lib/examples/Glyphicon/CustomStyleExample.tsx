import * as React from "react";
import { Glyphicon } from "../../../lib";
import "./style.scss";

const CustomStyleExample = () => (
  <div>
    <h3>Custom style example</h3>
    <p>
      Pass <code>className</code> prop to custom style of an icon. Please
      remember to define the style on your stylesheet.
    </p>
    <Glyphicon icon="add" className="GlyphiconAlternateStyle" />
  </div>
);

export default CustomStyleExample;
