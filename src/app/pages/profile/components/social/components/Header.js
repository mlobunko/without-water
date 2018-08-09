import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeader } from './styles';

export const Header = ({ text }) => <StyledHeader>{text}</StyledHeader>;

export default Header;

Header.propTypes = {
  text: PropTypes.string
};
