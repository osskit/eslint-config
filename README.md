# @osskit/eslint-config [![NPM version](https://img.shields.io/npm/v/@osskit/eslint-config.svg)](https://www.npmjs.com/package/@osskit/eslint-config)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) used by osskit.

## Install

```shell
$ npm install --save-dev @osskit/eslint-config
```
```shell
$ yarn add --dev @osskit/eslint-config
```

## Usage

Create an `eslint.config.js` file:

```js
import {baseConfig} from '@osskit/eslint-config';

export default [
  baseConfig,
];
```

### Additional Configs

This package exposes additional configs.

#### [`Test`](src/test.js)

Use this for your Vitest tests

```js
import {baseConfig, testConfig} from '@osskit/eslint-config';

export default [
  baseConfig,
  testConfig,
];
```

#### [`React`](src/react.js)

Use this for your React projects

```js
import {baseConfig, reactConfig} from '@osskit/eslint-config';

export default [
  baseConfig,
  reactConfig,
];
```

#### [`React`](src/react.js) & [`Test`](src/test.js)

Use this for your React tests

```js
import {baseConfig, reactConfig, testConfig} from '@osskit/eslint-config';

export default [
  baseConfig,
  reactConfig,
  testConfig,
];
```
