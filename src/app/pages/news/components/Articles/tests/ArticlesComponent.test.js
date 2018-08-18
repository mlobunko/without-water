import React from 'react';
import { shallow } from 'enzyme';

import { ArticlesComponent } from '../ArticlesComponent';

describe('render', () => {
  it('renders correctly', () => {
    const news = [{ title: '123', text: 'hola' }];
    const wrapper = shallow(<ArticlesComponent news={news} />);
    expect(wrapper).toMatchSnapshot();
  });
});
