import React from "react";
import { shallow } from "enzyme";
import DescribedComponent from "../index";

describe("<DescribedComponent />", () => {
  const customComponentProps = {
    description: "test description"
  };

  it("renders", () => {
    const component = shallow(
      <DescribedComponent {...customComponentProps}>
        <p>child</p>
      </DescribedComponent>
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with default show", () => {
    const component = shallow(
      <DescribedComponent {...customComponentProps} defaultShow={true}>
        <p>child</p>
      </DescribedComponent>
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom show/hide delay", () => {
    const component = shallow(
      <DescribedComponent {...customComponentProps} delay={3000}>
        <p>child</p>
      </DescribedComponent>
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom trigger", () => {
    const component = shallow(
      <DescribedComponent {...customComponentProps} trigger="hover">
        <p>child</p>
      </DescribedComponent>
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom position", () => {
    const component = shallow(
      <DescribedComponent {...customComponentProps} placement="top">
        <p>child</p>
      </DescribedComponent>
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom style", () => {
    const component = shallow(
      <DescribedComponent {...customComponentProps} clasName="test className">
        <p>child</p>
      </DescribedComponent>
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with no description", () => {
    const component = shallow(
      <DescribedComponent>
        <p>child</p>
      </DescribedComponent>
    );
    expect(component).toMatchSnapshot();
  });
});
