import calc from './es6';

describe('test', () => {
  it('case', () => {
    expect(calc({a: 1, b: 2})).toBe(3);
  });
});