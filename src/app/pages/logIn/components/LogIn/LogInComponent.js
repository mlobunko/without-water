import React from 'react';
import { Alert, Button, FormGroup, Input, Label } from 'reactstrap';
import Loader from 'shared/fetching/components/Loader';

export const LogInComponent = ({
  email,
  emailError,
  fetching,
  handleInputsChange,
  handleSubmit,
  isError,
  loginError,
  password,
  passwordError,
  onKeyPress,
  serverError
}) => (
  <React.Fragment>
    <h1 className="login-h1">Log In</h1>
    <form
      onSubmit={handleSubmit}
      onKeyPress={fetching ? onKeyPress : undefined}
      className="login-form"
    >
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="Enter email"
          type="text"
          className="login-form__input"
          value={email}
          autoComplete="on"
          onChange={handleInputsChange}
          invalid={!!loginError || !!emailError}
        />
        {emailError && <Alert color="danger"> {emailError} </Alert>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="Enter password"
          className="login-form__input"
          type="password"
          value={password}
          autoComplete="on"
          onChange={handleInputsChange}
          invalid={!!loginError || !!passwordError}
        />
      </FormGroup>
      {fetching && <Loader className="loader-login" />}
      {isError || !!passwordError ? (
        <Alert color="danger">
          {loginError || serverError || passwordError}
        </Alert>
      ) : null}
      <div className="login-form__submit-div">
        <Button outline color="dark" type="submit" disabled={!!fetching}>
          Log in
        </Button>
      </div>
    </form>
  </React.Fragment>
);
