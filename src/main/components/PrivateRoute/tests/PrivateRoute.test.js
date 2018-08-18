import React from 'react';
import { shallow } from 'enzyme';

import { PrivateRoute } from '../PrivateRoute';

it('renders correctly', () => {
  const wrapper = shallow(<PrivateRoute />);
  expect(wrapper).toMatchSnapshot();
});
