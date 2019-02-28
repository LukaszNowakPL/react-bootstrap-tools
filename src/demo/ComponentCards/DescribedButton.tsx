import * as React from "react";
import { DescribedButton } from "../../lib";
// import BasicExample from "../../lib/examples/DescribedButton/BasicExample";

const DescribedButtonCard = () => (
  <div>
    <p>
      To fire up examples of usage import any component from{" "}
      <code>src/lib/examples/DescribedButton</code> folder (i.e.{" "}
      <code>BasicExample</code> hashed on code of this demo).
    </p>
    {/*<div><BasicExample /></div>*/}
    <hr />
    <h3>Playground</h3>
    <DescribedButton description="description text" text="button text" />
  </div>
);

export default DescribedButtonCard;
