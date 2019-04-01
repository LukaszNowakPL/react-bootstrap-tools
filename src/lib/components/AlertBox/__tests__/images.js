import React from "react";
import ReactDOM from "react-dom";
import AlertBox from "../index";
import { generateImage } from "jsdom-screenshot";

describe("<AlertBox />", () => {
  const customComponentProps = {
    message: "test message",
    withIcon: true,
    dismissible: true,
    waitingItems: 4
  };

  const generateImageConf = {
    waitUntilNetworkIdle: true,
    viewport: { width: 600, height: 1000 }
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
        <div>
          <AlertBox
            {...customComponentProps}
            message="primary variant"
            variant="primary"
          />
        </div>
        <div>
          <AlertBox
            {...customComponentProps}
            message="secondary variant"
            variant="secondary"
          />
        </div>
        <div>
          <AlertBox
            {...customComponentProps}
            message="success variant"
            variant="success"
          />
        </div>
        <div>
          <AlertBox
            {...customComponentProps}
            message="danger variant"
            variant="danger"
          />
        </div>
        <div>
          <AlertBox
            {...customComponentProps}
            message="warning variant"
            variant="warning"
          />
        </div>
        <div>
          <AlertBox
            {...customComponentProps}
            message="info variant"
            variant="info"
          />
        </div>
        <div>
          <AlertBox
            {...customComponentProps}
            message="dark variant"
            variant="dark"
          />
        </div>
        <div>
          <AlertBox
            {...customComponentProps}
            message="light variant"
            variant="light"
          />
        </div>
        <div>
          <AlertBox
            {...customComponentProps}
            message="no dismissible"
            variant="info"
            dismissible={false}
          />
        </div>
        <div>
          <AlertBox
            {...customComponentProps}
            message="no icon"
            variant="info"
            withIcon={false}
          />
        </div>
        <div>
          <AlertBox
            {...customComponentProps}
            message="no badge"
            variant="info"
            waitingItems={null}
          />
        </div>
      </div>,
      container
    );
    const screenshot = await generateImage(generateImageConf);
    expect(screenshot).toMatchImageSnapshot();
  });
});
