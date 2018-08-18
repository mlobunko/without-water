import React from 'react';
import { shallow } from 'enzyme';

import { HeaderContainer } from '../HeaderContainer';

const props = {
  authorized: true,
  authorizedActionsLogOut: jest.fn()
};

describe('handlers', () => {
  Object.defineProperties(document, {
    addEventListener: {
      value: jest.fn()
    },
    removeEventListener: {
      value: jest.fn()
    }
  });

  describe('handleAddRemoveEventListener method', () => {
    it('handle remove event when isOpen false', () => {
      const initialState = {
        isOpen: false
      };
      const wrapper = shallow(<HeaderContainer {...props} />);
      wrapper.setState(initialState);
      const expectedFunction = wrapper.instance().handleDocumentClick;
      wrapper.instance().handleAddRemoveEventListener();
      expect(document.removeEventListener).toHaveBeenCalledWith(
        'click',
        expectedFunction
      );
    });

    it('handle add event when isOpen true', () => {
      const initialState = {
        isOpen: true
      };
      const wrapper = shallow(<HeaderContainer {...props} />);
      wrapper.setState(initialState);
      const expectedFunction = wrapper.instance().handleDocumentClick;
      wrapper.instance().handleAddRemoveEventListener();
      expect(document.addEventListener).toHaveBeenCalledWith(
        'click',
        expectedFunction
      );
    });
  });

  describe('toggle method', () => {
    it('change state', () => {
      const initialState = {
        isOpen: false
      };
      const wrapper = shallow(<HeaderContainer {...props} />);
      wrapper.setState(initialState);
      wrapper.instance().toggle();
      expect(wrapper.state().isOpen).toEqual(true);
    });
  });

  describe('handleDocumentClick method', () => {
    it('call toggle method if pass condition', () => {
      const e = {
        target: {
          id: 'email'
        }
      };
      const element = {
        contains: jest.fn(() => false)
      };
      const wrapper = shallow(<HeaderContainer {...props} />);
      const expectedFunction = (wrapper.instance().toggle = jest.fn());
      wrapper.instance().element = element;
      wrapper.instance().handleDocumentClick(e);
      expect(expectedFunction).toHaveBeenCalledTimes(1);
    });

    it('toggle method is not called', () => {
      const e = {
        target: {
          contains: jest.fn(() => true)
        }
      };
      const element = {
        contains: jest.fn(() => true)
      };
      const wrapper = shallow(<HeaderContainer {...props} />);
      const expectedFunction = (wrapper.instance().toggle = jest.fn());
      wrapper.instance().element = element;
      wrapper.instance().handleDocumentClick(e);
      expect(expectedFunction).toHaveBeenCalledTimes(0);
    });
  });

  describe('componentWillUnmount method', () => {
    it('call remove event', () => {
      const wrapper = shallow(<HeaderContainer {...props} />);
      wrapper.instance().componentWillUnmount();
      const expectedFunction = wrapper.instance().handleDocumentClick;
      expect(document.removeEventListener).toHaveBeenCalledWith(
        'click',
        expectedFunction
      );
    });
  });
});

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HeaderContainer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
