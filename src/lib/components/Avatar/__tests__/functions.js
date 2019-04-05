import { getIconProps, getImageProps, getWrapperProps } from "../functions";

describe("getWrapperProps", () => {
  const customConf = {};

  it("returns base object if no precise props passed", () => {
    expect(getWrapperProps({ ...customConf })).toEqual({ className: "Avatar" });
  });

  it("returns object with additional className", () => {
    expect(
      getWrapperProps({ ...customConf, className: "testClassName" })
    ).toEqual({ className: "Avatar testClassName" });
  });
});

describe("getImageProps", () => {
  const customConf = { src: "testSrc" };

  it("returns base object if no precise props passed", () => {
    expect(getImageProps({ ...customConf })).toEqual({
      fluid: true,
      src: "testSrc",
      className: "Avatar__image"
    });
  });

  it("returns object with additional className", () => {
    expect(
      getImageProps({ ...customConf, imageClassName: "testImageClassName" })
    ).toEqual({
      fluid: true,
      src: "testSrc",
      className: "Avatar__image testImageClassName"
    });
  });
});

describe("getIconProps", () => {
  const customConf = {};

  it("returns base object if no precise props passed", () => {
    expect(getIconProps({ ...customConf })).toEqual({
      icon: "person",
      className: "Avatar__icon"
    });
  });

  it("returns object with additional className", () => {
    expect(
      getIconProps({ ...customConf, iconClassName: "testIconClassName" })
    ).toEqual({ icon: "person", className: "Avatar__icon testIconClassName" });
  });

  it("returns object with icon", () => {
    expect(getIconProps({ ...customConf, icon: "testIcon" })).toEqual({
      icon: "testIcon",
      className: "Avatar__icon"
    });
  });
});
