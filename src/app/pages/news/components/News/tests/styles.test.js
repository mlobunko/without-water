import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { StyledNewsComponent } from '../styles';

describe('StyledNewsComponent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledNewsComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
