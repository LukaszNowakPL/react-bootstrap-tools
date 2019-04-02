import {
  getAlertProps,
  getCustomIconType,
  getGlyphiconProps,
  getTransitionProps
} from "../functions";

describe("getAlertProps", () => {
  const onClose = jest.fn();
  const customConf = {
    props: {},
    state: {
      in: true,
      shouldOpen: false,
      shouldClose: false,
      id: "1234"
    },
    methods: {
      onClose
    }
  };

  it("returns base object if no precise props passed", () => {
    expect(getAlertProps({ ...customConf })).toEqual({ id: "1234" });
  });

  it("returns object with className", () => {
    expect(
      getAlertProps({
        ...customConf,
        props: { ...customConf.props, className: "testClassName" }
      })
    ).toEqual({ id: "1234", className: "testClassName" });
  });

  it("returns object with variant", () => {
    expect(
      getAlertProps({
        ...customConf,
        props: { ...customConf.props, variant: "primary" }
      })
    ).toEqual({ id: "1234", variant: "primary" });
  });

  it("returns object with dissmissible", () => {
    expect(
      getAlertProps({
        ...customConf,
        props: { ...customConf.props, dismissible: true }
      })
    ).toEqual({ id: "1234", dismissible: true, onClose });
  });

  it("returns object with dismissible and closeLabel", () => {
    expect(
      getAlertProps({
        ...customConf,
        props: {
          ...customConf.props,
          dismissible: true,
          closeLabel: "testLabel"
        }
      })
    ).toEqual({
      id: "1234",
      dismissible: true,
      onClose,
      closeLabel: "testLabel"
    });
  });
});

describe("getTransitionProps", () => {
  const onEnter = jest.fn();
  const onEntering = jest.fn();
  const onEntered = jest.fn();
  const onExit = jest.fn();
  const onExiting = jest.fn();
  const onExited = jest.fn();

  it("returns object", () => {
    expect(
      getTransitionProps({
        state: { in: false, shouldOpen: false, shouldClose: false, id: "1234" },
        methods: { onEnter, onEntering, onEntered, onExit, onExiting, onExited }
      })
    ).toEqual({
      in: false,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited
    });
  });
});

describe("getCustomIconType", () => {
  it("returns info_outline", () => {
    expect(getCustomIconType("primary")).toMatch("info_outline");
  });

  it("returns info_outline", () => {
    expect(getCustomIconType("secondary")).toMatch("info_outline");
  });

  it("returns check_circle_outline", () => {
    expect(getCustomIconType("success")).toMatch("check_circle_outline");
  });

  it("returns highlight_off", () => {
    expect(getCustomIconType("danger")).toMatch("highlight_off");
  });

  it("returns error_outline", () => {
    expect(getCustomIconType("warning")).toMatch("error_outline");
  });

  it("returns info_outline", () => {
    expect(getCustomIconType("info")).toMatch("info_outline");
  });

  it("returns info_outline", () => {
    expect(getCustomIconType("dark")).toMatch("info_outline");
  });

  it("returns info_outline", () => {
    expect(getCustomIconType("light")).toMatch("info_outline");
  });

  it("returns info_outline", () => {
    expect(getCustomIconType("unidentified")).toMatch("info_outline");
  });
});

describe("getGlyphiconProps", () => {
  it("returns object", () => {
    expect(getGlyphiconProps({ withIcon: "testIcon" })).toEqual({
      icon: "testIcon",
      className: "AlertBox__icon"
    });
  });

  it("returns object with calculated icon", () => {
    expect(getGlyphiconProps({ withIcon: true })).toEqual({
      icon: "info_outline",
      className: "AlertBox__icon"
    });
  });

  it("returns object with calculated icon", () => {
    expect(getGlyphiconProps({ withIcon: true, variant: "warning" })).toEqual({
      icon: "error_outline",
      className: "AlertBox__icon"
    });
  });

  it("returns object with additional className", () => {
    expect(
      getGlyphiconProps({ withIcon: "testIcon", iconClassName: "testClass" })
    ).toEqual({ icon: "testIcon", className: "AlertBox__icon testClass" });
  });
});
