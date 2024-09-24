import { baseConfig, reactConfig, testConfig } from '../src/index.js';

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
  {
    ...testConfig,
    files: ['fixtures/*.spec.js', 'fixtures/*.spec.ts', 'fixtures/*.spec.tsx'],
  },
];
