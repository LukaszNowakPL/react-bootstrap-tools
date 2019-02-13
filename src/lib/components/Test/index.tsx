import * as React from "react";

interface TestProps {
  prop1: string;
  prop2: string;
  prop3?: string;
  prop4?: string;
}

interface SubtestProps {
  subProp: string;
  prop3?: string;
}

export const Subtest = (props: SubtestProps) => {
  return (
    <div>
      <hr />
      <p>Subtest component</p>
      <ul>
        {Object.keys(props).map(prop => (
          <li>
            {prop}: {props[prop]}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export const Test = (props: TestProps) => {
  const { prop1, prop2: subProp, ...otherSubtestProps } = props;

  const subtestProps: SubtestProps = {
    subProp,
    ...otherSubtestProps
  };

  return (
    <div>
      <p>Test component</p>
      <ul>
        {Object.keys(props).map(prop => (
          <li>
            {prop}: {props[prop]}
          </li>
        ))}
      </ul>
      <Subtest {...subtestProps} />
    </div>
  );
};

interface PropBag {
  width: string;
  height: number;
  something?: string;
}

export const Aaa = props => {
  const propBag: PropBag = {
    width: "aaa",
    height: 300
  };
  if (false) {
    propBag.something = "bob";
  }

  return <Bbb {...propBag} />;
};

const Bbb = props => {
  return <p>aaa</p>;
};
