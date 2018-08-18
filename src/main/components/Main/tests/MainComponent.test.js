import React from 'react';
import { shallow } from 'enzyme';

import { MainComponent } from '../MainComponent';

describe('MainComponent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MainComponent authorized={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
