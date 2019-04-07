# React bootstrap tools

**Please note**: This project is under start-up process. Inconsistencies, fails or any collapses are highly possible until project will reach v. 1.0.0 stepstone.

[![MIT](https://img.shields.io/npm/l/react-bootstrap-tools.svg?style=flat-square)](https://github.com/LukaszNowakPL/react-bootstrap-tools/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/react-bootstrap-tools.svg?style=flat-square)](https://www.npmjs.com/package/react-bootstrap-tools)
[![npm downloads](https://img.shields.io/npm/dm/react-bootstrap-tools.svg?style=flat-square)](https://www.npmjs.com/package/react-bootstrap-tools)
[![Build Status](https://travis-ci.org/LukaszNowakPL/react-bootstrap-tools.svg?branch=master)](https://travis-ci.org/LukaszNowakPL/react-bootstrap-tools)
[![dependencies Status](https://david-dm.org/LukaszNowakPL/react-bootstrap-tools/status.svg)](https://david-dm.org/LukaszNowakPL/react-bootstrap-tools)
[![devDependencies Status](https://david-dm.org/LukaszNowakPL/react-bootstrap-tools/dev-status.svg)](https://david-dm.org/LukaszNowakPL/react-bootstrap-tools?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Maintainability](https://api.codeclimate.com/v1/badges/9037afb2f058f1ddb907/maintainability)](https://codeclimate.com/github/LukaszNowakPL/react-bootstrap-tools/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9037afb2f058f1ddb907/test_coverage)](https://codeclimate.com/github/LukaszNowakPL/react-bootstrap-tools/test_coverage)

React bootstrap tools are bundle of tools build on top of [react-bootstap](https://github.com/react-bootstrap/react-bootstrap) components. They are customisable components ready to use on any webpage.

Package contains:

- `DescribedComponent` to describe given html element using Tooltip
- `DescribedButton` to describe Button using Tooltip
- `Glyphicon` to provide Material icon
- `AlertBox` to show small message box
- `AlertBoxGroup` to group AlertBox components<br />
  Available utilities connected with `AlertBoxGroup` component:
  - `addAlert` for managing addition of an alert
  - `dismissAlert` for managing dismissal of an alert
- `Avatar` to show user avatar

For more info about each component please refer to it's `readme.md` file.

## Installation

Install dependency on your project

```
npm install react-bootstrap-tools
```

Import any package to your component

```
import { DescribedComponent, DescrbedButton, Glyphicon } from "react-bootstrap-tools";
```

Use it directly on your component

```
<DescribedComponent description="description text">
    <p>html element</p>
</DescribedComponent>
```

## Styling

Import stylesheet into starting component of your application, or everywhere you import any element of React bootstrap tools package.
Please refer to component's documentation to find out if it exposes any internal class name.

```
import "react-bootstrap-tools/build/static/css/index.css";
```

## Third party styling

React bootstrap tools does not ship with any 3rd party styling.
In order to provide Bootstap's default stylesheet attach it onto `head` section of your `html` document.
Check more info [here](https://react-bootstrap.github.io/getting-started/introduction#stylesheets)

```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
```

If you use any component consuming Material icon, especially:

- `Glyphicon` component
- `DescribedButton` with `icon` prop
- `AlertBox` with `withIcon` prop
- `Avatar` with no `src` prop

In order to see graphical icons attach icons definition onto `head` section of your `html` document. Check more info [here](https://google.github.io/material-design-icons/)

```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

## Usage

Workable examples are available on sub-folders of `src/lib/examples/` folder. You can import those examples directly to demo application ([see Development section](#development) below).

## Contribution

Got ideas on how to make those components better? Open an issue under [on GitHub bugtracker](https://github.com/LukaszNowakPL/react-bootstrap-tools/issues).

## Development

Clone repo

```
git clone https://github.com/LukaszNowakPL/react-bootstrap-tools.git
```

Install all dependencies

```
npm install
```

Start development server

```
npm start
```

Check hot reloading preview

```
http://localhost:3000/
```

Development server uses Demo app stored on `src/demo/index.tsx`. You can import any of examples stored on sub-folders of `src/lib/examples/` folder.
You'll find commented option how to preview `BasicExample` of each component on component cards imported by `src/demo/App.tsx` file.

### Folder structure

Package is based on [create-react-library](https://github.com/DimiMikadze/create-react-library) and implements it's concept of file structure.

Live demo files are stored on `src/demo` folder. You can manipulate components and their props on component cards imported by `App.tsx` file.

Developed components are stored on `src/lib/components` folder. Component's files should be encapsulated in one folder together:

- `/__tests__` folder for automatic `Jest` tests of given component
  - `__image_snapshots__` for storing graphical snapshots created by `__tests__/iamges.js` file
  - `__snapshots__` for storing snapshots created by `__tests__/renders.js` file
  - `functions.js` for Unit tests of functions inside `functions.ts` file
  - `images.js` for rendering graphical snapshots of component on different states
  - `integration.js` for integration tests of given component (cooperation with other components)
  - `renders.js` for rendering snapshots of component on different states
- `/gfx` folder for any images used by component
- `config.ts` for configuration data of given component
- `functions.ts` for logic functions
- `index.tsx` for main component file
- `interfaces.ts` for Type Script interfaces
- `readme.md` for readme file
- `style.scss` for component's style sheet

**Note**: Depending on component structure some files (i.e. `config.ts`, `functions.ts` or `__tests__/integration.js`) are not necessary on the package.

### Examples

Example files are stored on sub-folders of `src/lib/examples` folder. Example components should be as simple as possible, returning only example container, some short description of an example, as well as Component formed to achieve given example's idea. Please attach as many valuable examples as possible.

### Importing components

`src/lib/index.js` is a gate for providing package components. If you add new one to the package please import it to this file and also make it available to package users by exporting it. Components not exported by this file are not visible for package end users. Any import of developed package (including those on demo app and examples) should take place from `src/lib/index.js` file.

### 3rd party packages

If you attach any 3rd party package please mention it on `devDependencies` section of your `package.json` file
as well as on `module.export.externals` of your `config/webpack.config.prod.js` file.

package.json

```
{
  "devDependencies": {
    "react-bootstrap": "^1.0.0-beta.3"
  },
}
```

config/webpack.config.prod.js

```
module.exports = {
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
        'react-bootstrap': 'react-bootstrap',
    }
}
```

Avoiding to do so will end up on breaking down the application that consumes your component, even if the package has build and published successfully.

### Technologies

Components are written on [TypeScript](https://www.typescriptlang.org/). However you may write new ones using `Jsx` or older versions of JS.
Package is based on [create-react-library](https://github.com/DimiMikadze/create-react-library) which is a library based on ejected <a href="https://facebook.github.io/create-react-app/" target="_blank">create-react-app</a> tailored to writing new `NPM` modules.
Package consumes [Sass](http://sass-lang.com/) and [Jest](https://jestjs.io/) frontend test environment.

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

- [create-react-library](https://github.com/DimiMikadze/create-react-library)
- [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)
