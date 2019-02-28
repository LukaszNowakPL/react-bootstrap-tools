import React from "react";
import { shallow } from "enzyme";
import AlertBox from "../index";

describe("<AlertBox />", () => {
  const customComponentProps = {
    variant: "danger"
  };

  it("renders", () => {
    const component = shallow(<AlertBox {...customComponentProps} />);
    expect(component).toMatchSnapshot();
  });
});
