import * as React from "react"
import {DescribedButtonProps, ButtonProps, Aaa} from "./interfaces";
import DescribedComponent from "../DescribedComponent/index";
import {DescribedComponentProps} from "../DescribedComponent/interfaces";
import Button from "react-bootstrap/es/Button";

const DescribedButton = ({description, ...buttonProps}: DescribedButtonProps) => {

    // const {asdf, ...buttonProps}:{asdf:string, buttonProps:ButtonProps} = otherProps;

    const buttonComponent = (<Button {...buttonProps}>aaa</Button>)

    if(description) {

        const describedComponentProps:DescribedComponentProps = {
            children: null,
            description,
            ...buttonProps
        };

        return <DescribedComponent {...describedComponentProps}>{buttonComponent}</DescribedComponent>
    }

    return buttonComponent
};

export default DescribedButton;
