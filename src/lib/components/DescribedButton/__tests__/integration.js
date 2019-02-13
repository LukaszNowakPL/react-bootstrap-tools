import React from "react";
import { shallow } from "enzyme";
import DescribedButton from "../index";

describe("<DescribedButton />", () => {
  const customComponentProps = {
    id: "testButton"
  };

  it("handles button click with argument provided", () => {
    const onClickMock = jest.fn();
    const onClickArg = "testValue";
    const onClickCallbackArg = "callbackTestValue";
    const component = shallow(
      <DescribedButton
        {...customComponentProps}
        onClick={onClickMock}
        onClickArg={onClickArg}
      />
    );

    component
      .find({ id: "testButton" })
      .getElement()
      .props.onClick(onClickCallbackArg);

    component.update();

    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(onClickMock).toHaveBeenCalledWith(onClickArg, onClickCallbackArg);
  });

  it("handles button click with no argument provided", () => {
    const onClickMock = jest.fn();
    const onClickCallbackArg = "callbackTestValue";
    const component = shallow(
      <DescribedButton {...customComponentProps} onClick={onClickMock} />
    );

    component
      .find({ id: "testButton" })
      .getElement()
      .props.onClick(onClickCallbackArg);

    component.update();

    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(onClickMock).toHaveBeenCalledWith(onClickCallbackArg);
  });
});
