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
  color: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string
};
