import * as React from "react";
import { FormData } from "../../lib";

// import BasicExample from "../../lib/examples/FormData/BasicExample";

const FormDataCard = () => {
  return (
    <div>
      <p>
        To fire up examples of usage import any component from{" "}
        <code>src/lib/examples/FormData</code> folder (i.e.{" "}
        <code>BasicExample</code> hashed on code of this demo).
      </p>
      <div>{/*<BasicExample />*/}</div>
      <hr />
      <h3>Playground</h3>
      <FormData
        initial={{
          // isEditing: true,
          // readOnly: true,
          value: "some custom value"
        }}
        isInvalid
        // maxLength={5}
        placeholder="type in..."
        // type="password"
        // as="textarea"
        prepend={[{ type: "text", value: "@" }]}
        append={[
          { type: "text", value: "0.00" },
          {
            type: "button",
            conf: {
              text: "add",
              description: "desc",
              onClick: arg => alert("Klik: " + arg),
              onClickArg: "test"
            }
          }
        ]}
        // hideActionButtons
        save={{
          onClick: (arg, afterActions) => {
            alert("save: " + arg);
            afterActions.makeEditable();
            afterActions.switchToData();
          },
          onClickArg: "saveTest"
          // disabled: true
        }}
        cancel={{
          onClick: arg => alert("cancel: " + arg),
          onClickArg: "cancelTest"
        }}
        onChange={e => {
          alert("change: " + e.target.value);
        }}
      />
    </div>
  );
};

export default FormDataCard;
