import React from "react";
import ReactDOM from "react-dom";
import Avatar from "../index";
import { generateImage } from "jsdom-screenshot";

describe("<Avatar />", () => {
  const customComponentProps = {};

  const generateImageConf = {
    waitUntilNetworkIdle: true,
    viewport: { width: 50, height: 100 }
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

  it("renders avatar pack", async () => {
    ReactDOM.render(
      <div>
        <div>
          <Avatar {...customComponentProps} />
        </div>
        <div>
          <Avatar
            {...customComponentProps}
            src="https://phyzzi.com/img/logo/logo-map-theme.svg"
          />
        </div>
        <div>
          <Avatar {...customComponentProps} icon="add" />
        </div>
      </div>,
      container
    );
    const screenshot = await generateImage(generateImageConf);
    expect(screenshot).toMatchImageSnapshot();
  });
});
