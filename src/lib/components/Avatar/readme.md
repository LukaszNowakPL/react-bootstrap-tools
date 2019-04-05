# Avatar

Component for showing user avatar.

![Avatar example](../../../../readme_img/AvatarExample.png)

## Example of usage

```
import React from 'react';
import { Avatar } from 'react-bootstrap-tools';

const SimplestExample = () => (
    <Avatar />
);

export default SimplestExample;
```

## Available optional props

- string `src` : Url of a picture to use. If not provided material icon will show instead.
  Additional props connected with `src` prop:
  - string `imageClassName` : Additional class name to custom your styling of provided image
- string `icon` : Id of a material icon to show in case of no `src` prop provided. This id will override the default icon. Click [here](https://material.io/tools/icons/?style=baseline) to check available icons library.
  Additional props connected with `withIcon` prop:
  - string `iconClassName` : Additional class name to custom your styling of provided icon
- string `className` : Additional class name to custom your styling of a component. 
