import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { Text } from 'react-native'; // eslint-disable-line import/no-extraneous-dependencies

describe('test', () => {
  it('case', () => {
    const x = <Text>{'lol'}</Text>;

    expect(x.text()).toBe('lol');
  });
});
