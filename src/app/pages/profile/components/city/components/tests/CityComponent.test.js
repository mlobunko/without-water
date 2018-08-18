import React from 'react';
import { shallow } from 'enzyme';

import { CityComponent } from '../CityComponent';

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CityComponent city="London" />);
    expect(wrapper).toMatchSnapshot();
  });
});
