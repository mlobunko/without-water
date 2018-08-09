import React from 'react';
import PropTypes from 'prop-types';
import { StyledImage, StyledLoader } from './styles';

export const Loader = ({ centerPage, login }) => (
  <StyledLoader centerPage={centerPage}>
    <StyledImage login={login} />
  </StyledLoader>
);

export default Loader;

Loader.propTypes = {
  centerPage: PropTypes.bool,
  login: PropTypes.bool
};
