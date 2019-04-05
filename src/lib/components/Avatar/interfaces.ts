export interface ConfigInterface {
  defaultIcon: string;
  defaultWrapperClassName: string;
  defaultImageClassName: string;
  defaultIconClassName: string;
}

export interface AvatarProps {
  src?: string;
  icon?: string;
  className?: string;
  imageClassName?: string;
  iconClassName?: string;
}

export interface WrapperProps {
  className: string;
}

export interface ImageProps {
  src: string;
  fluid: true;
  className: string;
}

export interface IconProps {
  icon: string;
  className: string;
}
