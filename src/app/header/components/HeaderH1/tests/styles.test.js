import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { StyledHeaderH1 } from '../styles';

describe('StyledHeaderH1', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledHeaderH1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
