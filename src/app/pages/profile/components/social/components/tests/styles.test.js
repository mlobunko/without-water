import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { StyledHeader, StyledSocialComponent } from '../styles';

describe('StyledHeader', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledSocialComponent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledSocialComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
