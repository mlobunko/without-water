import React from 'react';
import { shallow } from 'enzyme';

import { CounterNews } from '../CounterNews';

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CounterNews total={1} />);
    expect(wrapper).toMatchSnapshot();
  });
});
