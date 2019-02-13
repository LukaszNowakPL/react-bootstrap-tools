import * as React from "react";
import { DescribedButton } from "../../../lib";

const LinkExample = () => (
  <div>
    <h3>Link example</h3>
    <p>
      Pass <code>href</code> prop to automatically transform <code>Button</code>{" "}
      to workable <code>link</code>. To open the link on new window you may
      additionally pass <code>hrefNewWindow</code> prop. This option works only
      when passing <code>href</code> prop.
    </p>
    <DescribedButton
      description="description text"
      text="link opening on same window"
      href="http://google.com/"
    />
    <DescribedButton
      description="description text"
      text="link opening on new window"
      href="https://github.com/LukaszNowakPL/react-bootstrap-tools"
      hrefNewWindow={true}
    />
  </div>
);

export default LinkExample;
