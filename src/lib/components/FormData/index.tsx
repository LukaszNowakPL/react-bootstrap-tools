import * as React from "react";
import { PureComponent } from "react";
import {
  DataProps,
  EditProps,
  FormDataProps,
  FormDataState,
  FormDecoratorItems,
  FormDecoratorProps,
  InputProps,
  WrapperProps
} from "./interfaces";
import {
  getAppendItems,
  getDescribedButtonProps,
  getDescribedComponentProps,
  getTransformedValue,
  getWrapperProps
} from "./functions";
import DescribedComponent from "../DescribedComponent";
import { DescribedComponentProps } from "../DescribedComponent/interfaces";
import DescribedButton from "../DescribedButton";
import { DescribedButtonProps } from "../DescribedButton/interfaces";
import "./styles.scss";
import { InputGroup, Form } from "react-bootstrap";

export const FormDecorator = (props: FormDecoratorProps) => {
  const items = props.items.map(item => {
    switch (item.type) {
      case "text":
        return <InputGroup.Text>{item.value}</InputGroup.Text>;
      case "button":
        return (
          <DescribedButton
            iconClassName="FormData__Icon"
            variant="outline-secondary"
            {...item.conf}
          />
        );
    }
  });

  if (props.type === "prepend")
    return <InputGroup.Prepend>{items}</InputGroup.Prepend>;

  return <InputGroup.Append>{items}</InputGroup.Append>;
};

class EditForm extends React.PureComponent<EditProps> {
  render() {
    const {
      prepend,
      readOnly,
      onChange,
      value,
      isInvalid,
      maxLength,
      placeholder,
      type,
      as
    } = this.props;

    const appendItems: FormDecoratorItems = getAppendItems(this.props);

    const inputProps: InputProps = {
      readOnly,
      placeholder,
      "aria-describedby": "inputGroupPrepend",
      value,
      onChange,
      isInvalid
    };

    if (maxLength) inputProps.maxLength = maxLength;
    if (type) inputProps.type = type;
    if (as) inputProps.as = as;

    return (
      <InputGroup>
        {prepend && <FormDecorator type="prepend" items={prepend} />}
        <Form.Control {...inputProps} />
        {appendItems.length > 0 && (
          <FormDecorator type="append" items={appendItems} />
        )}
      </InputGroup>
    );
  }
}

export const Data = (props: DataProps) => {
  const { nonEditable, value, empty } = props;

  if (nonEditable === true) {
    const valueComponent = <span>{getTransformedValue(value, empty)}</span>;
    const describedComponentProps: DescribedComponentProps = getDescribedComponentProps(
      props
    );
    return (
      <DescribedComponent {...describedComponentProps}>
        {valueComponent}
      </DescribedComponent>
    );
  } else {
    const describedButtonProps: DescribedButtonProps = getDescribedButtonProps(
      props
    );
    return <DescribedButton {...describedButtonProps} />;
  }
};

class FormData extends PureComponent<FormDataProps, FormDataState> {
  displayName: string = "FormData";

  constructor(props) {
    super(props);

    const state = {
      isEditing: false,
      readOnly: false,
      value: ""
    };

    const { isEditing, readOnly, value } = props.initial;
    if (isEditing === true) state.isEditing = true;
    if (readOnly === true) state.readOnly = true;
    state.value = value;

    this.state = state;
  }

  toggleIsEditing = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleCancelClick = arg => {
    this.setState({ value: this.props.initial.value });

    if (this.props.cancel && this.props.cancel.onClick)
      this.props.cancel.onClick(arg);

    this.toggleIsEditing();
  };

  handleSaveClick = arg => {
    const switchToData = () => {
      this.setState({ isEditing: false, readOnly: false });
    };

    const makeEditable = () => {
      this.setState({ readOnly: false });
    };

    this.setState({ readOnly: true });

    if (this.props.save)
      this.props.save.onClick(arg, { switchToData, makeEditable });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });

    if (this.props.onChange) this.props.onChange(event);
  };

  render() {
    const { wrapper, nonEditable } = this.props;
    const { value, readOnly } = this.state;

    const wrapperComponent = wrapper ? wrapper : <div />;
    const wrapperProps: WrapperProps = getWrapperProps(this.props);

    const presentationComponent =
      !this.state.isEditing || nonEditable === true ? (
        <Data {...this.props} onClick={this.toggleIsEditing} value={value} />
      ) : (
        <EditForm
          {...this.props}
          onCancel={this.handleCancelClick}
          onSave={this.handleSaveClick}
          onChange={this.handleChange}
          readOnly={readOnly}
          value={value}
        />
      );

    return React.cloneElement(wrapperComponent, {
      ...wrapperProps,
      children: presentationComponent
    });
  }
}

export default FormData;
