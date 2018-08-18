import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '../Button';

describe('render', () => {
  const props = {
    text: 'Log In',
    outline: true,
    color: 'dark',
    type: 'submit',
    disabled: false
  };
  it('renders correctly', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
