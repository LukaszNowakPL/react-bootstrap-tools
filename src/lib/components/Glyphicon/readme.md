# Glyphicon

Component for rendering [Material icon](https://material.io/tools/icons/?style=baseline).

![Glyphicon example](../../../../readme_img/GlyphiconExample.png)

## Example of usage

```
import React from 'react';
import { Glyphicon } from 'react-bootstrap-tools';

const SimplestExample = () => (
    <Glyphicon icon="add" />
);

export default SimplestExample;
```

## Available props

- string `icon` Material icon id. Click [here](https://material.io/tools/icons/?style=baseline) to check available icons library.

## Available optional props

- string `className` Additional class name to custom your styling of an icon.
  Styling example for `NewStyle` value:<pre>
  .NewStyle {
  background-color: yellow;
  color: red;
  }</pre>
