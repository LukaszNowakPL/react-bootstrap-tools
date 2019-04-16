import * as React from "react";
import { PureComponent } from "react";
import { FormDataProps } from "./interfaces";
import Glyphicon from "../Glyphicon";

class FormData extends PureComponent<FormDataProps> {
  displayName: string = "FormData";

  render() {
    return <section>FormData</section>;
  }
}

export default FormData;
