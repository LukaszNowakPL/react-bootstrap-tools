import * as React from "react";
import { DescribedComponent } from "../../lib";
// import BasicExample from "../../lib/examples/DescribedComponent/BasicExample";

const DescribedComponentCard = () => (
  <div>
    <p>
      To fire up examples of usage import any component from{" "}
      <code>src/lib/examples/DescribedComponent</code> folder (i.e.{" "}
      <code>BasicExample</code> hashed on code of this demo).
    </p>
    {/*<div><BasicExample /></div>*/}
    <hr />
    <h3>Playground</h3>
    <DescribedComponent description="description text">
      <button>component text</button>
    </DescribedComponent>
  </div>
);

export default DescribedComponentCard;
