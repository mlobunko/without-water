import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { AlertStyled } from '../styles';

describe('AlertStyled component', () => {
  it('renders properly default', () => {
    const wrapper = shallow(<AlertStyled />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders properly with centerPage', () => {
    const wrapper = shallow(<AlertStyled centerPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
