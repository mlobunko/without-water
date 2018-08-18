import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { StyledLoader, StyledImage } from '../styles';

describe('StyledLoader component', () => {
  it('renders properly default', () => {
    const wrapper = shallow(<StyledLoader />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders properly with centerPage', () => {
    const props = {
      centerPage: true
    };
    const wrapper = shallow(<StyledLoader {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledImage component', () => {
  it('renders properly default', () => {
    const wrapper = shallow(<StyledImage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders properly with login', () => {
    const props = {
      login: true
    };
    const wrapper = shallow(<StyledImage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
