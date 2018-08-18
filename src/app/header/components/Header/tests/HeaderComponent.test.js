import React from 'react';
import { shallow } from 'enzyme';

import { HeaderComponent } from '../HeaderComponent';

const initialProps = {
  authorized: true,
  authorizedActionsLogOut: jest.fn(),
  isOpen: true,
  toggle: jest.fn()
};

describe('render', () => {
  it('renders correctly if authorized true', () => {
    const props = {
      ...initialProps
    };
    const wrapper = shallow(<HeaderComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly if authorized false', () => {
    const props = {
      ...initialProps,
      authorized: false
    };
    const wrapper = shallow(<HeaderComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('logOut link', () => {
  const props = {
    ...initialProps
  };
  it('click', () => {
    const wrapper = shallow(<HeaderComponent {...props} />);
    wrapper.find({ onClick: props.authorizedActionsLogOut }).simulate('click');
    expect(props.authorizedActionsLogOut).toHaveBeenCalledTimes(1);
  });
});
