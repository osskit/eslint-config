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
import config from '@osskit/eslint-config';

export default [
  ...config,
];
```

### Additional Configs

This package exposes additional configs.

#### Test [`@osskit/eslint-config/test.js`](test.js)

Use this for your vitest tests

```js
import config from '@osskit/eslint-config';
import testConfig from '@osskit/eslint-config/test.js';

export default [
  ...config,
  ...testConfig,
];
```

#### React [`@osskit/eslint-config/react.js`](react.js)

Use this for your React projects

```js
import config from '@osskit/eslint-config';
import reactConfig from '@osskit/eslint-config/react.js';

export default [
  ...config,
  ...reactConfig,
];
```

#### React Test [`@osskit/eslint-config/react-test.js`](react-test.js)

Use this for your React tests

```js
import config from '@osskit/eslint-config';
import reactConfig from '@osskit/eslint-config/react.js';
import testConfig from '@osskit/eslint-config/test.js';

export default [
  ...config,
  ...reactConfig,
  ...testConfig,
];
```
