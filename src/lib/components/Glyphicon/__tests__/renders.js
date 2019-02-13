import React from "react";
import { shallow } from "enzyme";
import Glyphicon from "../index";

describe("<Glyphicon />", () => {
  const customComponentProps = {
    icon: "testIcon"
  };

  it("renders", () => {
    const component = shallow(<Glyphicon {...customComponentProps} />);
    expect(component).toMatchSnapshot();
  });

  it("renders with provided className", () => {
    const component = shallow(
      <Glyphicon {...customComponentProps} className="testClassName" />
    );
    expect(component).toMatchSnapshot();
  });
});
