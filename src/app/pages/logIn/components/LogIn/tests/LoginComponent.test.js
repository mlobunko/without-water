import React from 'react';
import { shallow } from 'enzyme';

import { LogInComponent } from '../LogInComponent';

const initialProps = {
  email: 'fa@fa.com',
  emailError: '',
  fetching: false,
  handleInputsChange: jest.fn(),
  handleSubmit: jest.fn(),
  isError: false,
  loginError: '',
  password: '123456',
  passwordError: '',
  onKeyPress: jest.fn(),
  serverError: ''
};

describe('form', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('find handleSubmit', () => {
    const props = {
      ...initialProps
    };
    const wrapper = shallow(<LogInComponent {...props} />);
    expect(wrapper.find('StyledForm').prop('onSubmit')).toEqual(
      props.handleSubmit
    );
  });

  describe('onKeyPress', () => {
    it('property onKeyPress is onKeyPress function', () => {
      const props = {
        ...initialProps,
        fetching: true
      };
      const wrapper = shallow(<LogInComponent {...props} />);
      expect(wrapper.find('StyledForm').prop('onKeyPress')).toEqual(
        props.onKeyPress
      );
    });

    it('property onKeyPress is undefined', () => {
      const props = {
        ...initialProps
      };
      const wrapper = shallow(<LogInComponent {...props} />);
      expect(wrapper.find('StyledForm').prop('onKeyPress')).toEqual(undefined);
    });
  });

  describe('render', () => {
    it('renders correctly', () => {
      const props = {
        ...initialProps
      };
      const wrapper = shallow(<LogInComponent {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe('input email', () => {
  it('onChange', () => {
    const props = {
      ...initialProps
    };
    const wrapper = shallow(<LogInComponent {...props} />);
    expect(wrapper.find('#email').prop('onChange')).toEqual(
      props.handleInputsChange
    );
  });

  describe('invalid', () => {
    describe('loginError is true', () => {
      const props = {
        ...initialProps,
        loginError: 'error'
      };
      const wrapper = shallow(<LogInComponent {...props} />);
      const input = wrapper.find('#email');
      it('find prop', () => {
        expect(input.prop('invalid')).toEqual(true);
      });
      it('renders correctly', () => {
        expect(input).toMatchSnapshot();
      });
    });

    describe('emailError is true', () => {
      const props = {
        ...initialProps,
        emailError: 'error'
      };
      const wrapper = shallow(<LogInComponent {...props} />);
      const input = wrapper.find('#email');

      it('find prop', () => {
        expect(input.prop('invalid')).toEqual(true);
      });
      it('renders correctly', () => {
        expect(input).toMatchSnapshot();
      });
    });

    describe('emailError, loginError are false', () => {
      const props = {
        ...initialProps
      };
      const wrapper = shallow(<LogInComponent {...props} />);
      const input = wrapper.find('#email');
      it('find prop', () => {
        expect(input.prop('invalid')).toEqual(false);
      });
      it('renders correctly', () => {
        expect(input).toMatchSnapshot();
      });
    });
  });
});

describe('input password', () => {
  it('onChange', () => {
    const props = {
      ...initialProps
    };
    const wrapper = shallow(<LogInComponent {...props} />);
    expect(wrapper.find('#password').prop('onChange')).toEqual(
      props.handleInputsChange
    );
  });

  describe('invalid', () => {
    describe('loginError is true', () => {
      const props = {
        ...initialProps,
        loginError: 'error'
      };
      const wrapper = shallow(<LogInComponent {...props} />);
      const input = wrapper.find('#password');
      it('find prop', () => {
        expect(input.prop('invalid')).toEqual(true);
      });
      it('renders correctly', () => {
        expect(input).toMatchSnapshot();
      });
    });

    describe('passwordError is true', () => {
      const props = {
        ...initialProps,
        passwordError: 'error'
      };
      const wrapper = shallow(<LogInComponent {...props} />);
      const input = wrapper.find('#password');

      it('find prop', () => {
        expect(input.prop('invalid')).toEqual(true);
      });
      it('renders correctly', () => {
        expect(input).toMatchSnapshot();
      });
    });

    describe('emailError, loginError are false', () => {
      const props = {
        ...initialProps
      };
      const wrapper = shallow(<LogInComponent {...props} />);
      const input = wrapper.find('#password');

      it('find prop', () => {
        expect(input.prop('invalid')).toEqual(false);
      });
      it('renders correctly', () => {
        expect(input).toMatchSnapshot();
      });
    });
  });
});

describe('alert under the email', () => {
  describe('render', () => {
    it('emailError is true', () => {
      const props = {
        ...initialProps,
        emailError: 'emailError'
      };
      const wrapper = shallow(<LogInComponent {...props} />);
      const alert = wrapper.find('[textError="emailError"]');
      expect(alert).toMatchSnapshot();
    });
    it('emailError is false', () => {
      const props = {
        ...initialProps
      };
      const wrapper = shallow(<LogInComponent {...props} />);
      expect(wrapper.find('[color="danger"]')).toHaveLength(0);
    });
  });
});

describe('alert under the password', () => {
  describe('render', () => {
    describe('isError is true', () => {
      it('loginError', () => {
        const props = {
          ...initialProps,
          isError: true,
          loginError: 'loginError'
        };
        const wrapper = shallow(<LogInComponent {...props} />);
        const alert = wrapper.find('[textError="loginError"]');
        expect(alert).toMatchSnapshot();
      });

      it('serverError', () => {
        const props = {
          ...initialProps,
          isError: true,
          serverError: 'serverError'
        };
        const wrapper = shallow(<LogInComponent {...props} />);
        const alert = wrapper.find('[textError="serverError"]');
        expect(alert).toMatchSnapshot();
      });
    });

    it('passwordError is true', () => {
      const props = {
        ...initialProps,
        passwordError: 'passwordError'
      };
      const wrapper = shallow(<LogInComponent {...props} />);
      const alert = wrapper.find('[textError="passwordError"]');
      expect(alert).toMatchSnapshot();
    });

    it('passwordError, isError are false', () => {
      const props = {
        ...initialProps
      };
      const wrapper = shallow(<LogInComponent {...props} />);
      expect(wrapper.find('[color="danger"]')).toHaveLength(0);
    });
  });
});

describe('submit button', () => {
  describe('render', () => {
    it('fetching is true', () => {
      const props = {
        ...initialProps,
        fetching: true
      };
      const wrapper = shallow(<LogInComponent {...props} />);
      const button = wrapper.find('[type="submit"]');
      expect(button).toMatchSnapshot();
    });

    it('fetching is false', () => {
      const props = {
        ...initialProps
      };
      const wrapper = shallow(<LogInComponent {...props} />);
      const button = wrapper.find('[type="submit"]');
      expect(button).toMatchSnapshot();
    });
  });
});
