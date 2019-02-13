import * as React from "react";
import { GlyphiconProps } from "./interfaces";
import { getClassName } from "./functions";

const Glyphicon = (props: GlyphiconProps) => {
  const { icon, className } = props;

  const componentClassName: string = getClassName(className);

  return <i className={componentClassName}>{icon}</i>;
};

export default Glyphicon;
