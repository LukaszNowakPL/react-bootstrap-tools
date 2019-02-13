import * as React from "react";
import { DescribedButton } from "../../../lib";

const TextExample = () => (
  <div>
    <h3>Text example</h3>
    <p>
      Pass <code>text</code> prop to custom text on the button.
    </p>
    <p>
      Pass <code>icon</code> prop to custom glyph icon on the button. You can
      use any icon listed on{" "}
      <a href="https://material.io/tools/icons/?style=baseline" target="_blank">
        Material design Icon set
      </a>
      . Don't forget to attach the icon styling on <code>head</code> section of
      your page{" "}
      <code>
        &lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"&gt;
      </code>
      .
    </p>
    <p>
      You can mix <code>icon</code> and <code>text</code> props together. Icon
      will appear on the left hand side of text provided.
    </p>
    <DescribedButton description="description text" icon="add" />
    <DescribedButton description="description text" text="button with text" />
    <DescribedButton
      description="description text"
      icon="create"
      text="button icon and text"
    />
  </div>
);

export default TextExample;
