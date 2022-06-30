import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import Lol from './react.js';

describe('test', () => {
  it('case', () => {
    const x = <Lol />;

    expect(x.text()).toBe('lol');
  });
});
