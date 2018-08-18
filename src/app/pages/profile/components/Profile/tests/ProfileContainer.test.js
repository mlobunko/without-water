import React from 'react';
import { shallow } from 'enzyme';

import { ProfileContainer } from '../ProfileContainer';

const initialProps = {
  fetchProfile: jest.fn(),
  errorActionsSetNull: jest.fn(),
  city: 'London',
  fetching: true,
  errorState: {
    isError: true,
    loginError: 'error',
    serverError: 'error'
  }
};

describe('handlers', () => {
  describe('componentDidMount', () => {
    describe('not fetch', () => {
      const props = {
        ...initialProps
      };

      beforeEach(() => {
        jest.resetAllMocks();
        shallow(<ProfileContainer {...props} />);
      });

      it('call error to null', () => {
        expect(props.errorActionsSetNull).toHaveBeenCalledTimes(1);
      });

      it('fetch is not called', () => {
        expect(props.fetchProfile).toHaveBeenCalledTimes(0);
      });
    });

    describe('fetch', () => {
      const props = {
        ...initialProps,
        city: ''
      };
      beforeEach(() => {
        jest.resetAllMocks();
        shallow(<ProfileContainer {...props} />);
      });

      it('call error to null', () => {
        expect(props.errorActionsSetNull).toHaveBeenCalledTimes(1);
      });
      it('call fetch', () => {
        expect(props.fetchProfile).toHaveBeenCalledTimes(1);
      });
    });
  });
});

describe('render', () => {
  const props = {
    ...initialProps
  };
  it('renders correctly', () => {
    const wrapper = shallow(<ProfileContainer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
