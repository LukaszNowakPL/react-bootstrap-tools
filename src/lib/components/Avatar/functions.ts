import { AvatarProps, IconProps, ImageProps, WrapperProps } from "./interfaces";
import config from "./config";

export const getWrapperProps = (conf: AvatarProps) => {
  const { className } = conf;

  const wrapperProps: WrapperProps = {
    className:
      config.defaultWrapperClassName + (className ? " " + className : "")
  };

  return wrapperProps;
};

export const getImageProps = (conf: AvatarProps) => {
  const { src, imageClassName } = conf;

  const imageProps: ImageProps = {
    fluid: true,
    src: src || "",
    className:
      config.defaultImageClassName +
      (imageClassName ? " " + imageClassName : "")
  };

  return imageProps;
};

export const getIconProps = (conf: AvatarProps) => {
  const { icon, iconClassName } = conf;

  const iconProps: IconProps = {
    icon: icon ? icon : config.defaultIcon,
    className:
      config.defaultIconClassName + (iconClassName ? " " + iconClassName : "")
  };

  return iconProps;
};
