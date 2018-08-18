import React from 'react';
import { shallow } from 'enzyme';

import { ProfileComponent } from '../ProfileComponent';

const initialProps = {
  city: 'London',
  fetching: true,
  isError: false,
  loginError: '',
  serverError: ''
};

describe('render', () => {
  it('render Loader', () => {
    const props = {
      ...initialProps,
      city: ''
    };
    const wrapper = shallow(<ProfileComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render StyledProfileComponent', () => {
    const props = {
      ...initialProps,
      fetching: false
    };
    const wrapper = shallow(<ProfileComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render Alert', () => {
    const props = {
      ...initialProps,
      fetching: false,
      city: '',
      isError: true,
      serverError: 'error'
    };
    const wrapper = shallow(<ProfileComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
