import config from "./config";

/**
 * Returns className used to create an icon
 * @param className
 */
export const getClassName = (className?: string) => {
  const defaultClassName = config.defaultComponentClassName;

  if (className) return defaultClassName + " " + className;

  return defaultClassName;
};
