import { getOverlayTriggerProps, getTooltipProps } from "../functions";

describe("getOverlayTriggerProps", () => {
  it("returns default object if no precise props passed", () => {
    expect(getOverlayTriggerProps({})).toEqual({
      overlay: null
    });
  });
  it("pass defaultShow prop", () => {
    expect(getOverlayTriggerProps({ defaultShow: true })).toEqual({
      overlay: null,
      defaultShow: true
    });
  });
  it("pass delay prop", () => {
    expect(getOverlayTriggerProps({ delay: 3000 })).toEqual({
      overlay: null,
      delay: 3000
    });
  });
  it("pass trigger prop", () => {
    expect(getOverlayTriggerProps({ trigger: "hover" })).toEqual({
      overlay: null,
      trigger: "hover"
    });
  });
  it("pass placement prop", () => {
    expect(getOverlayTriggerProps({ placement: "top" })).toEqual({
      overlay: null,
      placement: "top"
    });
  });
  it("doesn't pass unrecognized prop", () => {
    expect(getOverlayTriggerProps({ description: "testValue" })).toEqual({
      overlay: null
    });
  });
});

describe("getTooltipProps", () => {
  it("returns default object if no precise props passed", () => {
    expect(getTooltipProps({})).toEqual({
      id: "tooltip",
      className: "Tooltip"
    });
  });
  it("pass additional class name", () => {
    expect(getTooltipProps({ className: "additionalClassName" })).toEqual({
      id: "tooltip",
      className: "Tooltip additionalClassName"
    });
  });
  it("doesn't pass unrecognized prop", () => {
    expect(getTooltipProps({ description: "testValue" })).toEqual({
      id: "tooltip",
      className: "Tooltip"
    });
  });
});
