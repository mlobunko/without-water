import React from 'react';
import PropTypes from 'prop-types';

import { Alert as AlertStrap } from 'reactstrap';
import { AlertStyled } from './styles';

export const Alert = ({ color, textError, centerPage }) => (
  <AlertStyled centerPage={centerPage}>
    <AlertStrap color={color}>{textError}</AlertStrap>
  </AlertStyled>
);

export default Alert;

Alert.propTypes = {
  color: PropTypes.string.isRequired,
  textError: PropTypes.string.isRequired,
  centerPage: PropTypes.bool
};
