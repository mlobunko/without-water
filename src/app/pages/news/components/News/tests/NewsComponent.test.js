import React from 'react';
import { shallow } from 'enzyme';

import { NewsComponent } from '../NewsComponent';

describe('render', () => {
  const initialProps = {
    fetching: true,
    isError: true,
    news: [
      {
        title: '123',
        text: 'hola'
      }
    ],
    serverError: 'textError'
  };

  it('renders Loader', () => {
    const props = {
      ...initialProps,
      isError: false,
      news: [],
      serverError: ''
    };
    const wrapper = shallow(<NewsComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Articles', () => {
    const props = {
      ...initialProps,
      isError: false,
      serverError: '',
      fetching: false
    };
    const wrapper = shallow(<NewsComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Alert', () => {
    const props = {
      ...initialProps,
      news: [],
      fetching: false
    };
    const wrapper = shallow(<NewsComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
