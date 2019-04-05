import React from "react";
import { shallow } from "enzyme";
import Avatar, { AvatarIcon, AvatarImage } from "../index";

describe("<Avatar />", () => {
  const customComponentProps = {};

  it("renders", () => {
    const component = shallow(<Avatar {...customComponentProps} />);
    expect(component).toMatchSnapshot();
  });

  it("renders provided icon", () => {
    const component = shallow(
      <Avatar {...customComponentProps} icon="testIcon" />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders provided icon and icon's class name", () => {
    const component = shallow(
      <Avatar
        {...customComponentProps}
        icon="testIcon"
        iconClassName="testIconClassName"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders provided src", () => {
    const component = shallow(
      <Avatar {...customComponentProps} src="testSrc" />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders provided src and image's class name", () => {
    const component = shallow(
      <Avatar
        {...customComponentProps}
        src="testSrc"
        imageClassName="testImageClassName"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with provided class name", () => {
    const component = shallow(
      <Avatar {...customComponentProps} className="testClassName" />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with no icon if src is provided", () => {
    const component = shallow(
      <Avatar {...customComponentProps} icon="testIcon" src="testSrc" />
    );
    expect(component).toMatchSnapshot();
  });
});

describe("<AvatarIcon />", () => {
  const customComponentProps = {};

  it("renders", () => {
    const component = shallow(<AvatarIcon {...customComponentProps} />);
    expect(component).toMatchSnapshot();
  });

  it("renders with provided icon", () => {
    const component = shallow(
      <AvatarIcon {...customComponentProps} icon="testIcon" />
    );
    expect(component).toMatchSnapshot();
  });

  it("renders with provided iconClassName", () => {
    const component = shallow(
      <AvatarIcon {...customComponentProps} iconClassName="testIconClassName" />
    );
    expect(component).toMatchSnapshot();
  });
});

describe("<AvatarImage />", () => {
  const customComponentProps = {
    src: "testSrc"
  };

  it("renders", () => {
    const component = shallow(<AvatarImage {...customComponentProps} />);
    expect(component).toMatchSnapshot();
  });

  it("renders with provided imageClassName", () => {
    const component = shallow(
      <AvatarImage
        {...customComponentProps}
        imageClassName="testImageClassName"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
