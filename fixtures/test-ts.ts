jest.mock('./ts', () => ({
  ...jest.requireActual('./ts'),
  bar: () => 'baz',
}));
