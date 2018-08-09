import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeaderH1 } from '../../styles';

export const HeaderH1 = ({ text }) => <StyledHeaderH1>{text}</StyledHeaderH1>;

HeaderH1.propTypes = {
  text: PropTypes.string
};

export default HeaderH1;
