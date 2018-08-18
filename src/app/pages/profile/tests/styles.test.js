import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import {
  StyledFontAwesomeIcon,
  StyledProfileComponent,
  StyledSocialFontAwesomeIcon,
  StyledUserImage
} from '../styles';

describe('StyledFontAwesomeIcon', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledFontAwesomeIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledProfileComponent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledProfileComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledSocialFontAwesomeIcon', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledSocialFontAwesomeIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledUserImage', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledUserImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
