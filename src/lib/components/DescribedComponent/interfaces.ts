export interface DescribedComponentProps {
  children: any;
  description?: string;
  className?: string;
  placement?: PlacementValues;
  delay?: number;
  defaultShow?: boolean;
  trigger?: TriggerValues;
}

export interface ConfigInterface {
  defaultTooltipClassName: string;
  defaultTooltipId: string;
  defaultTooltipPlacement: PlacementValues;
}

export interface TooltipProps {
  id: string;
  className: string;
}

export interface OverlayTriggerProps {
  defaultShow?: boolean;
  delay?: number;
  overlay: any;
  trigger?: TriggerValues;
  placement?: PlacementValues;
}

export type TriggerValues =
  | "hover"
  | "click"
  | "focus"
  | Array<"hover" | "click" | "focus">;

export type PlacementValues =
  | "auto-start"
  | "auto"
  | "auto-end"
  | "top-start"
  | "top"
  | "top-end"
  | "right-start"
  | "right"
  | "right-end"
  | "bottom-end"
  | "bottom"
  | "bottom-start"
  | "left-end"
  | "left"
  | "left-start";
