import { AlertBoxProps } from "../AlertBox/interfaces";

/**
 * Utility supporting AlertBoxGroup for adding alert into store
 * @param alerts
 * @param alert
 */
export const addAlert = (
  alerts: AlertBoxProps[],
  alert: AlertBoxProps
): AlertBoxProps[] => {
  return [...alerts, { ...alert, id: String(new Date().getTime()) }];
};

/**
 * Utiity supporting AlertBoxGroup for dismissing alert from store
 * @param alerts
 * @param id
 */
export const dismissAlert = (
  alerts: AlertBoxProps[],
  id: string
): AlertBoxProps[] => {
  return alerts.filter(alert => alert.id !== id);
};
