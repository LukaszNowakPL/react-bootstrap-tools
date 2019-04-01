import React from "react";
import ReactDOM from "react-dom";
import AlertBoxGroup from "../index";
import { generateImage } from "jsdom-screenshot";

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

  const generateImageConf = {
    waitUntilNetworkIdle: true,
    viewport: { width: 600, height: 400 }
  };

  let container;

  beforeAll(() => {
    // Adding material styling
    const materialLink = document.createElement("link");
    materialLink.type = "text/css";
    materialLink.rel = "stylesheet";
    materialLink.href =
      "https://fonts.googleapis.com/icon?family=Material+Icons";
    document.head.appendChild(materialLink);

    // Adding bootstrap styling
    const bootstrapLink = document.createElement("link");
    bootstrapLink.type = "text/css";
    bootstrapLink.rel = "stylesheet";
    bootstrapLink.href =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
    document.head.appendChild(bootstrapLink);

    // Adding package styling from build folder
    const fs = require("fs");
    const path = require("path");
    const inlineCss = fs.readFileSync(
      path.resolve(__dirname, "../../../../../build/static/css/index.css"),
      "utf8"
    );
    const style = document.createElement("style");
    style.innerHTML = inlineCss;
    document.head.appendChild(style);

    const style2 = document.createElement("style");
    style2.innerHTML = "body{color:blue}";
    document.head.appendChild(style2);
  });

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  });

  it("renders image pack", async () => {
    ReactDOM.render(
      <div>
        <p>Expanded alerts</p>
        <div>
          <AlertBoxGroup {...customComponentProps} />
        </div>
        <p>Grouped alerts</p>
        <div>
          <AlertBoxGroup {...customComponentProps} maxAlerts={1} />
        </div>
      </div>,
      container
    );
    const screenshot = await generateImage(generateImageConf);
    expect(screenshot).toMatchImageSnapshot();
  });
});
