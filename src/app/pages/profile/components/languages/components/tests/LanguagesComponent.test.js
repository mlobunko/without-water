import React from 'react';
import { shallow } from 'enzyme';

import { LanguagesComponent } from '../LanguagesComponent';

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LanguagesComponent languages={['english']} />);
    expect(wrapper).toMatchSnapshot();
  });
});
