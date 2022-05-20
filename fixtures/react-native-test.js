import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies,import/no-unresolved
import {Text} from 'react-native'; // eslint-disable-line import/no-extraneous-dependencies,import/no-unresolved

describe('test', () => {
  it('case', () => {
    const x = <Text>{'lol'}</Text>;

    expect(x.text()).toBe('lol');
  });
});