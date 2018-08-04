import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import * as model from '../../model';
import * as actions from '../../actions';
import error from 'shared/error';
import { LogInComponent } from './LogInComponent';

export class LogInContainer extends React.Component {
  state = {
    email: '',
    password: '',
    emailError: ''
  };

  componentDidMount = () => {
    this.props.errorActionsSetNull();
  };

  static getDerivedStateFromProps(props) {
    if (!!props.loginError) {
      return {
        password: ''
      };
    } else return null;
  }

  setStateErrosToNull = () => {
    this.setState({
      emailError: ''
    });
  };

  handleInputsChange = e => {
    if (
      (this.props.isError && !!this.props.serverError) ||
      !!this.props.loginError
    ) {
      this.props.errorActionsSetNull();
    }
    if (!!this.state.emailError) {
      this.setStateErrosToNull();
    }
    const value = e.currentTarget.value;
    const idTarget = e.currentTarget.id;
    this.setState({
      [idTarget]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.errorActionsSetNull();
    this.setStateErrosToNull();
    if (model.validateEmail(this.state.email)) {
      this.props.actionsSubmit({
        email: '' + this.state.email,
        password: '' + this.state.password
      });
    } else {
      this.setState({
        emailError: 'Email is not valid'
      });
    }
  };
  onKeyPress(event) {
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
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
        isError={this.props.isError}
        loginError={this.props.loginError}
        password={this.state.password}
        onKeyPress={this.onKeyPress}
        serverError={this.props.serverError}
      />
    );
  }
}

const mapStateToProps = state => ({
  authorized: state.authorized,
  fetching: state.fetching,
  isError: state.error.isError,
  loginError: state.error.loginError,
  serverError: state.error.serverError
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
