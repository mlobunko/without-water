import React from 'react';
import { Button as ButtonStrap } from 'reactstrap';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

export const Button = ({ color, disabled, outline, text, type }) => (
  <StyledButton>
    <ButtonStrap
      outline={outline}
      color={color}
      type={type}
      disabled={disabled}
    >
      {text}
    </ButtonStrap>
  </StyledButton>
);

export default Button;

Button.propTypes = {
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  outline: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
