import React from 'react';
import { shallow } from 'enzyme';

import { UserImage } from '../UserImage';

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<UserImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
