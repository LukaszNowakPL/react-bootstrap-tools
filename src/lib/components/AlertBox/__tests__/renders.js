import React from "react";
import { shallow } from "enzyme";
import AlertBox from "../index";
import { Alert } from "react-bootstrap";

describe("<AlertBox />", () => {
  const customComponentProps = {
    id: "testId",
    message: "test message"
  };

  it("renders", () => {
    const component = shallow(<AlertBox {...customComponentProps} />);
    expect(component).toMatchSnapshot();
  });

  it("renders with Collapse transition", () => {
    const component = shallow(
      <AlertBox {...customComponentProps} withCollapse={true} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders closed (hidden) component", () => {
    const component = shallow(
      <AlertBox {...customComponentProps} dismissible={true} />
    );
    component
      .find(Alert)
      .getElement()
      .props.onClose();
    expect(component).toMatchSnapshot();
  });

  it("renders with close button and label", () => {
    const component = shallow(
      <AlertBox
        {...customComponentProps}
        dismissible={true}
        closeLabel={"test label"}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with given variant", () => {
    const component = shallow(
      <AlertBox {...customComponentProps} variant={"warning"} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with given className", () => {
    const component = shallow(
      <AlertBox {...customComponentProps} className={"testClass"} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with icon component", () => {
    const component = shallow(
      <AlertBox {...customComponentProps} withIcon={"testIcon"} />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with badge component", () => {
    const component = shallow(
      <AlertBox {...customComponentProps} waitingItems={4} />
    );
    expect(component).toMatchSnapshot();
  });
});
