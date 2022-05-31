import calc, { asyncCalc } from './es6.js';

describe('test', () => {
  beforeAll(() => {
    // Nothing
  });

  beforeEach(() => {
    // Nada
  });

  afterEach(() => {
    // Zip
  })

  afterAll(() => {
    // Zilch
  })

  it('case', () => {
    expect(calc({a: 1, b: 2})).toBe(3);
  });

  it('async case', async () => {
    await expect(asyncCalc({a: 1, b: 2})).resolves.toBe(3);
  });
});
