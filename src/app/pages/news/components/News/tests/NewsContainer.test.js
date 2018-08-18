import React from 'react';
import { shallow } from 'enzyme';

import { NewsContainer } from '../NewsContainer';

const initialProps = {
  fetching: false,
  errorState: {
    isError: false,
    serverError: '',
    loginError: ''
  },
  news: [],
  actionsFetch: jest.fn(),
  errorActionsSetNull: jest.fn()
};

describe('handlers', () => {
  describe('componentDidMount', () => {
    describe('not fetch', () => {
      const props = {
        ...initialProps,
        fetching: true
      };
      beforeEach(() => {
        jest.resetAllMocks();
        shallow(<NewsContainer {...props} />);
      });

      it('call errors to null', () => {
        expect(props.errorActionsSetNull).toHaveBeenCalledTimes(1);
      });

      it('fetch is not called', () => {
        expect(props.actionsFetch).toHaveBeenCalledTimes(0);
      });
    });

    describe('fetch', () => {
      const props = {
        ...initialProps
      };
      beforeEach(() => {
        jest.resetAllMocks();
        shallow(<NewsContainer {...props} />);
      });

      it('call errors to null', () => {
        expect(props.errorActionsSetNull).toHaveBeenCalledTimes(1);
      });

      it('call fetch', () => {
        expect(props.actionsFetch).toHaveBeenCalledTimes(1);
      });
    });
  });
});

describe('render', () => {
  const props = {
    ...initialProps
  };
  it('renders correctly', () => {
    const wrapper = shallow(<NewsContainer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
