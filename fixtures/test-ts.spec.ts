import { describe, it, expect, vi } from 'vitest';

describe('test', () => {
  it('test', () => {
    const x = vi.fn();

    console.log(x());

    expect(1).toBe(1);
  });
});
