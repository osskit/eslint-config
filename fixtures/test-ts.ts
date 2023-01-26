jest.mock<typeof import('./ts')>('./ts', () => ({
  ...jest.requireActual('./ts'),
  bar: () => 'baz',
}));
