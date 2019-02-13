import * as React from "react";
import { ButtonProps, DescribedButtonProps } from "./interfaces";
import DescribedComponent from "../DescribedComponent/index";
import { DescribedComponentProps } from "../DescribedComponent/interfaces";
import {
  getButtonProps,
  getDescribedComponentProps,
  getGlyphiconProps
} from "./functions";
import { Button } from "react-bootstrap";
import Glyphicon from "../Glyphicon";
import { GlyphiconProps } from "../Glyphicon/interfaces";

const GlyphComponent = (props: DescribedButtonProps) => {
  const glyphiconProps: GlyphiconProps = getGlyphiconProps(props);
  return <Glyphicon {...glyphiconProps} />;
};

const ButtonComponent = (props: DescribedButtonProps) => {
  const buttonProps: ButtonProps = getButtonProps(props);

  const { icon, text } = props;

  const GlyphiconComponent = icon ? GlyphComponent(props) : null;

  return (
    <Button {...buttonProps}>
      {GlyphiconComponent}
      {text}
    </Button>
  );
};

const DescribedButton = (props: DescribedButtonProps) => {
  const { description } = props;

  const buttonComponent = ButtonComponent(props);

  if (description) {
    const describedComponentProps: DescribedComponentProps = getDescribedComponentProps(
      props
    );

    return (
      <DescribedComponent {...describedComponentProps}>
        {buttonComponent}
      </DescribedComponent>
    );
  }

  return buttonComponent;
};

export default DescribedButton;
