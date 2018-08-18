import React from 'react';
import { shallow } from 'enzyme';

import { Loader } from '../Loader';

describe('Loader component', () => {
  it('renders properly default', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders properly with full props', () => {
    const props = {
      centerPage: true,
      login: true
    };
    const wrapper = shallow(<Loader {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
