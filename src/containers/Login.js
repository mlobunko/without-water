import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { logIn } from "../redux/actions/loginLogoutActions";
import { setErrorsToNull } from "../redux/actions/settingErrorActions";
import { submitLogInForm } from "../saga/actions/submittingActions";
import { Button, FormGroup, Label, Input, Alert } from "reactstrap";
import { Loader } from "../components/Loader";
import { validateEmail } from "../helpers/validate";

export class Login extends React.Component {
  state = {
    email: "",
    password: "",
    emailError: ""
  };

  componentDidMount = () => {
    this.props.setErrorsToNull();
  };

  componentWillUnmount = () => {
    this.props.setErrorsToNull();
  };

  static getDerivedStateFromProps(props, state) {
    if (props.loginError) {
      return {
        password: ""
      };
    } else return null;
  }

  setStateErrosToNull = () => {
    this.setState({
      emailError: ""
    });
  };

  handleInputsChange = e => {
    const value = e.currentTarget.value;
    const idTarget = e.currentTarget.id;
    this.setState({
      [idTarget]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.setErrorsToNull();
    this.setStateErrosToNull();
    if (validateEmail(this.state.email)) {
      this.props.submitLogInForm({
        email: "" + this.state.email,
        password: "" + this.state.password
      });
    } else {
      this.setState({
        emailError: "Email is not valid"
      });
    }
  };
  onKeyPress(event) {
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    if (this.props.authenticated) {
      return <Redirect to={from} />;
    }

    return (
      <React.Fragment>
        <h1 className="login-h1">Authentication</h1>
        <form
          onSubmit={this.handleSubmit}
          onKeyPress={this.props.fetching ? this.onKeyPress : undefined}
          className="login-form"
        >
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter email"
              type="text"
              className="login-form__input"
              value={this.state.email}
              autoComplete="on"
              onChange={this.handleInputsChange}
              invalid={!!this.props.loginError || !!this.state.emailError}
              required
            />
            {this.state.emailError && (
              <Alert color="danger"> {this.state.emailError} </Alert>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter password"
              className="login-form__input"
              type="password"
              value={this.state.password}
              autoComplete="on"
              onChange={this.handleInputsChange}
              invalid={!!this.props.loginError}
              required
            />
          </FormGroup>
          {this.props.fetching && <Loader className="loader-login" />}
          {this.props.isError && (
            <Alert color="danger">
              {this.props.loginError || this.props.serverError}
            </Alert>
          )}
          <div className="login-form__submit-div">
            <Button
              outline
              color="dark"
              type="submit"
              disabled={!!this.props.fetching}
            >
              Log in
            </Button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
  isError: state.user.isError,
  loginError: state.user.errors.loginError,
  serverError: state.user.errors.serverError,
  fetching: state.user.fetching
});

export default withRouter(
  connect(
    mapStateToProps,
    { logIn, submitLogInForm, setErrorsToNull }
  )(Login)
);
