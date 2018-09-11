import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeaderH1 } from './styles';

export const HeaderH1 = ({ text }) => <StyledHeaderH1>{text}</StyledHeaderH1>;

HeaderH1.displayName = 'HeaderH1';

export default HeaderH1;

HeaderH1.propTypes = {
  text: PropTypes.string.isRequired
};
