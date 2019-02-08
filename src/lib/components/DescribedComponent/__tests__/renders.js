import React from "react";
import { shallow } from "enzyme";
import DescribedComponent from "../index";

describe("<DescribedComponent />", () => {
  const customComponentProps = {
    description: 'test description'
  };

  it("renders", () => {
    const component = shallow(
      <DescribedComponent {...customComponentProps}>
        <p>child</p>
      </DescribedComponent>
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom style", () => {
    const component = shallow(
      <DescribedComponent {...customComponentProps} clasName='test className'>
        <p>child</p>
      </DescribedComponent>
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom hide delay", () => {
    const component = shallow(
      <DescribedComponent {...customComponentProps} delayHide={3000}>
        <p>child</p>
      </DescribedComponent>
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with custom placement", () => {
    const component = shallow(
      <DescribedComponent {...customComponentProps} placement='left'>
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
