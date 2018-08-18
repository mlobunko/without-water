import React from 'react';
import { shallow } from 'enzyme';

import { Alert } from '../Alert';

describe('Alert component', () => {
  it('renders properly centerPage true', () => {
    const props = {
      color: 'dark',
      textError: 'error',
      centerPage: true
    };
    const wrapper = shallow(<Alert {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders properly centerPage false', () => {
    const props = {
      color: 'dark',
      textError: 'error',
      centerPage: false
    };
    const wrapper = shallow(<Alert {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
