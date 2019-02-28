import * as React from "react";
import { Glyphicon } from "../../lib";
// import BasicExample from "../../lib/examples/Glyphicon/BasicExample";

const GlyphiconCard = () => (
  <div>
    <p>
      To fire up examples of usage import any component from{" "}
      <code>src/lib/examples/Glyphicon</code> folder (i.e.{" "}
      <code>BasicExample</code> hashed on code of this demo).
    </p>
    {/*<div><BasicExample /></div>*/}
    <hr />
    <h3>Playground</h3>
    <Glyphicon icon="add" />
  </div>
);

export default GlyphiconCard;
