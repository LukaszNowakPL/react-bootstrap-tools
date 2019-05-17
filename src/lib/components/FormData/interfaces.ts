import { ReactElement } from "react";
import { PlacementValues } from "../DescribedComponent/interfaces";
import { DescribedButtonProps } from "../DescribedButton/interfaces";

export interface ConfigInterface {
  defaultWrapperClassName: string;
  defaultEmptyValue: string;
}

export interface FormDataProps {
  wrapper?: ReactElement;
  className?: string;
  buttonClassName?: string;
  nonEditable?: true;
  empty?: string;
  description?: string;
  placement?: PlacementValues;
  isInvalid?: true;
  maxLength?: number;
  placeholder?: string;
  prepend?: FormDecoratorItems;
  append?: FormDecoratorItems;
  save?: SaveConfInterface;
  cancel?: CancelConfInterface;
  hideActionButtons?: true;
  initial: FormDataInitialState;
  onChange?: (Event) => void;
  type?: InputTypeValues;
  as?: FormAsValues;
}

export interface FormDataState {
  isEditing: boolean;
  readOnly: boolean;
  value: string;
}

interface SaveConfInterface {
  text?: string;
  icon?: string;
  onClick: (any, SaveActions) => void;
  onClickArg?: any;
  description?: string;
  placement?: PlacementValues;
}

interface SaveActions {
  switchToData: () => void;
  makeEditable: () => void;
}

interface CancelConfInterface {
  text?: string;
  icon?: string;
  onClick?: (any) => void;
  onClickArg?: any;
  description?: string;
  placement?: PlacementValues;
}

interface FormDataInitialState {
  isEditing?: true;
  readOnly?: true;
  value: string;
}

export interface DataProps extends FormDataProps {
  onClick: () => void;
  value: string;
}

export interface EditProps extends FormDataProps {
  onCancel: (any) => void;
  onSave: (any) => void;
  onChange: (Event) => void;
  readOnly: boolean;
  value: string;
  maxLength?: number;
  as?: FormAsValues;
}

export interface InputProps {
  readOnly?: boolean;
  type?: InputTypeValues;
  "aria-describedby": "inputGroupPrepend";
  value: string;
  onChange: (Event) => void;
  isInvalid?: true;
  maxLength?: number;
  placeholder?: string;
  as?: FormAsValues;
}

export interface WrapperProps {
  className: string;
}

export interface FormDecoratorProps {
  type: "prepend" | "append";
  items: FormDecoratorItems;
}

export type FormDecoratorItems = (FormDecoratorText | FormDecoratorButton)[];

interface FormDecoratorText {
  type: "text";
  value: string;
}

interface FormDecoratorButton {
  type: "button";
  conf: DescribedButtonProps;
}

type InputTypeValues =
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "month"
  | "number"
  | "password"
  | "range"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

type FormAsValues = "input" | "textarea";
