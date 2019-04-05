import * as React from "react";
import { Avatar } from "../../../lib";
import "./style.scss";

const CustomImageStyleExample = () => (
  <div>
    <h3>Custom Image Style example</h3>
    <p>Component with customised style of an image.</p>
    <Avatar
      src="https://phyzzi.com/img/logo/logo-map-theme.svg"
      imageClassName="AvatarAlternateStyle__image"
    />
  </div>
);

export default CustomImageStyleExample;
