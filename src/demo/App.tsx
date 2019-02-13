import * as React from "react";
import { DescribedComponent, DescribedButton, Glyphicon } from "../lib";
import "./style.scss";
// import BasicExample from "../lib/examples/DescribedComponent/BasicExample";
// import BasicExample from "../lib/examples/DescribedButton/BasicExample";
// import BasicExample from "../lib/examples/Glyphicon/BasicExample";

const App = () => (
  <div>
    <h1>React bootstrap tools</h1>

    <h2>Described component</h2>
    <p>
      To fire up examples of usage import any component from{" "}
      <code>src/lib/examples/DescribedComponent</code> folder (i.e.{" "}
      <code>BasicExample</code> hashed on code of this demo).
    </p>
    {/*<div><BasicExample /></div>*/}
    <h3>Playground</h3>
    <DescribedComponent description="description text">
      <button>component text</button>
    </DescribedComponent>

    <h2>Described button</h2>
    <p>
      To fire up examples of usage import any component from{" "}
      <code>src/lib/examples/DescribedButton</code> folder (i.e.{" "}
      <code>BasicExample</code> hashed on code of this demo).
    </p>
    {/*<div><BasicExample /></div>*/}
    <h3>Playground</h3>
    <DescribedButton description="description text" text="button text" />

    <h2>Glyphicon</h2>
    <p>
      To fire up examples of usage import any component from{" "}
      <code>src/lib/examples/Glyphicon</code> folder (i.e.{" "}
      <code>BasicExample</code> hashed on code of this demo).
    </p>
    {/*<div><BasicExample /></div>*/}
    <h3>Playground</h3>
    <Glyphicon icon="add" />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="div">
      <span className="componentArea">
        <Glyphicon icon="build" />
      </span>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
);

export default App;
