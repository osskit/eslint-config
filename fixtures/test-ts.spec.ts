import { describe, it, expect } from 'vitest';

describe('test', () => {
  it('test', () => {
    const x = vi.fn();

    console.log(x());

    expect(1).toBe(1);
  });
});
