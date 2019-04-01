import React from "react";
import { shallow } from "enzyme";
import AlertBox from "../index";
import { Alert, Fade } from "react-bootstrap";

describe("<AlertBox />", () => {
  const customComponentProps = {
    id: "1234",
    message: "testMessage"
  };

  it("handles after mount actions", () => {
    const component = shallow(<AlertBox {...customComponentProps} />);

    expect(component.instance().state).toEqual({
      in: true,
      shouldOpen: false,
      shouldClose: false,
      id: "1234"
    });
  });

  it("handles onClose", () => {
    const onCloseMock = jest.fn();
    const component = shallow(
      <AlertBox
        {...customComponentProps}
        dismissible={true}
        onClose={onCloseMock}
      />
    );

    const setStateMock = jest.fn();
    component.setState = setStateMock;
    component
      .find(Alert)
      .getElement()
      .props.onClose();

    expect(setStateMock).toHaveBeenCalledTimes(1);
    expect(setStateMock).toHaveBeenCalledWith({ shouldClose: true });
  });

  it("handles onEnter", () => {
    const onEnterMock = jest.fn();
    const component = shallow(
      <AlertBox {...customComponentProps} onEnter={onEnterMock} />
    );

    component
      .find(Fade)
      .getElement()
      .props.onEnter();

    expect(onEnterMock).toHaveBeenCalledTimes(1);
    expect(onEnterMock).toHaveBeenCalledWith("1234");
  });

  it("handles onEntering", () => {
    const onEnteringMock = jest.fn();
    const component = shallow(
      <AlertBox {...customComponentProps} onEntering={onEnteringMock} />
    );

    component
      .find(Fade)
      .getElement()
      .props.onEntering();

    expect(onEnteringMock).toHaveBeenCalledTimes(1);
    expect(onEnteringMock).toHaveBeenCalledWith("1234");
  });

  it("handles onEntered", () => {
    const onEnteredMock = jest.fn();
    const component = shallow(
      <AlertBox {...customComponentProps} onEntered={onEnteredMock} />
    );

    component
      .find(Fade)
      .getElement()
      .props.onEntered();

    expect(onEnteredMock).toHaveBeenCalledTimes(1);
    expect(onEnteredMock).toHaveBeenCalledWith("1234");
  });

  it("handles onExit", () => {
    const onExitMock = jest.fn();
    const component = shallow(
      <AlertBox {...customComponentProps} onExit={onExitMock} />
    );

    component
      .find(Fade)
      .getElement()
      .props.onExit();

    expect(onExitMock).toHaveBeenCalledTimes(1);
    expect(onExitMock).toHaveBeenCalledWith("1234");
  });

  it("handles onExiting", () => {
    const onExitingMock = jest.fn();
    const component = shallow(
      <AlertBox {...customComponentProps} onExiting={onExitingMock} />
    );

    component
      .find(Fade)
      .getElement()
      .props.onExiting();

    expect(onExitingMock).toHaveBeenCalledTimes(1);
    expect(onExitingMock).toHaveBeenCalledWith("1234");
  });

  it("handles onExited", () => {
    const onExitedMock = jest.fn();
    const component = shallow(
      <AlertBox {...customComponentProps} onExited={onExitedMock} />
    );

    component
      .find(Fade)
      .getElement()
      .props.onExited();

    expect(onExitedMock).toHaveBeenCalledTimes(1);
    expect(onExitedMock).toHaveBeenCalledWith("1234");
  });

  it("handles auto close", () => {
    const component = shallow(
      <AlertBox {...customComponentProps} hideAfter={1000} />
    );

    const setStateMock = jest.fn();
    component.setState = setStateMock;

    jest.useFakeTimers();
    component
      .find(Fade)
      .getElement()
      .props.onEntered();
    jest.runAllTimers();

    expect(setStateMock).toHaveBeenCalledTimes(1);
    expect(setStateMock).toHaveBeenCalledWith({ shouldClose: true });
  });
});
