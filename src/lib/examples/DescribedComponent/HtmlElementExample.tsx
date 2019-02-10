import * as React from "react";
import { DescribedComponent } from "../../../lib";

const HtmlElementExample = () => (
  <div>
    <h3>Description over different html elements</h3>
    <p>
      You may describe any visible html element, i.e. <code>link</code>,{" "}
      <code>button</code>, <code>image</code>, or <code>paragraph</code>.
    </p>
    <ul>
      <li>
        <DescribedComponent description="link description text">
          <a href="http://www.google.com/">link</a>
        </DescribedComponent>
      </li>
      <li>
        <DescribedComponent description="paragraph description text">
          <p>paragraph element</p>
        </DescribedComponent>
      </li>
      <li>
        <DescribedComponent description="span description text">
          <span>span element</span>
        </DescribedComponent>
      </li>
    </ul>
  </div>
);

export default HtmlElementExample;
