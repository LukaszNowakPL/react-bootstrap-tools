import React from "react";
import { shallow } from "enzyme";
import AlertBoxGroup from "../index";

describe("<AlertBoxGroup />", () => {
  const customComponentProps = {
    alerts: [
      {
        id: 1,
        message: "info message",
        variant: "info"
      },
      {
        id: 2,
        message: "danger message",
        variant: "danger"
      }
    ]
  };

  it("renders", () => {
    const component = shallow(<AlertBoxGroup {...customComponentProps} />);
    expect(component).toMatchSnapshot();
  });

  it("renders grouped alerts", () => {
    const component = shallow(
      <AlertBoxGroup {...customComponentProps} maxAlerts={1} />
    );
    expect(component).toMatchSnapshot();
  });
});
