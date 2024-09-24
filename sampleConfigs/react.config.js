import { baseConfig, reactConfig } from '../src/index.js';

export default [
  {
    ...baseConfig,
    languageOptions: {
      ...baseConfig.languageOptions,
      parserOptions: {
        ...baseConfig.languageOptions.parserOptions,
        ecmaFeatures: {
          ...baseConfig.languageOptions.parserOptions.ecmaFeatures,
          jsx: true,
        },
      },
    },
    files: ['fixtures/*.js', 'fixtures/*.ts', 'fixtures/*.tsx'],
  },
  {
    ...reactConfig,
    files: ['fixtures/*.js', 'fixtures/*.ts', 'fixtures/*.tsx'],
  },
];
