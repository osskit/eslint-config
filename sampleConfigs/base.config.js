import { baseConfig } from '../src/index.js';

export default [
  {
    ignores: ['fixtures/react.js'],
  },
  {
    ...baseConfig,
    files: ['fixtures/*.js', 'fixtures/*.ts', 'fixtures/*.tsx'],
    ignores: ['fixtures/react.js'],
  },
];
