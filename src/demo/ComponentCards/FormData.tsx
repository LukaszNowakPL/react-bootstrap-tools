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
      <FormData />
    </div>
  );
};

export default FormDataCard;
