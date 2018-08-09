import React from 'react';
import { Button as ButtonStrap } from 'reactstrap';
import { StyledButton } from './styles';

export const Button = ({ text, outline, color, type, disabled }) => (
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
