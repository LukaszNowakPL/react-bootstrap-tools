/**
 * Returns class name of a Tooltip component
 * @param defaultClassName
 * @param className - additional class name
 */
export const getTooltipClassName = (
  defaultClassName: string,
  className: string | undefined
): string => {
  if (className) return defaultClassName + " " + className;

  return defaultClassName;
};
