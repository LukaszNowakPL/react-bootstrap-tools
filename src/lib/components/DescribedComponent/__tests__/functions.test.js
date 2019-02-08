import React from "react";
import { getTooltipClassName } from "../functions";

describe("getTooltipClassName", () => {
  it("returns default className", () => {
    expect(
        getTooltipClassName('defaultClassName', undefined)
    ).toMatch('defaultClassName');
  });
  it("returns default and custom className", () => {
    expect(
        getTooltipClassName('defaultClassName', 'testClassName')
    ).toMatch('defaultClassName testClassName');
  });

});
