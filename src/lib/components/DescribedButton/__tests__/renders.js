import React from "react";
import { shallow } from "enzyme";
import DescribedButton from "../index";

describe("<DescribedButton />", () => {
  const customComponentProps = {
    description: "test description"
  };

  it("renders", () => {
    const component = shallow(<DescribedButton {...customComponentProps} />);
    expect(component).toMatchSnapshot();
  });

  it("renders with custom button name", () => {
    const component = shallow(
      <DescribedButton {...customComponentProps} name={"testValue"} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom button type", () => {
    const component = shallow(
      <DescribedButton {...customComponentProps} type={"submit"} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom active state", () => {
    const component = shallow(
      <DescribedButton {...customComponentProps} active={true} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom block", () => {
    const component = shallow(
      <DescribedButton {...customComponentProps} block={true} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom disabled state", () => {
    const component = shallow(
      <DescribedButton {...customComponentProps} disabled={true} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders as link opening on new window", () => {
    const component = shallow(
      <DescribedButton
        {...customComponentProps}
        href={"testValue"}
        hrefNewWindow={true}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom size", () => {
    const component = shallow(
      <DescribedButton {...customComponentProps} size={"sm"} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom variant", () => {
    const component = shallow(
      <DescribedButton {...customComponentProps} variant={"secondary"} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom className of button", () => {
    const component = shallow(
      <DescribedButton
        {...customComponentProps}
        buttonClassName={"testValue"}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom text", () => {
    const component = shallow(
      <DescribedButton {...customComponentProps} text={"testValue"} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom icon", () => {
    const component = shallow(
      <DescribedButton {...customComponentProps} icon={"testValue"} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom icon and text", () => {
    const component = shallow(
      <DescribedButton
        {...customComponentProps}
        icon={"testIcon"}
        text={"testText"}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom className of an icon", () => {
    const component = shallow(
      <DescribedButton
        {...customComponentProps}
        icon={"testIcon"}
        iconClassName={"testValue"}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom onClick action with given argument", () => {
    const onClickMock = jest.fn();
    const onClickArg = { testKey: "test value" };
    const component = shallow(
      <DescribedButton
        {...customComponentProps}
        onClick={onClickMock}
        onClickArg={onClickArg}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom button id", () => {
    const component = shallow(
      <DescribedButton {...customComponentProps} id={"testValue"} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with no description", () => {
    const component = shallow(<DescribedButton />);
    expect(component).toMatchSnapshot();
  });

  it("renders with custom Tooltip className", () => {
    const component = shallow(
      <DescribedButton {...customComponentProps} className={"testValue"} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom Tooltip placement", () => {
    const component = shallow(
      <DescribedButton {...customComponentProps} placement={"top"} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom Tooltip delay", () => {
    const component = shallow(
      <DescribedButton {...customComponentProps} delay={3000} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with Tooltip show from beginning", () => {
    const component = shallow(
      <DescribedButton {...customComponentProps} defaultShow={true} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom Tooltip trigger", () => {
    const component = shallow(
      <DescribedButton {...customComponentProps} trigger={"hover"} />
    );
    expect(component).toMatchSnapshot();
  });
});
