import { baseConfig, testConfig } from '../src/index.js';

export default [
  {
    ignores: ['fixtures/react.js'],
  },
  {
    ...baseConfig,
    files: ['fixtures/*.js', 'fixtures/*.ts', 'fixtures/*.tsx'],
    ignores: ['fixtures/react.js'],
  },
  {
    ...testConfig,
    files: ['fixtures/*.spec.js', 'fixtures/*.spec.ts', 'fixtures/*.spec.tsx'],
  },
];
