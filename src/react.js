import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.Config} */
export const reactConfig = {
  name: '@osskit/eslint-config/react.js',
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        selector: 'default',
        trailingUnderscore: 'allow',
      },
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
        selector: 'variable',
        trailingUnderscore: 'allow',
      },
      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'enumMember',
      },
      {
        filter: {
          match: true,
          regex: '^x-|^Content-Type$',
        },
        format: null,
        selector: 'objectLiteralProperty',
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': 'error',
    'react/checked-requires-onchange-or-readonly': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': 'error',
    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/hook-use-state': 'error',
    'react/iframe-missing-sandbox': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': ['error', { children: 'always', props: 'always' }],
    'react/jsx-curly-newline': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-filename-extension': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-handler-names': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-max-depth': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-newline': [
      'error',
      {
        prevent: true,
      },
    ],
    'react/jsx-no-bind': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-literals': 'error',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'error',
    'react/no-array-index-key': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'off',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'error',
    'react/no-namespace': 'error',
    'react/no-object-type-as-default-prop': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-class-component-methods': 'error',
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-exact-props': 'off',
    'react/prefer-read-only-props': 'off',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'off',
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'off',
    'react/sort-default-props': 'off',
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-props-no-spread-multi': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
