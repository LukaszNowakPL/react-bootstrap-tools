import { AlertBoxProps } from "../AlertBox/interfaces";

export interface ConfigInterface {
  maxAlerts: number;
}

export interface AlertBoxGroupProps {
  maxAlerts?: number;
  alerts: AlertBoxObject[];
}

interface AlertBoxObject extends AlertBoxProps {}
