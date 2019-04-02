import { ConfigInterface } from "./interfaces";

const config: ConfigInterface = {
  defaultIcon: "info_outline",
  variantIcons: {
    primary: "info_outline",
    secondary: "info_outline",
    success: "check_circle_outline",
    danger: "highlight_off",
    warning: "error_outline",
    info: "info_outline",
    dark: "info_outline",
    light: "info_outline"
  },
  defaultWrapperClassName: "AlertBox__wrapper",
  defaultIconClassName: "AlertBox__icon"
};

export default config;
