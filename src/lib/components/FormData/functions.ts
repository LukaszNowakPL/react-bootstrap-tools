import config from "./config";
import {
  DataProps,
  EditProps,
  FormDataProps,
  FormDecoratorItems,
  WrapperProps
} from "./interfaces";
import { DescribedComponentProps } from "../DescribedComponent/interfaces";
import { DescribedButtonProps } from "../DescribedButton/interfaces";

export const getWrapperProps = (props: FormDataProps) => {
  const { className } = props;

  const wrapperProps: WrapperProps = {
    className:
      config.defaultWrapperClassName + (className ? " " + className : "")
  };

  return wrapperProps;
};

export const getDescribedComponentProps = (props: FormDataProps) => {
  const { description, placement } = props;

  const describedComponentProps: DescribedComponentProps = {
    description: description,
    children: null
  };

  if (!!placement) describedComponentProps.placement = placement;

  return describedComponentProps;
};

export const getDescribedButtonProps = (props: DataProps) => {
  const {
    description,
    value,
    empty,
    placement,
    onClick,
    buttonClassName
  } = props;

  const text = getTransformedValue(value, empty);

  const describedButtonProps: DescribedButtonProps = {
    description,
    text,
    onClick,
    bsPrefix: "FormData__button"
  };

  if (!!placement) describedButtonProps.placement = placement;
  if (!!buttonClassName) describedButtonProps.buttonClassName = buttonClassName;

  return describedButtonProps;
};

export const getTransformedValue = (value: string, empty?: string): string => {
  if (value !== "") return value;

  return empty ? empty : config.defaultEmptyValue;
};

export const getAppendItems = (props: EditProps): FormDecoratorItems => {
  const {
    append,
    onCancel,
    cancel,
    hideActionButtons,
    onSave,
    save,
    readOnly,
    isInvalid
  } = props;

  const appendItems: FormDecoratorItems = [];

  const shouldActionButtonsAppear = !hideActionButtons;

  if (append)
    append.forEach(item => {
      if (
        item.type !== "button" ||
        (item.type === "button" && shouldActionButtonsAppear)
      )
        appendItems.push(item);
    });

  if (shouldActionButtonsAppear && save)
    appendItems.push({
      type: "button",
      conf: {
        // Default values
        icon: "done",
        // Provided on cancel prop
        ...save,
        // Final onClick method
        onClick: onSave,
        // Final readOnly property
        disabled: readOnly || isInvalid
      }
    });

  if (shouldActionButtonsAppear)
    appendItems.push({
      type: "button",
      conf: {
        // Default values
        icon: "clear",
        // Provided on cancel prop
        ...cancel,
        // Final onClick method
        onClick: onCancel
      }
    });

  return appendItems;
};
