import React from 'react';
import { shallow } from 'enzyme';

import { ErrorBoundary } from '../ErrorBoundary';

describe('ErrorBoundary component', () => {
  it('componentDidCatch works correctly', () => {
    const wrapper = shallow(<ErrorBoundary>someText</ErrorBoundary>);
    wrapper.setState({ hasError: false });
    wrapper.instance().componentDidCatch();
    expect(wrapper.state().hasError).toEqual(true);
  });

  it('renders error message when there is an error', () => {
    const wrapper = shallow(<ErrorBoundary>someText</ErrorBoundary>);
    wrapper.setState({ hasError: true });
    expect(wrapper.text()).toEqual('Something went wrong.');
  });

  it('renders properly when there is an error', () => {
    const wrapper = shallow(<ErrorBoundary>someText</ErrorBoundary>);
    wrapper.setState({ hasError: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders text when there is no error', () => {
    const wrapper = shallow(<ErrorBoundary>someText</ErrorBoundary>);
    wrapper.setState({ hasError: false });
    expect(wrapper.text()).toEqual('someText');
  });

  it('renders properly when there is no error', () => {
    const wrapper = shallow(<ErrorBoundary>someText</ErrorBoundary>);
    wrapper.setState({ hasError: false });
    expect(wrapper).toMatchSnapshot();
  });
});
