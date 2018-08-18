import React from 'react';
import Alert from 'shared/error/components/Alert';
import { FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

import { StyledForm } from './styles';

import Button from './Button';
import HeaderH1 from 'app/header/components/HeaderH1';
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
    <HeaderH1 text={'Log In'} />
    <StyledForm
      onSubmit={handleSubmit}
      onKeyPress={fetching ? onKeyPress : undefined}
    >
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="Enter email"
          type="text"
          value={email}
          autoComplete="on"
          onChange={handleInputsChange}
          invalid={!!loginError || !!emailError}
        />
        {!!emailError && <Alert color="danger" textError={emailError} />}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="Enter password"
          type="password"
          value={password}
          autoComplete="on"
          onChange={handleInputsChange}
          invalid={!!loginError || !!passwordError}
        />
      </FormGroup>
      {fetching && <Loader login />}
      {isError || !!passwordError ? (
        <Alert
          color="danger"
          textError={loginError || serverError || passwordError}
        />
      ) : null}
      <Button
        text={'Log In'}
        outline
        color="dark"
        type="submit"
        disabled={!!fetching}
      />
    </StyledForm>
  </React.Fragment>
);

export default LogInComponent;

LogInComponent.propTypes = {
  email: PropTypes.string.isRequired,
  emailError: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  handleInputsChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  loginError: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  serverError: PropTypes.string.isRequired
};
