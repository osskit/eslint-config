# @osskit/eslint-config

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

#### Test [`@osskit/test`](test.json)

Use this for your jest tests

```json
{
  "extends": "@osskit/test"
}
```

Install the plugin:

```
$ npm install --save-dev eslint-plugin-jest
```

#### React [`@osskit/react`](react.json)

```json
{
  "extends": "@osskit/react"
}
```

Install the plugin:

```
$ npm install --save-dev eslint-plugin-react
```

#### React Test [`@osskit/react-test`](react-test.json)

Use this for your react jest tests

```json
{
  "extends": "@osskit/react-test"
}
```

Install the plugins:

```
$ npm install --save-dev eslint-plugin-jest eslint-plugin-react
```

#### React Native [`@osskit/react-native`](react-native.json)

```json
{
  "extends": "@osskit/react-native"
}
```

Install the plugins:

```
$ npm install --save-dev eslint-plugin-react eslint-plugin-react-native
```

#### React Native Test [`@osskit/react-native-test`](react-native-test.json)

Use this for your react native jest tests

```json
{
  "extends": "@osskit/react-native-test"
}
```

Install the plugins:

```
$ npm install --save-dev eslint-plugin-jest eslint-plugin-react eslint-plugin-react-native
```