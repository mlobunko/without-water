import React from 'react';
import { Alert as AlertStrap } from 'reactstrap';
import { AlertStyled } from './styles';

export const Alert = ({ color, textError, centerPage }) => (
  <AlertStyled centerPage={centerPage}>
    <AlertStrap color={color}>{textError}</AlertStrap>
  </AlertStyled>
);

export default Alert;
