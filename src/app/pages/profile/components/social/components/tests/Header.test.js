import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../Header';

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header text="London" />);
    expect(wrapper).toMatchSnapshot();
  });
});
