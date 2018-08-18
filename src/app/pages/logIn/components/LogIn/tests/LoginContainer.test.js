import React from 'react';
import { shallow } from 'enzyme';

import { LogInContainer } from '../LogInContainer';

const initialProps = {
  authorized: false,
  fetching: false,
  errorState: {
    isError: false,
    loginError: '',
    serverError: ''
  },
  location: {
    state: '/'
  },
  actionsSubmit: jest.fn(),
  errorActionsSetNull: jest.fn()
};

const initialState = {
  email: '',
  password: '',
  emailError: '',
  passwordError: ''
};
const initialE = {
  currentTarget: {
    value: 'fa@fa.com',
    id: 'email'
  },
  preventDefault: jest.fn(),
  which: 13
};

describe('componentDidMount', () => {
  const props = {
    ...initialProps
  };
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('set errors to null', () => {
    shallow(<LogInContainer {...props} />);
    expect(props.errorActionsSetNull).toHaveBeenCalledTimes(1);
  });
});

describe('getDerivedStateFromProps', () => {
  const props = {
    ...initialProps
  };

  it('should set password value to empty string', () => {
    const wrapper = shallow(<LogInContainer {...props} />);
    wrapper.setState({
      ...initialState,
      password: '123456'
    });
    wrapper.setProps({
      ...props,
      errorState: {
        isError: true,
        loginError: 'error',
        serverError: ''
      }
    });
    expect(wrapper.state().password).toEqual('');
  });

  it('should not set password value to empty string', () => {
    const wrapper = shallow(<LogInContainer {...props} />);
    wrapper.setState({
      ...initialState,
      password: '123456'
    });
    wrapper.setProps({
      ...props,
      errorState: {
        isError: true,
        loginError: '',
        serverError: 'error'
      }
    });
    expect(wrapper.state().password).toEqual('123456');
  });
});

describe('setStateErrosToNull', () => {
  const props = {
    ...initialProps
  };
  it('return state with empty errors strings', () => {
    const wrapper = shallow(<LogInContainer {...props} />);
    const newState = {
      ...initialState,
      emailError: 'error',
      passwordError: 'error'
    };
    const expectedState = {
      ...initialState
    };
    wrapper.setState(newState);
    wrapper.instance().setStateErrorsToNull();
    expect(wrapper.state()).toEqual(expectedState);
  });
});

describe('handleInputsChange', () => {
  const e = {
    currentTarget: {
      value: 'fa@fa.com',
      id: 'email'
    }
  };
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('set errors login and server to empty strings', () => {
    const props = {
      ...initialProps
    };
    const newProps = {
      ...initialProps,
      errorState: {
        isError: true,
        loginError: 'error',
        serverError: 'error'
      }
    };
    const wrapper = shallow(<LogInContainer {...props} />);
    jest.resetAllMocks();
    wrapper.setProps(newProps);
    wrapper.instance().handleInputsChange(e);
    expect(props.errorActionsSetNull).toHaveBeenCalledTimes(1);
  });

  it('set state errors to empty stings', () => {
    const props = {
      ...initialProps
    };
    const state = {
      ...initialState,
      emailError: 'error',
      passwordError: 'error'
    };
    const wrapper = shallow(<LogInContainer {...props} />);
    wrapper.instance().setStateErrorsToNull = jest.fn();
    wrapper.setState(state);
    wrapper.instance().handleInputsChange(e);
    expect(wrapper.instance().setStateErrorsToNull).toHaveBeenCalledTimes(1);
  });

  it('set new value without the call error to empty strings', () => {
    const props = {
      ...initialProps
    };
    const expectedState = {
      ...initialState,
      email: 'fa@fa.com'
    };
    const wrapper = shallow(<LogInContainer {...props} />);
    wrapper.instance().handleInputsChange(e);
    expect(wrapper.state()).toEqual(expectedState);
  });
});

describe('handleSubmit', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('call preventDefault', () => {
    const props = {
      ...initialProps
    };
    const e = {
      ...initialE
    };
    const wrapper = shallow(<LogInContainer {...props} />);
    wrapper.instance().handleSubmit(e);
    expect(e.preventDefault).toHaveBeenCalledTimes(1);
  });

  describe('call actionSubmut', () => {
    const e = {
      ...initialE
    };
    const props = {
      ...initialProps
    };
    const expectedParameters = {
      email: 'fa@fa.com',
      password: '123456'
    };
    const state = {
      ...initialState,
      ...expectedParameters
    };

    it('call actionsSubmit', () => {
      const wrapper = shallow(<LogInContainer {...props} />);
      wrapper.setState(state);
      wrapper.instance().handleSubmit(e);
      expect(props.actionsSubmit).toHaveBeenCalledWith(expectedParameters);
    });

    it('not set email error', () => {
      const wrapper = shallow(<LogInContainer {...props} />);
      wrapper.setState(state);
      wrapper.instance().handleSubmit(e);
      expect(wrapper.state().emailError).toEqual('');
    });

    it('not set password error', () => {
      const wrapper = shallow(<LogInContainer {...props} />);
      wrapper.setState(state);
      wrapper.instance().handleSubmit(e);
      expect(wrapper.state().passwordError).toEqual('');
    });
  });
  describe('set email error', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
    const e = {
      ...initialE
    };
    const props = {
      ...initialProps
    };
    const state = {
      ...initialState,
      email: '213',
      password: '123456'
    };

    it('set email error', () => {
      const wrapper = shallow(<LogInContainer {...props} />);
      wrapper.setState(state);
      wrapper.instance().handleSubmit(e);
      expect(wrapper.state().emailError).not.toEqual('');
    });

    it('not call actionsSubmit', () => {
      const wrapper = shallow(<LogInContainer {...props} />);
      wrapper.setState(state);
      wrapper.instance().handleSubmit(e);
      expect(props.actionsSubmit).toHaveBeenCalledTimes(0);
    });
  });

  describe('set password error', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
    const e = {
      ...initialE
    };
    const props = {
      ...initialProps
    };
    const state = {
      ...initialState,
      email: 'fa@fa.com',
      password: '12'
    };

    it('set password error', () => {
      const wrapper = shallow(<LogInContainer {...props} />);
      wrapper.setState(state);
      wrapper.instance().handleSubmit(e);
      expect(wrapper.state().passwordError).not.toEqual('');
    });

    it('not call actionsSubmit', () => {
      const wrapper = shallow(<LogInContainer {...props} />);
      wrapper.setState(state);
      wrapper.instance().handleSubmit(e);
      expect(props.actionsSubmit).toHaveBeenCalledTimes(0);
    });
  });
});

describe('onKeyPress', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('call preventDefault', () => {
    const e = {
      ...initialE
    };
    const props = {
      ...initialProps
    };
    const wrapper = shallow(<LogInContainer {...props} />);
    wrapper.instance().onKeyPress(e);
    expect(e.preventDefault).toHaveBeenCalledTimes(1);
  });
});

describe('render', () => {
  const props = {
    ...initialProps
  };
  it('renders correctly', () => {
    const wrapper = shallow(<LogInContainer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
