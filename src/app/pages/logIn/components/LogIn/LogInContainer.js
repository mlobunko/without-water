import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as model from '../../model';
import * as actions from '../../actions';
import * as constants from '../../constants';
import LogInComponent from './LogInComponent';
import { REPO_NAME } from 'main/constants';

import authorized from 'shared/authorized';
import fetching from 'shared/fetching';
import error from 'shared/error';

export class LogInContainer extends React.Component {
  state = {
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
  };

  componentDidMount = () => {
    this.props.errorActionsSetNull();
  };

  static getDerivedStateFromProps(props) {
    if (!!props.errorState.loginError) {
      return {
        password: ''
      };
    } else return null;
  }

  setStateErrorsToNull = () => {
    this.setState({
      emailError: '',
      passwordError: ''
    });
  };

  handleInputsChange = e => {
    if (this.props.errorState.isError) {
      this.props.errorActionsSetNull();
    }
    if (!!this.state.emailError || !!this.state.passwordError) {
      this.setStateErrorsToNull();
    }
    const value = e.currentTarget.value;
    const idTarget = e.currentTarget.id;
    this.setState({
      [idTarget]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const validator = model.validator(this.state.email, this.state.password);
    if (validator.email && validator.password) {
      this.props.actionsSubmit({
        email: '' + this.state.email,
        password: '' + this.state.password
      });
    } else {
      if (!validator.email) {
        this.setState({
          emailError: constants.ERROR_FORM_LIB.email
        });
      }
      if (!validator.password) {
        this.setState({
          passwordError: constants.ERROR_FORM_LIB.password
        });
      }
    }
  };
  onKeyPress(event) {
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    }
  }

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: `${REPO_NAME}/` }
    };
    if (this.props.authorized) {
      return <Redirect to={from} />;
    }

    return (
      <LogInComponent
        email={this.state.email}
        emailError={this.state.emailError}
        fetching={this.props.fetching}
        handleInputsChange={this.handleInputsChange}
        handleSubmit={this.handleSubmit}
        isError={this.props.errorState.isError}
        loginError={this.props.errorState.loginError}
        password={this.state.password}
        passwordError={this.state.passwordError}
        onKeyPress={this.onKeyPress}
        serverError={this.props.errorState.serverError}
      />
    );
  }
}

const mapStateToProps = state => ({
  authorized: authorized.selectors.getAll(state),
  fetching: fetching.selectors.getAll(state),
  errorState: error.selectors.getAll(state)
});

const mapDispatchToProps = {
  actionsSubmit: actions.submit,
  errorActionsSetNull: error.actions.setNull
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LogInContainer)
);

LogInContainer.propTypes = {
  authorized: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  errorState: PropTypes.shape({
    isError: PropTypes.bool.isRequired,
    loginError: PropTypes.string,
    serverError: PropTypes.string
  })
};
