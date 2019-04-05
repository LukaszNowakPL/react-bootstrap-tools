import * as React from "react";
import { Avatar } from "../../lib";

// import BasicExample from "../../lib/examples/Avatar/BasicExample";

const AvatarCard = () => {
  return (
    <div>
      <p>
        To fire up examples of usage import any component from{" "}
        <code>src/lib/examples/Avatar</code> folder (i.e.{" "}
        <code>BasicExample</code> hashed on code of this demo).
      </p>
      <div>{/*<BasicExample />*/}</div>
      <hr />
      <h3>Playground</h3>
      <Avatar />
    </div>
  );
};

export default AvatarCard;
