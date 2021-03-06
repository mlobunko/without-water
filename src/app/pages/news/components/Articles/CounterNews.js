import React from 'react';
import PropTypes from 'prop-types';

import { StyledCounterNews } from './styles';

export const CounterNews = ({ total }) => (
  <StyledCounterNews>
    <span>Total News: {total}</span>
  </StyledCounterNews>
);

CounterNews.displayName = 'CounterNews';

export default CounterNews;

CounterNews.propTypes = {
  total: PropTypes.number.isRequired
};
