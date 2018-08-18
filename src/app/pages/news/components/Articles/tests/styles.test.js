import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import {
  StyledArticlesSection,
  StyledCounterNews,
  StyledJumbotron,
  StyledHeader
} from '../styles';

describe('StyledArticlesSection', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledArticlesSection />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledCounterNews', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledCounterNews />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledJumbotron', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledJumbotron />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledHeader', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
