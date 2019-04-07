# DescribedButton

Wrapper for describing Bootstrap's `Button` using `Tooltip` component. It also handles click actions, auto activation/disabling of button as well as simulates `href` link behaviour.

![DescribedButton example](../../../../readme_img/DescribedButtonExample.png)

## Example of usage

```
import React from 'react';
import { DescribedButton } from 'react-bootstrap-tools';

const SimplestExample = () => (
    <DescribedButton description="description text" text="button text" />
);

export default SimplestExample;
```

## Available optional props

- string `description` : Description text to put inside `Tooltip` component
- string `text` : Text visible on button
- string `icon` : Material icon id. If used together with `text` prop, icon will appear on the left hand side of text provided. Click [here](https://material.io/tools/icons/?style=baseline) to check available icons library.<br />
  Additional props connected with `icon` prop:
  - string `iconClassName` : Additional class name to custom your styling of provided icon
- string `className` : Additional class name to custom your styling of a `Tooltip` component.
  Styling example for `NewStyle` value:<pre>
  .NewStyle > .tooltip-inner {
  background-color: yellow;
  color: black;
  }
  .NewStyle.bs-tooltip-top .arrow::before {
  border-top-color: yellow !important;
  }
  .NewStyle.bs-tooltip-right .arrow::before {
  border-right-color: yellow !important;
  }
  .NewStyle.bs-tooltip-bottom .arrow::before {
  border-bottom-color: yellow !important;
  }
  .NewStyle.bs-tooltip-left .arrow::before {
  border-left-color: yellow !important;
  }</pre>
- string `buttonClassName` : Additional class name to custom your styling of button
- string `placement` : Position of a `Tooltip` over button.<br />
  Available options:
  - auto-start
  - auto
  - auto-end
  - top-start
  - top
  - top-end
  - right-start
  - right
  - right-end
  - bottom-end
  - bottom
  - bottom-start
  - left-end
  - left
  - left-start
- number `delay` : Number of milliseconds the `Tooltip` component will appear and hide after button hover.
- boolean `defaultShow` : Set `true` will initialise button with visible description
- string `trigger` : Action necessary to take over button to initialise visibility of description.<br />
  Available options:
  - hover
  - click
  - focus
  - Array<hover, click, focus>
- string `id` : Id property of rendered button
- string `name` : Name property of rendered button
- string `type` : Type property of rendered button.<br />
  Available options:
  - button
  - reset
  - submit
- boolean `active` : Set `true` will show button in visual `active` mode (same as it was activated by trigger action)
- boolean `block` : Set `true` will create block level buttons. It will span the full width of a parent
- boolean `disabled` : Set `true` will disable the button. This way the `onClick` action will not initialise
- string `href` : If on use, button will work as usual link directing to prop's url<br />
  Additional props connected with `href` prop:
  - boolean `hrefNewWindow` : Set `true` will open `href` url on new window<br />
- string `size` : Bootstrap's size property of a button.<br />
  Available options:
  - sm
  - lg
- string `variant` : Bootstrap's variant property of a button.<br />
  Available options:
  - primary
  - secondary
  - success
  - danger
  - warning
  - info
  - dark
  - light
  - link
  - outline-primary
  - outline-secondary
  - outline-success
  - outline-danger
  - outline-warning
  - outline-info
  - outline-dark
  - outline-light
- callback `onClick` : Callback function taken during click on button. The callback will receive `event` object that initiated the call.<pre>const onClickCallback = event => { /\*callback definition\*/ }</pre><br />
  Additional props connected with `onClick` prop:
  - any `onClickArg` : If on use, `callback` function will additionally receive this prop's data.<br /><pre>const onClickCallback = (customArg, event) => { /\*callback definition\*/ }</pre>This option is vital for better performance in terms of avoiding the unnecessary re-render of a component.