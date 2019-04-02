import React from "react";
import ReactDOM from "react-dom";
import DescribedButton from "../index";
import { generateImage } from "jsdom-screenshot";

describe("<DescribedButton />", () => {
  const customComponentProps = {};

  const generateImageConf = {
    waitUntilNetworkIdle: true,
    viewport: { width: 400, height: 1000 }
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
          <DescribedButton
            {...customComponentProps}
            variant="primary"
            text="primary variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="secondary"
            text="secondary variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="success"
            text="success variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="danger"
            text="danger variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="warning"
            text="warning variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="info"
            text="info variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="dark"
            text="dark variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="light"
            text="light variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="link"
            text="link variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="outline-primary"
            text="outline-primary variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="outline-secondary"
            text="outline-secondary variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="outline-success"
            text="outline-success variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="outline-danger"
            text="outline-danger variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="outline-warning"
            text="outline-warning variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="outline-info"
            text="outline-info variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="outline-dark"
            text="outline-dark variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            variant="outline-light"
            text="outline-light variant"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            block={true}
            text="block button"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            disabled={true}
            text="disabled button"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            size="sm"
            text="sm size button"
          />
        </div>
        <div>
          <DescribedButton
            {...customComponentProps}
            icon="add"
            text="button with icon"
          />
        </div>
        <div>
          <DescribedButton {...customComponentProps} text="" />
        </div>
      </div>,
      container
    );
    const screenshot = await generateImage(generateImageConf);
    expect(screenshot).toMatchImageSnapshot();
  });
});
