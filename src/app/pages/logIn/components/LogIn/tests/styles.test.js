import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { StyledButton, StyledForm } from '../styles';

describe('StyledButton', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledButton />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledForm', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
