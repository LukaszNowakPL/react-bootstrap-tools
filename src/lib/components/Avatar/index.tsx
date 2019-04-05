import * as React from "react";
import { PureComponent } from "react";
import { AvatarProps, IconProps, ImageProps, WrapperProps } from "./interfaces";
import { getIconProps, getImageProps, getWrapperProps } from "./functions";
import { Image } from "react-bootstrap";
import Glyphicon from "../Glyphicon";

export const AvatarImage = (props: AvatarProps) => {
  const imageProps: ImageProps = getImageProps(props);
  return <Image {...imageProps} />;
};

export const AvatarIcon = (props: AvatarProps) => {
  const iconProps: IconProps = getIconProps(props);
  return <Glyphicon {...iconProps} />;
};

class Avatar extends PureComponent<AvatarProps> {
  displayName: string = "Avatar";

  render() {
    const { src } = this.props;

    const avatarObject = !!src ? (
      <AvatarImage {...this.props} />
    ) : (
      <AvatarIcon {...this.props} />
    );

    const wrapperProps: WrapperProps = getWrapperProps(this.props);

    return <section {...wrapperProps}>{avatarObject}</section>;
  }
}

export default Avatar;
