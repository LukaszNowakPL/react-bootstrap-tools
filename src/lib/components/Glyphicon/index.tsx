import * as React from "react";
import { PureComponent } from "react";
import { GlyphiconProps } from "./interfaces";
import { getClassName } from "./functions";

class Glyphicon extends PureComponent<GlyphiconProps> {
  render() {
    const { icon, className } = this.props;

    const componentClassName: string = getClassName(className);

    return <i className={componentClassName}>{icon}</i>;
  }
}

export default Glyphicon;
