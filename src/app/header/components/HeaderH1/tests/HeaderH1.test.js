import React from 'react';
import { shallow } from 'enzyme';

import { HeaderH1 } from '../HeaderH1';

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HeaderH1 text={'hola'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
