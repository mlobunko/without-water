import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { StyledNavbarBrand, StyledNavLink } from '../styles';

describe('StyledNavbarBrand', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledNavbarBrand />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledNavLink', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledNavLink />);
    expect(wrapper).toMatchSnapshot();
  });
});
