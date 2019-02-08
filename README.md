# React bootstrap tools

**Please note**: This project is under start-up process. Inconsistencies, fails or any collapses are highly possible until project will reach v. 1.0.0 stepstone.

[![MIT](https://img.shields.io/npm/l/react-bootstrap-tools.svg?style=flat-square)](https://github.com/LukaszNowakPL/react-bootstrap-tools/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/react-bootstrap-tools.svg?style=flat-square)](https://www.npmjs.com/package/react-bootstrap-tools)
[![Dependency Status](https://david-dm.org/yahoo/react-bootstrap.svg)](https://david-dm.org/yahoo/react-bootstrap)
[![npm downloads](https://img.shields.io/npm/dm/react-bootstrap-tools.svg?style=flat-square)](https://www.npmjs.com/package/react-bootstrap-tools)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

React bootstrap tools are bundle of tools build on top of <a href="https://github.com/react-bootstrap/react-bootstrap" target="_blank">react-bootstap</a> components. They are customisable components ready to use on any webpage.

Package contains:
* `DescribedComponent` to describe given html element using Tooltip
* `DescribedButton` to describe Button using Tooltip 

## Installation

Install dependency on your project

```
npm install react-bootstrap-tools
```

Import package to your component

```
import { DescribedComponent, DescrbedButton } from "react-bootstrap-tools";
```

Use it directly on your component

```
<DescribedComponent description="description text">
    <p>html element</p>
</DescribedComponent>
```

React bootstrap tools does not ship with any particular styling.
In order to provide Bootstap's default stylesheet attach it onto `head` section of your `html` document

```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
```

## Usage

Workable examples are available on sub-folders of `src/lib/examples/` folder. You can import those examples directly to demo application (see below).

### DescribedComponent

Simplest example

```
import React from 'react';
import { DescribedComponent } from 'react-bootstrap-tools';

const SimplestExample = () => (
    <DescribedComponent description="description text">
        <p>html element</p>
    </DescribedComponent>
);

export default SimplestExample;
```

Component API exposes given props

Type / Name | Default | Example | Description
--- | --- | --- | ---
|string description | undefined | Example description text | Description text to put inside `Tooltip` component
|string className | undefined | YourClassName | Additional class name to custom your styling of a `Tooltip` component. Use `.YourClassName > .tooltip-inner` to override background color and font color. Also customize `border-top-color` of your `.YourClassName.tooltip.top > .tooltip-arrow` element to avoid color itches.
|string placement | undefined | left | Position of a `Tooltip` over component it describes. Available options: `top`, `bottom`, `left`, `right`
|number delayHide | undefined | 3000 | Delay in milliseconds the `Tooltip` component will hide after describing component hovering finished.

## Contribution

Got ideas on how to make those components better? Open an issue under <a href="https://github.com/LukaszNowakPL/react-bootstrap-tools/issues" target="_blank">on GitHub bugtracker</a>.

## Development

Clone repo

````
git clone https://github.com/LukaszNowakPL/react-bootstrap-tools.git
````

Install all dependencies

```
npm install
```

Start development server

```
npm start
```

Preview is available under `http://localhost:3000/` url. Development server uses Demo app stored on `src/demo/index.tsx`. You have auto-reloading live preview of your development.
You also can use any of examples stored on sub-folders of `src/lib/examples/` folder.
You'll find commented option how to preview `BasicExample` of each component on `src/demo/App.tsx` file.

### Folder structure

Package is based on <a href="https://github.com/DimiMikadze/create-react-library" target="_blank">create-react-library</a> and implements it's concept of file structure.

Live demo files are stored on `src/demo` folder. You can manipulate components and their props on `App.tsx` file.

Developed components are stored on `src/lib/components` folder. Component's files should be encapsulated in one folder together:
* `/__tests__` folder for automatic `Jest` tests of given component
    * `__snapshots__` for storing snapshots created by `__tests__/renders.js` file
    * `functions.test.js` for Unit tests of functions inside `functions.ts` file
    * `integration.test.js` for integration tests of given component (cooperation with other components)
    * `renders.js` for rendering snapshots of component on different states
* `/gfx` folder for any images used by component
* `config.ts` for configuration data of given component
* `functions.ts` for logic functions
* `index.tsx` for main component file
* `interfaces.ts` for Type Script interfaces
* `style.scss` for component's style sheet

Note: Depending on component structure some files (i.e. `config.ts`, `functions.ts` or `__tests__/integration.test.js`) are not necessary on the package.

Example files are stored on sub-folders of `src/lib/examples` folder. Example components should be as simple as possible, returning only example container, some short description of an example, as well as Component formed to achieve given example's idea. Please attach as many valuable examples as possible.

`src/lib.index.js` is a gate for providing package components. If you add new one to the package please import it to this file and also make it available to package users by exporting it. Components not exported by this file are not visible for package end users.

If you attach any 3rd party package please store it on `dependency` section of your `package.json` file as well as mention it on `module.export.externals` on your `config/webpack.config.prod.js` file (i.e. search for `react-bootstrap` string there).
Avoiding to do so will end up on breaking down the application that consumes your component, even if the package has build and published successfully.
### Technologies

Components are written on <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>. However you may write new ones using `Jsx` or older versions of JS.
Package is based on <a href="https://github.com/DimiMikadze/create-react-library" target="_blank">create-react-library</a> which is a library based on ejected <a href="https://facebook.github.io/create-react-app/" target="_blank">create-react-app</a> tailored to writing new `NPM` modules.
Package consumes <a href="http://sass-lang.com/" target="_blank">Sass</a> and <a href="https://jestjs.io/" target="_blank">Jest</a> frontend test environment.

### Testing

To fire up `Jest` test 

```
npm run test
```

To fire up `Jest` tests with included Coverage report (stored under `coverage/` folder and available as an html document under `coverage/lcov-report/index.html` file)

```
npm run test-with-coverage
```
 
### Build library

```
npm run build
```

Produces production version of library under the `build` folder.

### Publish library

```
npm publish
```

## Thanks

To all authors of packages used to build this one and contributors. Special props goes to:
* <a href="https://github.com/DimiMikadze/create-react-library" target="_blank">create-react-library</a>
* <a href="https://github.com/react-bootstrap/react-bootstrap" target="_blank">react-bootstrap</a>
