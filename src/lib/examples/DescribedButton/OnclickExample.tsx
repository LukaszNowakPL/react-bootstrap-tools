import * as React from "react";
import { DescribedButton } from "../../../lib";

const onClickArg = { testKey: "test value" };
const alertAction = ev => {
  // do whatever you want with ev object
  alert("The button has been clicked");
};
const alertActionWithArg = (arg, ev) => {
  // do whatever you want with ev and arg objects
  alert("The button has passed argument: " + arg.testKey);
};

const OnclickExample = () => (
  <div>
    <h3>Onclick example</h3>
    <p>
      Pass <code>onClick</code> prop to custom action taken during{" "}
      <code>Button</code> component click. Your callback method will receive{" "}
      <code>event</code> object that initiated the call:
      <pre>
        <code>
          {"const onClickCallback = event => { /*callback body here*/ }"}
        </code>
      </pre>
    </p>
    <p>
      If you additionally pass <code>onClickArg</code> prop, your{" "}
      <code>onClick</code> callback method will receive two arguments:{" "}
      <code>onClickArg</code> provided, and <code>event</code> object that
      initiated the call:
      <pre>
        <code>
          {
            "const onClickCallback = (customArg, event) => { /*callback body here with customArg value ready to use*/ }"
          }
        </code>
      </pre>
      Using this option you can pass callback method by{" "}
      <code>{"onClick = {onClickCallback}"}</code>. This way is vital for better
      React performance in terms of avoiding the unnecessary re-render of a
      component (unintentionally failing on shallow comparision).
    </p>
    <DescribedButton
      description="This button will fire up text alert"
      text="onClick action"
      onClick={alertAction}
    />
    <DescribedButton
      description="This button will fire up text alert with passed argument"
      text="onclick with argument"
      onClick={alertActionWithArg}
      onClickArg={onClickArg}
    />
  </div>
);

export default OnclickExample;
