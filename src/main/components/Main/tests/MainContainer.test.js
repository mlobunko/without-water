import React from 'react';
import { shallow } from 'enzyme';

import { MainContainer } from '../MainContainer';

describe('MainContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MainContainer authorized={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
