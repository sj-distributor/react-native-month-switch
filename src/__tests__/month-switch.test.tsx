import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { MonthSwitch } from '../index';

describe('MonthSwitch', () => {
  it('should not render <MonthSwitch /> and compare with snapshot', () => {
    const tree = renderer.create(<MonthSwitch />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render <MonthSwitch  /> and compare with snapshot', () => {
    const tree = renderer.create(<MonthSwitch format={'MM-yyyy'} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
