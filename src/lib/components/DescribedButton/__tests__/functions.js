import {
  getButtonProps,
  getDescribedComponentProps,
  getGlyphiconProps
} from "../functions";

describe("getButtonProps", () => {
  it("returns default object if no precise props passed", () => {
    expect(getButtonProps({})).toEqual({});
  });
  it("passes name prop", () => {
    expect(getButtonProps({ name: "test value" })).toEqual({
      name: "test value"
    });
  });
  it("passes type prop", () => {
    expect(getButtonProps({ type: "button" })).toEqual({ type: "button" });
  });
  it("passes active prop", () => {
    expect(getButtonProps({ active: false })).toEqual({ active: false });
  });
  it("passes block prop", () => {
    expect(getButtonProps({ block: true })).toEqual({ block: true });
  });
  it("passes disabled prop", () => {
    expect(getButtonProps({ disabled: true })).toEqual({ disabled: true });
  });
  it("passes href prop", () => {
    expect(getButtonProps({ href: "test value" })).toEqual({
      href: "test value"
    });
  });
  it("passes href and hrefNewWindow prop", () => {
    expect(getButtonProps({ href: "test value", hrefNewWindow: true })).toEqual(
      {
        href: "test value",
        target: "_blank"
      }
    );
  });
  it("doesn't pass hrefNewWindow prop if no href prop provided", () => {
    expect(getButtonProps({ hrefNewWindow: true })).toEqual({});
  });
  it("passes size prop", () => {
    expect(getButtonProps({ size: "sm" })).toEqual({ size: "sm" });
  });
  it("passes variant prop", () => {
    expect(getButtonProps({ variant: "light" })).toEqual({ variant: "light" });
  });
  it("passes buttonClassName prop", () => {
    expect(getButtonProps({ buttonClassName: "test value" })).toEqual({
      className: "test value"
    });
  });
  it("passes id prop", () => {
    expect(getButtonProps({ id: "test value" })).toEqual({
      id: "test value"
    });
  });
  it("passes onClick prop", () => {
    const onClickMock = jest.fn();
    expect(getButtonProps({ onClick: onClickMock })).toEqual({
      onClick: onClickMock
    });
  });
  it("passes onClick with onClickArg prop", () => {
    const onClickMock = jest.fn();
    expect(
      getButtonProps({ onClick: onClickMock, onClickArg: "test value" })
    ).toEqual({
      onClick: expect.any(Function)
    });
  });
  it("doesn't pass onClickArg prop if no onClick prop provided", () => {
    expect(getButtonProps({ onClickArg: "test value" })).toEqual({});
  });
  it("doesn't pass unrecognized prop", () => {
    expect(getButtonProps({ text: "test value" })).toEqual({});
  });
});

describe("getDescribedComponentProps", () => {
  it("returns default object if no precise props passed", () => {
    expect(getDescribedComponentProps({})).toEqual({ children: null });
  });
  it("passes description prop", () => {
    expect(getDescribedComponentProps({ description: "test value" })).toEqual({
      children: null,
      description: "test value"
    });
  });
  it("passes className prop", () => {
    expect(getDescribedComponentProps({ className: "test value" })).toEqual({
      children: null,
      className: "test value"
    });
  });
  it("passes placement prop", () => {
    expect(getDescribedComponentProps({ placement: "top" })).toEqual({
      children: null,
      placement: "top"
    });
  });
  it("passes delay prop", () => {
    expect(getDescribedComponentProps({ delay: 3000 })).toEqual({
      children: null,
      delay: 3000
    });
  });
  it("passes defaultShow prop", () => {
    expect(getDescribedComponentProps({ defaultShow: true })).toEqual({
      children: null,
      defaultShow: true
    });
  });
  it("passes trigger prop", () => {
    expect(getDescribedComponentProps({ trigger: "hover" })).toEqual({
      children: null,
      trigger: "hover"
    });
  });
});

describe("getGlyphiconProps", () => {
  it("returns default object if no precise props passed", () => {
    expect(getGlyphiconProps({})).toEqual({ icon: "" });
  });
  it("passes icon prop", () => {
    expect(getGlyphiconProps({ icon: "testValue" })).toEqual({
      icon: "testValue"
    });
  });
  it("passes iconClassName prop", () => {
    expect(getGlyphiconProps({ iconClassName: "testValue" })).toEqual({
      icon: "",
      className: "testValue"
    });
  });
});
