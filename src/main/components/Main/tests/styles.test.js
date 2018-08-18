import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { StyledMainComponent } from '../styles';

describe('StyledMainComponent', () => {
  it('renders properly', () => {
    const wrapper = shallow(<StyledMainComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
