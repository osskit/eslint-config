import React from 'react';
import { describe, it, expect } from 'vitest';
import Lol from './react.js';

describe('test', () => {
  it('case', () => {
    const x = <Lol />;

    expect(x.text()).toBe('lol');
  });
});
