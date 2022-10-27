# @osskit/eslint-config [![NPM version](https://img.shields.io/npm/v/@osskit/eslint-config.svg)](https://www.npmjs.com/package/@osskit/eslint-config)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) used by osskit.

## Install

```
$ npm install --save-dev @osskit/eslint-config
```

## Plugins

This config uses several plugins:

```
$ npm install --save-dev eslint-plugin-import eslint-plugin-unicorn @typescript-eslint/eslint-plugin
```

## Usage

Create an `.eslintrc` file:

```json
{
  "extends": "@osskit"
}
```

Or add the ESLint config to your `package.json`:

```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "extends": "@osskit"
  }
}
```

### Additional Configs

This package exposes additional configs.

#### Test [`@osskit/eslint-config/test`](test.json)

Use this for your Jest tests

```json
{
  "extends": "@osskit/eslint-config/test"
}
```

Install the plugin:

```
$ npm install --save-dev eslint-plugin-jest
```

#### React [`@osskit/eslint-config/react`](react.json)

```json
{
  "extends": "@osskit/eslint-config/react"
}
```

Install the plugins:

```
$ npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

#### React Test [`@osskit/eslint-config/react-test`](react-test.json)

Use this for your React Jest tests

```json
{
  "extends": "@osskit/eslint-config/react-test"
}
```

Install the plugins:

```
$ npm install --save-dev eslint-plugin-jest eslint-plugin-react eslint-plugin-react-hooks
```

#### React Native [`@osskit/eslint-config/react-native`](react-native.json)

```json
{
  "extends": "@osskit/eslint-config/react-native"
}
```

Install the plugins:

```
$ npm install --save-dev eslint-plugin-react eslint-plugin-react-native eslint-plugin-react-hooks
```

#### React Native Test [`@osskit/eslint-config/react-native-test`](react-native-test.json)

Use this for your React Native Jest tests

```json
{
  "extends": "@osskit/eslint-config/react-native-test"
}
```

Install the plugins:

```
$ npm install --save-dev eslint-plugin-jest eslint-plugin-react eslint-plugin-react-native eslint-plugin-react-hooks
```