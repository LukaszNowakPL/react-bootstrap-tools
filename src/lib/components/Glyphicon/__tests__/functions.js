import { getClassName } from "../functions";

describe("getClassName", () => {
  it("returns default className", () => {
    expect(getClassName(undefined)).toMatch("material-icons");
  });
  it("returns default and provided classNames", () => {
    expect(getClassName("testClassName")).toMatch(
      "material-icons testClassName"
    );
  });
});
